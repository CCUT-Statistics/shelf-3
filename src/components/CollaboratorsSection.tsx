import { collaboratorSchoolGroups } from "@/lib/siteConfig";

export function CollaboratorsSection() {
  return (
    <section id="collaborators" className="mt-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">合作院校与协作同学</h2>
      <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
        按学校分组展示；同一学校下的不同学院已合并到同一卡片中。
      </p>
      <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {collaboratorSchoolGroups.map((group) => (
          <article key={group.school} className="p-4 bg-gray-50 border border-gray-200 rounded-lg dark:bg-trueGray-800 dark:text-gray-200 dark:border-trueGray-700">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">{group.school}</h3>
            {group.colleges.length > 0 ? (
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                {group.colleges.map((college) => (
                  <li key={college}>- {college}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">- 协作同学参与</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
