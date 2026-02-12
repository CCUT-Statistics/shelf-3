export const ContactForm = () => {
  return (
    <section id="contact" className="max-w-4xl p-8 mx-auto mt-16 mb-20 bg-white border border-gray-200 rounded-2xl dark:bg-trueGray-800 dark:border-trueGray-700">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">联系我们</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        留下你的需求与联系方式，我们会在 1 个工作日内联系你。当前版本使用 mailto 快速收集线索，可后续切换 webhook 或 CRM API。
      </p>

      <form className="grid grid-cols-1 gap-4 mt-6" action="mailto:hello@zhilan-tech.com" method="post" encType="text/plain">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          姓名
          <input name="name" required className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-trueGray-900" placeholder="请输入姓名" />
        </label>
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          公司
          <input name="company" className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-trueGray-900" placeholder="请输入公司名称" />
        </label>
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          邮箱
          <input type="email" name="email" required className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-trueGray-900" placeholder="you@company.com" />
        </label>
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          需求描述
          <textarea name="message" required rows={4} className="w-full px-4 py-2 mt-1 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-trueGray-900" placeholder="请描述你的业务目标、当前挑战和上线时间" />
        </label>

        <button type="submit" className="px-6 py-3 font-medium text-white bg-sky-600 rounded-md hover:bg-sky-700">
          提交咨询
        </button>
      </form>
    </section>
  );
};
