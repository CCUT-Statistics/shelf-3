"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";
import { ContactForm } from "@/components/ContactForm";
import { benefitOne, benefitTwo } from "@/components/data";
import { CollaboratorsSection } from "@/components/CollaboratorsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
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
    <>
      {config.display.showHero && <Hero />}

      {config.display.showFeatures && (
        <div id="features">
          <SectionTitle preTitle="核心卖点" title="一站式企业官网落地能力">
            我们帮助企业在 2~4 周内完成官网升级：从品牌表达、内容结构到线索转化链路，兼顾设计质感与业务结果。
          </SectionTitle>
          <Benefits data={benefitOne} />
          <Benefits imgPos="right" data={benefitTwo} />
        </div>
      )}

      {config.display.showProjects && <ProjectsSection projects={config.projects} />}

      {config.display.showPartners && <CollaboratorsSection />}

      <Cta />

      {config.display.showContact && <ContactForm />}

    </>
  );
}
