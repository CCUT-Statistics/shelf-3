import { NextResponse } from "next/server";
import type { SiteConfig } from "@/lib/siteConfig";
import { readConfig, writeConfig } from "@/lib/server/configStore";

function isAuthorized(request: Request): boolean {
  const token = process.env.CONFIG_WRITE_TOKEN;
  if (!token) return false;

  const authHeader = request.headers.get("authorization");
  return authHeader === `Bearer ${token}`;
}

export async function GET() {
  const config = await readConfig();
  return NextResponse.json(config);
}

export async function PUT(request: Request) {
  if (!process.env.CONFIG_WRITE_TOKEN) {
    return NextResponse.json({ ok: false, message: "服务端未配置写入凭据" }, { status: 503 });
  }

  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, message: "未授权" }, { status: 401 });
  }

  try {
    const payload = (await request.json()) as SiteConfig;
    await writeConfig(payload);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "配置保存失败" }, { status: 400 });
  }
}
