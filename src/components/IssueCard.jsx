
const IssueCard = ({ issue, projects, onDelete, onEdit }) => {
    const project = projects.find(
        project => project.id === issue.projectId
    )

    return (
        <div className="
      rounded-xl border border-slate-200 bg-white p-5
      shadow-sm transition hover:-translate-y-0.5 hover:shadow-md
      dark:border-slate-800 dark:bg-slate-900
    ">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {issue.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {issue.description}
                    </p>

                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        #{issue.id}
                    </p>
                </div>

                <span className="
          shrink-0 rounded-full bg-slate-100 px-3 py-1
          text-xs font-medium capitalize text-slate-600
          dark:bg-slate-800 dark:text-slate-300
        ">
                    {issue.type}
                </span>
            </div>

            {/* Priority + Status */}
            <div className="mt-4 flex flex-wrap gap-2">

                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${issue.priority === 'high'
                            ? 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                            : issue.priority === 'medium'
                                ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
                                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                >
                    {issue.priority}
                </span>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${issue.status === 'done'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                            : issue.status === 'in-progress'
                                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400'
                                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                >
                    {issue.status}
                </span>

            </div>

            {/* Project + Assignee */}
            <div className="
        mt-5 grid grid-cols-2 gap-4 border-t
        border-slate-100 pt-4 dark:border-slate-800
      ">

                <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        Project
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-slate-700 dark:text-slate-300">
                        {project?.name || 'Unknown project'}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        Assignee
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-slate-700 dark:text-slate-300">
                        {issue.assignee || 'Unassigned'}
                    </p>
                </div>

            </div>

            {/* Actions */}
            <div className="
        mt-5 flex gap-2 border-t border-slate-100 pt-4
        dark:border-slate-800
      ">

                <button
                    onClick={() => onEdit(issue)}
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
                    onClick={() => onDelete(issue.id)}
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

export default IssueCard