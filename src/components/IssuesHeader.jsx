
const IssuesHeader = ({ title, description, onNewIssue, hasProjects }) => {
    return (
        <div className="mb-8 flex justify-between">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                    {title}
                </h1>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                    {description}
                </p>
            </div>

            <div>
                <button
                    onClick={onNewIssue}
                    disabled={!hasProjects}
                    title={!hasProjects ? 'Create a project first' : undefined}
                    className="
            rounded-lg bg-indigo-600 px-4 py-2
            text-sm font-medium text-white
            hover:bg-indigo-700
            disabled:cursor-not-allowed
            disabled:bg-slate-300
            dark:disabled:bg-slate-700
            dark:disabled:text-slate-400
          "
                >
                    + New Issue
                </button>

                {!hasProjects && (
                    <p className="mt-2 text-right text-sm text-slate-500 dark:text-slate-400">
                        Create a project first.
                    </p>
                )}
            </div>
        </div>
    )
}

export default IssuesHeader