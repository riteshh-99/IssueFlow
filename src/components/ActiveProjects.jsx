
const ActiveProjects = ({ projects }) => {
    const activeProjects = projects.filter(
        project => project.status !== 'completed'
    )

    if (activeProjects.length === 0) {
        return (
            <div className="
        rounded-xl border border-dashed border-slate-300
        bg-white px-6 py-10 text-center
        dark:border-slate-700 dark:bg-slate-900
      ">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    No active projects
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Create or activate a project to see it here.
                </p>
            </div>
        )
    }

    return (
        <div className="mt-6 space-y-4">
            {activeProjects.map((project) => (
                <div
                    key={project.id}
                    className="
            rounded-xl border border-slate-200
            bg-white p-5 shadow-sm
            transition-colors
            dark:border-slate-800 dark:bg-slate-900
          "
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                                {project.name}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                {project.description}
                            </p>
                        </div>

                        <span className="
              rounded-full bg-emerald-50 px-3 py-1
              text-xs font-medium text-emerald-700
              dark:bg-emerald-500/10 dark:text-emerald-400
            ">
                            Active
                        </span>
                    </div>

                    <div className="mt-4">
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-slate-500 dark:text-slate-400">
                                Progress
                            </span>

                            <span className="font-medium text-slate-700 dark:text-slate-300">
                                {project.progress}%
                            </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                            <div
                                className="h-full rounded-full bg-indigo-600"
                                style={{ width: `${project.progress}%` }}
                            />
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        {project.members} members
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ActiveProjects