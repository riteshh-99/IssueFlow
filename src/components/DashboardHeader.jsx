
const DashboardHeader = () => {
    return (
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
                <p className="mb-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Overview
                </p>

                <h1 className="
                    text-3xl
                    font-bold
                    tracking-tight
                    text-slate-900
                    dark:text-slate-100
                ">
                    Dashboard
                </h1>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                    Track your projects, issues, and development progress.
                </p>
            </div>
        </div>
    )
}

export default DashboardHeader