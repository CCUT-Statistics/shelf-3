import { NextResponse } from "next/server";
import type { SiteConfig } from "@/lib/siteConfig";
import { readConfig, writeConfig } from "@/lib/server/configStore";

export async function GET() {
  const config = await readConfig();
  return NextResponse.json(config);
}

export async function PUT(request: Request) {
  try {
    const payload = (await request.json()) as SiteConfig;
    await writeConfig(payload);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "配置保存失败" }, { status: 400 });
  }
}
