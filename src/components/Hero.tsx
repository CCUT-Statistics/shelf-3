import Image from "next/image";
import { Container } from "@/components/Container";

export const Hero = () => {
  return (
    <Container className="flex flex-wrap">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            用 AI + 自动化，重构你的企业增长引擎
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            智澜科技专注于为 B2B 企业提供「官网获客 + 线索培育 + 销售协同」一体化解决方案，
            让每一条线索可追踪、可量化、可转化。
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a href="#contact" className="px-8 py-4 text-lg font-medium text-center text-white bg-sky-600 rounded-md">
              预约 30 分钟演示
            </a>
            <a href="#cases" className="px-8 py-4 text-lg font-medium text-center text-sky-700 bg-sky-100 rounded-md dark:bg-sky-900 dark:text-sky-100">
              查看客户案例
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div>
          <Image src="/img/hero.svg" width={616} height={617} className="object-cover" alt="企业官网增长方案" loading="eager" />
        </div>
      </div>
    </Container>
  );
};
