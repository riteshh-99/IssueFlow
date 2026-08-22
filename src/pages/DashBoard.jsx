
import StatsCard from '../components/StatsCard'
import DashboardHeader from '../components/DashboardHeader'
import IssueOverview from '../components/IssueOverview'
import ActiveProjects from '../components/ActiveProjects'
import RecentActivity from '../components/RecentActivity'
import { withProjectProgress } from '../utils/projectProgress'

const Dashboard = ({ projects, issues, activities }) => {
  const projectsWithProgress = withProjectProgress(projects, issues)

  const stats = [
    {
      title: 'Total Projects',
      value: projects.length
    },
    {
      title: 'Open Issues',
      value: issues.filter(
        issue => issue.status !== 'done'
      ).length
    },
    {
      title: 'In-Progress',
      value: issues.filter(
        issue => issue.status === 'in-progress'
      ).length
    },
    {
      title: 'Done',
      value: issues.filter(
        issue => issue.status === 'done'
      ).length
    }
  ]

  const issueStats = [
    {
      title: 'Backlog',
      value: issues.filter(
        issue => issue.status === 'backlog'
      ).length
    },
    {
      title: 'To Do',
      value: issues.filter(
        issue => issue.status === 'todo'
      ).length
    },
    {
      title: 'In Progress',
      value: issues.filter(
        issue => issue.status === 'in-progress'
      ).length
    },
    {
      title: 'Review',
      value: issues.filter(
        issue => issue.status === 'review'
      ).length
    },
    {
      title: 'Done',
      value: issues.filter(
        issue => issue.status === 'done'
      ).length
    }
  ]

  const isEmpty = projects.length === 0 && issues.length === 0

  return (
    <div>
      <DashboardHeader />

      {isEmpty && (
        <div className="
          mt-6 rounded-xl border border-dashed
          border-slate-300 bg-white px-6 py-12 text-center
          dark:border-slate-700 dark:bg-slate-900
        ">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Welcome to IssueFlow
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
            Create your first project and start tracking issues from your dashboard.
          </p>
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>

      <IssueOverview stats={issueStats} />

      <ActiveProjects projects={projectsWithProgress} />

      <RecentActivity activities={activities} />
    </div>
  )
}

export default Dashboard