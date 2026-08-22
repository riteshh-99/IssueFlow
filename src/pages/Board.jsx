import KanbanColumn from '../components/KanbanColumn'
import { addActivity } from '../utils/addActivity'

const Board = ({
  issues,
  setIssues,
  projects,
  setActivities,
  currentUser
}) => {

  const columns = [
    { title: "Backlog", status: "backlog" },
    { title: "Todo", status: "todo" },
    { title: "In Progress", status: "in-progress" },
    { title: "Review", status: "review" },
    { title: "Done", status: "done" }
  ]

  const handleDropIssue = (issueId, newStatus) => {

    const movedIssue = issues.find(
      issue => issue.id === issueId
    )

    if (!movedIssue) return

    if (movedIssue.status === newStatus) return

    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === issueId
          ? {
            ...issue,
            status: newStatus
          }
          : issue
      )
    )

    const project = projects.find(
      project => project.id === movedIssue.projectId
    )

    addActivity(setActivities, {
      user: movedIssue.assignee || currentUser,
      action: "moved issue",
      target: movedIssue.title,
      project: project?.name || "Unknown project",
      status: newStatus
    })
  }

  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      {columns.map((column) => (
        <KanbanColumn
          key={column.status}
          title={column.title}
          status={column.status}
          issues={issues.filter(
            issue => issue.status === column.status
          )}
          onDropIssue={handleDropIssue}
        />
      ))}
    </div>
  )
}

export default Board