# 智澜科技企业官网 Landing（Next.js）

已按“前后端分离思路”重构：

- **前端层**：展示官网页面（不展示管理面板）
- **后端层**：通过 API 路由统一读写配置（项目、模块显隐）
- **数据层**：`data/site-config.json` 持久化配置

## 1) 本地启动

```bash
pnpm install
pnpm dev
```

默认访问：<http://localhost:3000>

## 2) 生产构建

```bash
pnpm build
pnpm start
```

## 3) 部署

### Vercel

```bash
npm i -g vercel
vercel
```

> 如果希望配置持久化，请使用支持文件持久化或外部数据库的环境。Vercel Serverless 文件系统非持久。

## 4) 前后端分层结构

- 前端页面：`src/components/*`、`src/app/page.tsx`
- 管理端页面：`src/app/admin/page.tsx`（单独入口，不在首页展示）
- 后端 API：`src/app/api/config/route.ts`
- 服务层（读写配置）：`src/lib/server/configStore.ts`
- 数据文件：`data/site-config.json`
- 配置类型定义：`src/lib/siteConfig.ts`

## 5) 管理面板说明

访问 `/admin` 可进入管理端，支持：

- 控制 Hero / 卖点 / 项目看板 / 合作院校 / 联系表单 的显隐
- 在线编辑项目名称、负责人、描述、是否展示
- 保留 2 个预留项目空位，后续可直接改名上线
- 点击“保存到后端”后写入 `data/site-config.json`

## 6) 院校展示规则

- 按学校分组展示
- 相同学校的不同学院合并到同一卡片中（如：长春工业大学）

## 7) API

- `GET /api/config`：获取当前展示配置
- `PUT /api/config`：更新展示配置

## 8) 许可证

上游模板许可证：MIT。请保留 LICENSE 文件，并在商用前确认第三方素材（图片、图标、字体）的授权范围。
