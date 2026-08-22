
const StatsCard = ({ title, value }) => {
    return (
        <div className="
      rounded-lg
      bg-white
      p-5
      shadow
      transition-colors
      dark:bg-slate-900
    ">
            <p className="text-sm text-slate-500 dark:text-slate-400">
                {title}
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
                {value}
            </p>
        </div>
    )
}

export default StatsCard