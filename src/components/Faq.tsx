"use client";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const faqdata = [
  {
    question: "多久可以上线新版官网？",
    answer: "通常 2~4 周可上线首版，若需接入 CRM、埋点或多语言，周期会增加。",
  },
  {
    question: "是否支持后续自主维护？",
    answer: "支持。项目采用组件化结构，文案和图片入口集中，市场团队可快速迭代。",
  },
  {
    question: "可以先从首页开始吗？",
    answer: "可以。建议优先上线首页 + 联系我们 + 隐私/条款页面，后续按业务节奏扩展。",
  },
  {
    question: "可以部署到哪里？",
    answer: "推荐 Vercel 一键部署，也可部署到 Netlify 或企业自建 Node 环境。",
  },
];

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-sky-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-sky-500`} />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">{item.answer}</DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};
