
const ProjectsHeader = ({ title, description, onNewProject }) => {
    return (
        <div className="mb-6 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {title}
                </h1>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {description}
                </p>
            </div>

            <button
                onClick={onNewProject}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
                + New Project
            </button>
        </div>
    )
}

export default ProjectsHeader