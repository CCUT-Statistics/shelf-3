import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-sky-600 dark:text-gray-100">
              <Image src="/img/logo.svg" alt="智澜科技" width="32" height="32" className="w-8" />
              <span>智澜科技</span>
            </Link>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              为企业提供可落地、可迭代、可衡量的官网增长方案，帮助品牌把流量转化为真实商机。
            </div>
          </div>

          <div>
            <div className="font-semibold">快速导航</div>
            <div className="flex flex-wrap w-full mt-2 -ml-3 lg:ml-0">
              <Link href="#features" className="w-full px-4 py-2 text-gray-500 rounded-md hover:text-sky-500">产品能力</Link>
              <Link href="#cases" className="w-full px-4 py-2 text-gray-500 rounded-md hover:text-sky-500">客户案例</Link>
              <Link href="#contact" className="w-full px-4 py-2 text-gray-500 rounded-md hover:text-sky-500">联系我们</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold">法律与社媒</div>
            <div className="flex flex-wrap w-full mt-2 -ml-3 lg:ml-0">
              <Link href="/privacy" className="w-full px-4 py-2 text-gray-500 rounded-md hover:text-sky-500">隐私政策</Link>
              <Link href="/terms" className="w-full px-4 py-2 text-gray-500 rounded-md hover:text-sky-500">服务条款</Link>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener" className="w-full px-4 py-2 text-gray-500 rounded-md hover:text-sky-500">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} 智澜科技（Zhilan Tech）. All rights reserved.
        </div>
      </Container>
    </div>
  );
}
