import { collaboratorSchoolGroups } from "@/lib/siteConfig";

const palette = [
  "text-[#1453b8]",
  "text-[#be2e2e]",
  "text-[#0f6d52]",
  "text-[#2458a8]",
];

export function CollaboratorsSection() {
  return (
    <section id="collaborators" className="mt-14 border-y border-slate-300/70 bg-[#e9edf3] py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">合作院校</h2>
        <p className="mt-3 text-center text-slate-600">样式参考院校 Logo 墙：浅灰底 + 白色圆角卡片矩阵。</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {collaboratorSchoolGroups.map((group, index) => (
            <article
              key={group.school}
              className="flex min-h-[98px] items-center rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm"
            >
              <div>
                <h3 className={`text-lg font-bold ${palette[index % palette.length]}`}>{group.school}</h3>
                <p className="mt-1 text-xs text-slate-500">
                  {group.colleges.length > 0 ? group.colleges.join(" · ") : "协作团队参与"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
