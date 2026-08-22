import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import IssueList from '../components/IssueList'
import IssuesHeader from '../components/IssuesHeader'
import IssuesToolbar from '../components/IssuesToolbar'
import NewIssueModal from '../components/NewIssueModal'
import { addActivity } from '../utils/addActivity'
import { generateId } from '../utils/generateId'

const Issues = ({ issues, setIssues, projects, setActivities, currentUser }) => {

  const [searchParams] = useSearchParams()

  const navbarSearch = searchParams.get('search') || ''

  const [search, setSearch] = useState('')
  const [projectFilter, setProjectFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingIssue, setEditingIssue] = useState(null)

  const filteredIssues = issues.filter((issue) => {
    const issueTitle = issue.title.toLowerCase()
    const issueDescription = issue.description.toLowerCase()

    const toolbarSearch = search.toLowerCase()
    const topSearch = navbarSearch.toLowerCase()

    const matchesToolbarSearch =
      issueTitle.includes(toolbarSearch) ||
      issueDescription.includes(toolbarSearch)

    const matchesNavbarSearch =
      issueTitle.includes(topSearch) ||
      issueDescription.includes(topSearch)

    const matchesSearch =
      matchesToolbarSearch && matchesNavbarSearch

    const matchesProject =
      projectFilter === 'all' ||
      issue.projectId === Number(projectFilter)

    const matchesStatus =
      statusFilter === 'all' ||
      issue.status === statusFilter

    const matchesPriority =
      priorityFilter === 'all' ||
      issue.priority === priorityFilter

    const matchesType =
      typeFilter === 'all' ||
      issue.type === typeFilter

    return (
      matchesSearch &&
      matchesProject &&
      matchesStatus &&
      matchesPriority &&
      matchesType
    )
  })

  const handleNewIssue = () => {
    setEditingIssue(null)
    setIsModalOpen(true)
  }

  const handleCreateIssue = (issueData) => {
    const newIssue = {
      id: generateId(),
      ...issueData,
      projectId: Number(issueData.projectId)
    }

    setIssues((prevIssues) => [
      ...prevIssues,
      newIssue
    ])

    const project = projects.find(
      project => project.id === Number(issueData.projectId)
    )

    addActivity(setActivities, {
      user: newIssue.assignee || currentUser,
      action: "created issue",
      target: newIssue.title,
      project: project?.name || "Unknown project"
    })
    setIsModalOpen(false)
  }

  const handleDeleteIssue = (issueId) => {

    const deletedIssue = issues.find(
      issue => issue.id === issueId
    )

    const project = projects.find(
      project => project.id === deletedIssue?.projectId
    )

    setIssues((prevIssues) =>
      prevIssues.filter(issue => issue.id !== issueId)
    )

    addActivity(setActivities, {
      user: deletedIssue?.assignee || currentUser,
      action: "deleted issue",
      target: deletedIssue?.title || "Unknown issue",
      project: project?.name || "Unknown project"
    })
  }

  const handleEditIssue = (issue) => {
    setEditingIssue(issue)
    setIsModalOpen(true)
  }

  const handleUpdateIssue = (updatedIssue) => {

    const project = projects.find(
      project => project.id === Number(updatedIssue.projectId)
    )

    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === updatedIssue.id
          ? {
            ...updatedIssue,
            projectId: Number(updatedIssue.projectId)
          }
          : issue
      )
    )

    addActivity(setActivities, {
      user: updatedIssue.assignee || currentUser,
      action: "updated issue",
      target: updatedIssue.title,
      project: project?.name || "Unknown project"
    })

    setIsModalOpen(false)
    setEditingIssue(null)
  }

  return (
    <div>
      <IssuesHeader
        title="Issues"
        description="Track, manage, and resolve issues across your projects."
        onNewIssue={handleNewIssue}
        hasProjects={projects.length > 0}
      />

      <IssuesToolbar
        projects={projects}
        search={search}
        setSearch={setSearch}
        projectFilter={projectFilter}
        setProjectFilter={setProjectFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      <div className="mb-4 text-sm text-slate-500">
        Showing {filteredIssues.length} of {issues.length} issues
      </div>

      <IssueList
        issues={filteredIssues}
        projects={projects}
        onDelete={handleDeleteIssue}
        onEdit={handleEditIssue}
      />

      {isModalOpen && (
        <NewIssueModal
          projects={projects}
          onClose={() => {
            setIsModalOpen(false)
            setEditingIssue(null)
          }}
          onCreate={
            editingIssue
              ? handleUpdateIssue
              : handleCreateIssue
          }
          issue={editingIssue}
        />
      )}
    </div>


  )
}

export default Issues
