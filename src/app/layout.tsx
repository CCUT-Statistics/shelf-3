import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "智澜项目看板 | 新能源与思政红旅",
  description: "聚焦新能源与思政红旅项目展示，保留项目看板与合作院校墙。",
  keywords: ["项目看板", "新能源", "思政红旅", "合作院校"],
  openGraph: {
    title: "智澜项目看板 | 新能源与思政红旅",
    description: "采用 123Pan 与木函风格的简洁视觉，突出项目与合作院校展示。",
    url: "https://example.com",
    siteName: "智澜项目看板",
    images: [{ url: "/img/hero.svg", width: 1200, height: 630, alt: "智澜项目看板预览" }],
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
