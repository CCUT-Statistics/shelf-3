import { promises as fs } from "node:fs";
import path from "node:path";
import type { SiteConfig } from "@/lib/siteConfig";
import { defaultSiteConfig } from "@/lib/siteConfig";

const configPath = path.join(process.cwd(), "data", "site-config.json");

const allowedProjectStatus: SiteConfig["projects"][number]["status"][] = ["展示中", "筹备中", "预留"];

function isValidProject(input: unknown): input is SiteConfig["projects"][number] {
  if (!input || typeof input !== "object") return false;
  const project = input as SiteConfig["projects"][number];

  return (
    typeof project.id === "string" &&
    typeof project.name === "string" &&
    typeof project.description === "string" &&
    typeof project.category === "string" &&
    typeof project.owner === "string" &&
    allowedProjectStatus.includes(project.status) &&
    typeof project.visible === "boolean"
  );
}

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
    typeof data.display.showContact === "boolean" &&
    data.projects.every((project) => isValidProject(project))
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
  if (!isValidConfig(config)) {
    throw new Error("Invalid site config payload");
  }
  await fs.writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf-8");
}
