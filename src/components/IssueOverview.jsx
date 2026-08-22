
const IssueOverview = ({ stats }) => {
    const totalIssues = stats.reduce(
        (total, item) => total + item.value,
        0
    )

    return (
        <section className="
      mt-6 rounded-xl border border-slate-200
      bg-white p-6 shadow-sm
      transition-colors
      dark:border-slate-800
      dark:bg-slate-900
    ">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        Issue Overview
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Current distribution of issues across your workflow.
                    </p>
                </div>

                <span className="
          rounded-full bg-slate-100 px-3 py-1
          text-sm font-medium text-slate-600
          dark:bg-slate-800 dark:text-slate-300
        ">
                    {totalIssues} Total
                </span>
            </div>

            <div className="space-y-5">
                {stats.map((item) => {
                    const percentage =
                        totalIssues === 0
                            ? 0
                            : (item.value / totalIssues) * 100

                    return (
                        <div key={item.title}>
                            <div className="mb-2 flex items-center justify-between">

                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    {item.title}
                                </span>

                                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                    {item.value}
                                </span>

                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                <div
                                    className="h-full rounded-full bg-indigo-600 transition-all"
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default IssueOverview