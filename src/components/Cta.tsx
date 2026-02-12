import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 px-7 py-7 mx-auto text-white bg-sky-600 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">准备好把官网变成你的增长引擎了吗？</h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">从结构诊断到上线交付，我们提供端到端支持。</p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a href="#contact" className="inline-block px-7 py-3 mx-auto text-lg font-medium text-center text-sky-700 bg-white rounded-md lg:px-10 lg:py-5">
            立即咨询
          </a>
        </div>
      </div>
    </Container>
  );
};
