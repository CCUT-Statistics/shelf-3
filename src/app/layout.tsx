import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Ktiny项目看板 | “挑战杯”全国大学生系列科技学术竞赛",
  description: "聚焦中国大学生创新创业大赛项目展示，保留项目看板与合作院校墙。",
  keywords: ["项目看板", "新能源", "思政红旅", "合作院校"],
  openGraph: {
    title: "项目看板 | 新能源与思政红旅",
    description: "经由比奇社区负责简洁视觉风格设计，学生团队负责项目与合作院校展示。",
    url: "https://bickey.net",
    siteName: "项目看板",
    images: [{ url: "/img/hero.svg", width: 1200, height: 630, alt: "项目预览" }],
    locale: "zh_CN",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
