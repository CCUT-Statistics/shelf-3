"use client";

import { useEffect, useState } from "react";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CollaboratorsSection } from "@/components/CollaboratorsSection";
import { defaultSiteConfig, type SiteConfig } from "@/lib/siteConfig";

export function LandingContent() {
  const [config, setConfig] = useState<SiteConfig>(defaultSiteConfig);

  useEffect(() => {
    async function loadConfig() {
      try {
        const response = await fetch("/api/config", { cache: "no-store" });
        if (!response.ok) return;
        const data = (await response.json()) as SiteConfig;
        setConfig(data);
      } catch {
        setConfig(defaultSiteConfig);
      }
    }
    void loadConfig();
  }, []);

  return (
    <main className="bg-[#f3f6fb] pb-16 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0f5fe8] via-[#1975ff] to-[#3a8bff] pb-16 pt-16 text-white">
        <div className="absolute -top-36 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
        <div className="container relative mx-auto px-6 text-center">
          <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-sm">
            比奇社区 · 项目展示版
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-6xl">新能源 & 思政红旅项目看板</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-blue-100 lg:text-lg">
            项目进度、负责人、类别与合作院校信息。
          </p>
          <a
            href="#projects"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#0f5fe8] shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5"
          >
            查看项目看板
          </a>
        </div>
      </section>

      <ProjectsSection projects={config.projects} />
      <CollaboratorsSection />
    </main>
  );
}
