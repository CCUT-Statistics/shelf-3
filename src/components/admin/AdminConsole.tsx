"use client";

import { useEffect, useState } from "react";
import { AdminPanel } from "@/components/admin/AdminPanel";
import { defaultSiteConfig, type SiteConfig } from "@/lib/siteConfig";

export function AdminConsole() {
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

  return <AdminPanel config={config} onApply={setConfig} />;
}
