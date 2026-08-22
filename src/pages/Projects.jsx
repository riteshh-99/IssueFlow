import { useState } from 'react'
import ProjectList from '../components/ProjectList'
import ProjectsHeader from '../components/ProjectsHeader'
import NewProjectModal from '../components/NewProjectModal'
import { addActivity } from '../utils/addActivity'
import { generateId } from '../utils/generateId'
import { withProjectProgress } from '../utils/projectProgress'

const Projects = ({ projects, setProjects, issues, setActivities, setIssues, currentUser }) => {


  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProject, setEditingProject] = useState(null)

  const handleNewProject = () => {
    setEditingProject(null)
    setIsModalOpen(true)
  }

  const handleDeleteProject = (projectId) => {

    const project = projects.find(
      project => project.id === projectId
    )

    const confirmDelete = window.confirm(
      `Delete "${project?.name}"?\n\nAll related issues will also be deleted.`
    )

    if (!confirmDelete) return

    setProjects((prevProjects) =>
      prevProjects.filter(project => project.id !== projectId)
    )

    setIssues((prevIssues) =>
      prevIssues.filter(issue => issue.projectId !== projectId)
    )

    addActivity(setActivities, {
      user: currentUser,
      action: "deleted project",
      target: project?.name || "Unknown project",
      project: project?.name || "Unknown project"
    })
  }

  const handleEditProject = (project) => {
    setEditingProject(project)
    setIsModalOpen(true)
  }

  const handleUpdateProject = (updatedProject) => {

    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === updatedProject.id
          ? updatedProject
          : project
      )
    )

    addActivity(setActivities, {
      user: currentUser,
      action: "updated project",
      target: updatedProject.name,
      project: updatedProject.name
    })

    setIsModalOpen(false)
    setEditingProject(null)
  }

  const handleCreateProject = (projectData) => {
    const newProject = {
      id: generateId(),
      ...projectData,
      progress: 0
    }

    setProjects((prevProjects) => [
      ...prevProjects,
      newProject
    ])

    addActivity(setActivities, {
      user: currentUser,
      action: "created project",
      target: newProject.name,
      project: newProject.name
    })

    setIsModalOpen(false)
  }

  const projectsWithProgress = withProjectProgress(projects, issues)

  return (
    <div>
      <ProjectsHeader
        title="Projects"
        description="Manage and track all your development projects."
        onNewProject={handleNewProject}
      />

      <ProjectList
        projects={projectsWithProgress}
        onDelete={handleDeleteProject}
        onEdit={handleEditProject}
      />

      {isModalOpen && (
        <NewProjectModal
          onClose={() => {
            setIsModalOpen(false)
            setEditingProject(null)
          }}
          onCreate={editingProject ? handleUpdateProject : handleCreateProject}
          project={editingProject}
        />
      )}
    </div>
  )
}

export default Projects
