# 开源企业官网模板评估记录

## A. Discovery

### 执行命令

```bash
python - <<'PY'
import urllib.parse,urllib.request,json
queries=['nextjs landing template stars:>200','nuxt landing template stars:>50','astro landing template stars:>50']
seen=set();items=[]
for q in queries:
    params=urllib.parse.urlencode({'q':q,'sort':'stars','order':'desc','per_page':20})
    url='https://api.github.com/search/repositories?'+params
    req=urllib.request.Request(url,headers={'Accept':'application/vnd.github+json','User-Agent':'codex'})
    with urllib.request.urlopen(req,timeout=30) as r:
        data=json.load(r)
    for it in data.get('items',[]):
        if it['full_name'] in seen: continue
        seen.add(it['full_name'])
        items.append(it)
for it in items[:20]:
    lic=(it.get('license') or {}).get('spdx_id')
    print(f"{it['full_name']}\t{it['stargazers_count']}\t{lic}\t{it['pushed_at']}")
PY
```

### 候选（10 个）

| Repo | Stars | Last commit (pushed_at) | License | Stack（初判） | 过滤结论 |
|---|---:|---|---|---|---|
| ixartz/SaaS-Boilerplate | 6810 | 2026-02-09 | MIT | Next.js | ✅ 可候选 |
| ixartz/Next-JS-Landing-Page-Starter-Template | 2105 | 2026-01-18 | MIT | Next.js | ✅ 可候选 |
| Blazity/next-saas-starter | 1659 | 2026-02-05 | MIT | Next.js | ✅ 可候选 |
| nobruf/shadcn-landing-page | 1176 | 2025-01-16 | MIT | Next.js | ✅ 可候选 |
| web3templates/nextly-template | 1041 | 2024-09-03 | MIT | Next.js | ✅ 可候选 |
| nuxt-ui-templates/landing | 376 | 2026-02-09 | MIT | Nuxt | ✅ 可候选 |
| arthelokyo/tailnext | 430 | 2024-08-26 | MIT | Next.js | ✅ 可候选 |
| Siumauricio/landing-template-nextui | 399 | 2024-08-21 | MIT | Next.js | ✅ 可候选 |
| Gr33nW33n/nuxtship-template | 176 | 2026-02-10 | GPL-3.0 | Nuxt | ❌ 许可证不优先 |
| Startup-Landing/Startup-Landing | 674 | 2022-03-30 | CC0-1.0 | Next.js | ⚠️ 维护活跃度偏弱 |

### Top 5

| Repo | stars | last commit | license | 技术栈 | 内容编辑方式 | 部署方式 | 风险点 |
|---|---:|---|---|---|---|---|---|
| web3templates/nextly-template | 1041 | 2024-09-03 | MIT | Next.js + Tailwind | 组件文件直接改文案/图片 | Vercel / Node | Next 14.2.3 偏旧 |
| nuxt-ui-templates/landing | 376 | 2026-02-09 | MIT | Nuxt 4 + Nuxt UI | content + 组件配置 | NuxtHub/Vercel/Node | 启动依赖字体源网络 |
| ixartz/Next-JS-Landing-Page-Starter-Template | 2105 | 2026-01-18 | MIT | Next.js | 配置化 + 组件 | Vercel | 模板较重，改造成本略高 |
| nobruf/shadcn-landing-page | 1176 | 2025-01-16 | MIT | Next.js + shadcn/ui | 组件文本替换 | Vercel | UI 组件依赖较多 |
| Blazity/next-saas-starter | 1659 | 2026-02-05 | MIT | Next.js | 模块化配置 | Vercel | 更像 SaaS starter，非纯 landing |

## B. Verification

### Top2 实跑命令

```bash
mkdir -p /tmp/landing-eval && cd /tmp/landing-eval

git clone --depth=1 https://github.com/web3templates/nextly-template.git
git clone --depth=1 https://github.com/nuxt-ui-templates/landing.git

cd /tmp/landing-eval/nextly-template && pnpm install && pnpm dev
# Local: http://localhost:3000

cd /tmp/landing-eval/landing && pnpm install && pnpm dev
# Local: http://localhost:3001
```

### 实跑观察

- `nextly-template`：安装成功，`pnpm dev` 可启动；有外网请求 `fetch failed` 日志但不阻塞本地服务。
- `nuxt-ui-templates/landing`：安装成功，`pnpm dev` 可启动；启动阶段会尝试拉取字体/图标远程源，网络受限时会出现多条 warn/error。

### Lighthouse/SEO 基础检查清单（本次按代码可验证）

- meta title/description
- Open Graph（title/description/image/url）
- sitemap.xml
- robots.txt
- 语义化结构（`main`、标题层级、可访问表单标签）

### 可定制性结论

- `nextly-template`：
  - 品牌色：Tailwind class 改动直观。
  - 字体：`layout.tsx` 中 `next/font` 可替换。
  - 文案来源：各组件文件集中。
  - 图片资源：`public/img`。
  - i18n：可在 App Router 扩展路由段实现。
- `nuxt-ui-templates/landing`：
  - 可配置性强，但依赖生态（字体/模块）更重。
  - 需要更多 Nuxt 内容体系认知，2 小时落地风险更高。

## C. Decision

最终选择：`web3templates/nextly-template`。

理由：MIT + 能稳定跑通 + 文件结构扁平 + 文案和图片区块易改；在当前网络条件下比 Nuxt 模板更稳，能更快完成企业化定制。
