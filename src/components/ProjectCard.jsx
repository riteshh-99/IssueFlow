
const ProjectCard = ({ project, onDelete, onEdit }) => {
    return (
        <div className="
      rounded-xl border border-slate-200 bg-white p-5
      shadow-sm transition
      hover:-translate-y-0.5 hover:shadow-md
      dark:border-slate-800 dark:bg-slate-900
    ">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {project.name}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {project.description}
                    </p>
                </div>

                <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium capitalize ${project.status === 'active'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                            : project.status === 'completed'
                                ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400'
                                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                >
                    {project.status}
                </span>
            </div>

            {/* Progress */}
            <div className="mt-6">

                <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        Progress
                    </span>

                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {project.progress}%
                    </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                        className="h-full rounded-full bg-indigo-600 transition-all"
                        style={{ width: `${project.progress}%` }}
                    />
                </div>

            </div>

            {/* Members */}
            <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800">
                <p className="text-xs text-slate-400 dark:text-slate-500">
                    Team
                </p>

                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {project.members} members
                </p>
            </div>

            {/* Actions */}
            <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">

                <button
                    onClick={() => onEdit(project)}
                    className="
            rounded-lg border border-slate-200 px-3 py-1.5
            text-sm font-medium text-slate-600 transition
            hover:bg-slate-50
            dark:border-slate-700 dark:text-slate-300
            dark:hover:bg-slate-800
          "
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(project.id)}
                    className="
            rounded-lg border border-red-200 px-3 py-1.5
            text-sm font-medium text-red-600 transition
            hover:bg-red-50
            dark:border-red-900/50 dark:text-red-400
            dark:hover:bg-red-500/10
          "
                >
                    Delete
                </button>

            </div>

        </div>
    )
}

export default ProjectCard