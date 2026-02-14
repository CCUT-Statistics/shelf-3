import type { ProjectItem } from "@/lib/siteConfig";

function statusStyle(status: ProjectItem["status"]) {
  if (status === "展示中") return "bg-emerald-100 text-emerald-700";
  if (status === "筹备中") return "bg-amber-100 text-amber-700";
  return "bg-slate-200 text-slate-700";
}

export function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  return (
    <section id="projects" className="container mx-auto mt-14 px-6">
      <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/70 lg:p-10">
        <p className="text-sm font-semibold tracking-widest text-blue-600">PROJECT DASHBOARD</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 lg:text-4xl">项目看板</h2>
        <p className="mt-3 text-slate-600">仅保留项目看板模块，支持动态配置项目展示状态与内容。</p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.filter((item) => item.visible).map((project) => (
            <article key={project.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <p className="mt-3 text-slate-600">{project.description}</p>
              <div className="mt-4 grid gap-1 text-sm text-slate-500">
                <p>项目类别：{project.category}</p>
                <p>负责人：{project.owner}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
