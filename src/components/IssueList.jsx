import IssueCard from './IssueCard'

const IssueList = ({ issues, projects, onDelete, onEdit }) => {
  if (issues.length === 0) {
    return (
      <div className="
        rounded-xl border border-dashed border-slate-300
        bg-white px-6 py-12 text-center
        dark:border-slate-700 dark:bg-slate-900
      ">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          No issues yet
        </h3>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Create an issue to start tracking your work.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {issues.map((item) => (
        <IssueCard
          key={item.id}
          issue={item}
          projects={projects}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default IssueList