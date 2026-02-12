import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "智澜科技 | 企业官网增长解决方案",
  description: "智澜科技为 B2B 企业提供官网策划、设计与开发服务，帮助品牌提升线索转化与销售效率。",
  keywords: ["企业官网", "官网改版", "B2B 增长", "Next.js Landing"],
  openGraph: {
    title: "智澜科技 | 企业官网增长解决方案",
    description: "从官网内容结构到线索转化链路，2~4 周交付可上线版本。",
    url: "https://example.com",
    siteName: "智澜科技",
    images: [{ url: "/img/hero.svg", width: 1200, height: 630, alt: "智澜科技官网预览" }],
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
