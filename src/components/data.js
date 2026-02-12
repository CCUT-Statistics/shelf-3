import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

const benefitOne = {
  title: "从“好看”官网升级为“能转化”的增长阵地",
  desc: "聚焦企业官网最核心的增长链路：吸引目标客户、建立专业信任、引导行动转化，并沉淀可复用的销售线索资产。",
  image: "/img/benefit-one.svg",
  bullets: [
    {
      title: "业务价值主张更清晰",
      desc: "首屏 5 秒解释你是谁、解决什么问题、为什么值得选。",
      icon: <FaceSmileIcon />,
    },
    {
      title: "线索转化链路更完整",
      desc: "从案例、FAQ 到 CTA 与联系表单，提升访问到咨询的转化率。",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "数据闭环更可追踪",
      desc: "支持埋点、来源识别、线索归因，帮助市场和销售对齐目标。",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "可扩展、可维护、可快速迭代",
  desc: "采用 Next.js + TailwindCSS 工程化实践，文案、图片、SEO 配置可快速替换，适配中英文与多区域业务扩张。",
  image: "/img/benefit-two.svg",
  bullets: [
    {
      title: "响应式体验",
      desc: "覆盖桌面端、平板与移动端，保障不同设备的一致浏览体验。",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "模块化页面结构",
      desc: "按组件组织 Hero、特性、案例、FAQ、CTA，后续加页更高效。",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "深浅色模式",
      desc: "内置主题切换，兼顾品牌调性与可读性。",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
