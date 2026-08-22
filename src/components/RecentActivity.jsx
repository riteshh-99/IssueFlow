import { formatTime } from '../utils/formatTime'

const RecentActivity = ({ activities }) => {
  return (
    <section className="
      mt-6 rounded-xl border border-slate-200
      bg-white p-6 shadow-sm
      transition-colors
      dark:border-slate-800
      dark:bg-slate-900
    ">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Latest updates across your projects.
        </p>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">

        {activities.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 py-4"
          >

            <div className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full bg-indigo-100
              text-sm font-semibold text-indigo-700
              dark:bg-indigo-500/15 dark:text-indigo-400
            ">
              {item.user?.charAt(0) || 'U'}
            </div>

            <div className="min-w-0 flex-1">

              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  {item.user}
                </span>{' '}

                {item.action}{' '}

                <span className="font-medium text-slate-900 dark:text-slate-100">
                  "{item.target}"
                </span>
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {item.project}
              </p>

            </div>

            <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">
              {item.createdAt
                ? formatTime(item.createdAt)
                : item.time}
            </span>

          </div>
        ))}

      </div>

    </section>
  )
}

export default RecentActivity