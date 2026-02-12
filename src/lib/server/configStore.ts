import { promises as fs } from "node:fs";
import path from "node:path";
import type { SiteConfig } from "@/lib/siteConfig";
import { defaultSiteConfig } from "@/lib/siteConfig";

const configPath = path.join(process.cwd(), "data", "site-config.json");

function isValidConfig(input: unknown): input is SiteConfig {
  if (!input || typeof input !== "object") return false;
  const data = input as SiteConfig;
  return (
    !!data.display &&
    Array.isArray(data.projects) &&
    typeof data.display.showHero === "boolean" &&
    typeof data.display.showFeatures === "boolean" &&
    typeof data.display.showProjects === "boolean" &&
    typeof data.display.showPartners === "boolean" &&
    typeof data.display.showContact === "boolean"
  );
}

export async function readConfig(): Promise<SiteConfig> {
  try {
    const raw = await fs.readFile(configPath, "utf-8");
    const parsed = JSON.parse(raw) as unknown;
    if (isValidConfig(parsed)) return parsed;
    return defaultSiteConfig;
  } catch {
    return defaultSiteConfig;
  }
}

export async function writeConfig(config: SiteConfig): Promise<void> {
  await fs.writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf-8");
}
