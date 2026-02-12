"use client";

import { useEffect, useMemo, useState } from "react";
import type { SiteConfig } from "@/lib/siteConfig";
import { defaultSiteConfig } from "@/lib/siteConfig";

interface AdminPanelProps {
  config: SiteConfig;
  onApply: (next: SiteConfig) => void;
}

export function AdminPanel({ config, onApply }: AdminPanelProps) {
  const [draft, setDraft] = useState<SiteConfig>(config);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setDraft(config);
  }, [config]);

  const visibleCount = useMemo(() => draft.projects.filter((item) => item.visible).length, [draft.projects]);

  const setDisplay = (key: keyof SiteConfig["display"], checked: boolean) => {
    setDraft((prev) => ({ ...prev, display: { ...prev.display, [key]: checked } }));
  };

  const updateProject = (index: number, patch: Partial<SiteConfig["projects"][number]>) => {
    setDraft((prev) => {
      const projects = [...prev.projects];
      projects[index] = { ...projects[index], ...patch };
      return { ...prev, projects };
    });
  };

  const save = async () => {
    setSaving(true);
    setMessage("");
    try {
      const response = await fetch("/api/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      if (!response.ok) {
        setMessage("保存失败，请重试。");
      } else {
        onApply(draft);
        setMessage("已保存到后端配置文件。\n");
      }
    } catch {
      setMessage("保存失败，请检查后端服务。");
    } finally {
      setSaving(false);
    }
  };

  const reset = async () => {
    setDraft(defaultSiteConfig);
    setSaving(true);
    setMessage("");
    try {
      const response = await fetch("/api/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(defaultSiteConfig),
      });
      if (response.ok) {
        onApply(defaultSiteConfig);
        setMessage("已恢复默认并同步后端。\n");
      } else {
        setMessage("恢复失败，请重试。");
      }
    } catch {
      setMessage("恢复失败，请检查后端服务。");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section id="admin" className="mt-16 p-6 border rounded-xl border-sky-200 bg-sky-50 dark:bg-trueGray-800 dark:border-trueGray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">管理面板（前后端分离版）</h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        前端负责展示与编辑，后端 API 负责读写配置。当前可见项目：{visibleCount}。
      </p>

      <div className="grid gap-3 mt-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          ["showHero", "显示 Hero"],
          ["showFeatures", "显示卖点"],
          ["showProjects", "显示项目看板"],
          ["showPartners", "显示合作院校"],
          ["showContact", "显示联系表单"],
        ].map(([key, label]) => (
          <label key={key} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <input
              type="checkbox"
              checked={draft.display[key as keyof SiteConfig["display"]]}
              onChange={(event) => setDisplay(key as keyof SiteConfig["display"], event.target.checked)}
            />
            {label}
          </label>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {draft.projects.map((project, index) => (
          <div key={project.id} className="p-4 bg-white border border-gray-200 rounded-lg dark:bg-trueGray-900 dark:border-trueGray-700">
            <div className="grid gap-3 md:grid-cols-2">
              <label className="text-sm text-gray-700 dark:text-gray-200">
                项目名称
                <input
                  value={project.name}
                  onChange={(event) => updateProject(index, { name: event.target.value })}
                  className="w-full px-3 py-2 mt-1 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-trueGray-800"
                />
              </label>
              <label className="text-sm text-gray-700 dark:text-gray-200">
                负责人
                <input
                  value={project.owner}
                  onChange={(event) => updateProject(index, { owner: event.target.value })}
                  className="w-full px-3 py-2 mt-1 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-trueGray-800"
                />
              </label>
            </div>
            <label className="block mt-3 text-sm text-gray-700 dark:text-gray-200">
              项目描述
              <textarea
                rows={2}
                value={project.description}
                onChange={(event) => updateProject(index, { description: event.target.value })}
                className="w-full px-3 py-2 mt-1 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-trueGray-800"
              />
            </label>
            <label className="inline-flex items-center gap-2 mt-3 text-sm text-gray-700 dark:text-gray-200">
              <input
                type="checkbox"
                checked={project.visible}
                onChange={(event) => updateProject(index, { visible: event.target.checked })}
              />
              前端显示该项目
            </label>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <button disabled={saving} onClick={save} className="px-4 py-2 text-white bg-sky-600 rounded-md hover:bg-sky-700 disabled:opacity-60">
          {saving ? "保存中..." : "保存到后端"}
        </button>
        <button disabled={saving} onClick={reset} className="px-4 py-2 text-sky-700 bg-sky-100 rounded-md hover:bg-sky-200 disabled:opacity-60">
          恢复默认
        </button>
      </div>
      {message && <p className="mt-3 text-sm text-sky-700 dark:text-sky-300">{message}</p>}
    </section>
  );
}
