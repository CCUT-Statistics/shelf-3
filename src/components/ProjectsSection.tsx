import type { ProjectItem } from "@/lib/siteConfig";

export function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  return (
    <section id="projects" className="mt-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">项目看板（含预留空位）</h2>
      <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
        当前展示 2 个项目 + 2 个预留空位，可在管理面板动态调整展示状态和文案。
      </p>
      <div className="grid gap-6 mt-8 md:grid-cols-2">
        {projects.filter((item) => item.visible).map((project) => (
          <article key={project.id} className="p-6 bg-white border border-gray-200 rounded-xl dark:bg-trueGray-800 dark:border-trueGray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
              <span className="px-3 py-1 text-xs text-sky-700 bg-sky-100 rounded-full dark:bg-sky-900 dark:text-sky-100">{project.status}</span>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{project.description}</p>
            <div className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <p>项目类别：{project.category}</p>
              <p>负责人：{project.owner}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
