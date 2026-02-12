import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <Card
          text="官网改版后，线索表单提交率提升 42%，销售首轮沟通效率明显提高。"
          name="周宁"
          title="市场总监｜云象 SaaS"
          image="/img/user1.svg"
        />
        <Card
          text="我们最看重的是可维护性。内容团队无需改代码就能更新案例和活动页面。"
          name="陈晨"
          title="品牌负责人｜海卓制造"
          image="/img/user2.svg"
        />
        <Card
          text="方案兼顾品牌与转化，落地速度快，特别适合增长阶段的企业团队。"
          name="Lina Wang"
          title="Co-founder｜Nexa Global"
          image="/img/user3.svg"
        />
      </div>
    </Container>
  );
};

function Card({ text, image, name, title }: { text: string; image: string; name: string; title: string }) {
  return (
    <div className="flex flex-col justify-between w-full h-full px-10 py-10 bg-gray-100 rounded-2xl dark:bg-trueGray-800">
      <p className="text-xl leading-normal">{text}</p>
      <div className="flex items-center mt-8 space-x-3">
        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
          <Image src={image} width={56} height={56} alt={name} />
        </div>
        <div>
          <div className="text-lg font-medium">{name}</div>
          <div className="text-gray-600 dark:text-gray-400">{title}</div>
        </div>
      </div>
    </div>
  );
}
