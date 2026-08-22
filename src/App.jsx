import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import DashBoard from './pages/DashBoard.jsx'
import Projects from './pages/Projects.jsx'
import Issues from './pages/Issues.jsx'
import Board from './pages/Board.jsx'
import MainLayout from './layouts/MainLayout.jsx'

const App = () => {
  const currentUser = "Ritesh"

  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects')

    return savedProjects
      ? JSON.parse(savedProjects)
      : []
  })

  const [activities, setActivities] = useState(() => {
    const savedActivities = localStorage.getItem('activities')

    return savedActivities
      ? JSON.parse(savedActivities)
      : []
  })

  const [issues, setIssues] = useState(() => {
    const savedIssues = localStorage.getItem('issues')

    return savedIssues
      ? JSON.parse(savedIssues)
      : []
  })

  useEffect(() => {
    localStorage.setItem(
      'projects',
      JSON.stringify(projects)
    )
  }, [projects])

  useEffect(() => {
    localStorage.setItem(
      'issues',
      JSON.stringify(issues)
    )
  }, [issues])

  useEffect(() => {
    localStorage.setItem(
      'activities',
      JSON.stringify(activities)
    )
  }, [activities])

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        <Route
          index
          element={
            <DashBoard
              projects={projects}
              issues={issues}
              activities={activities}
            />
          }
        />

        <Route
          path="projects"
          element={
            <Projects
              projects={projects}
              setProjects={setProjects}
              issues={issues}
              setIssues={setIssues}
              setActivities={setActivities}
              currentUser={currentUser}
            />
          }
        />

        <Route
          path="issues"
          element={
            <Issues
              issues={issues}
              setIssues={setIssues}
              projects={projects}
              setActivities={setActivities}
              currentUser={currentUser}
            />
          }
        />

        <Route
          path="board"
          element={
            <Board
              issues={issues}
              setIssues={setIssues}
              projects={projects}
              setActivities={setActivities}
              currentUser={currentUser}
            />
          }
        />

      </Route>
    </Routes>
  )
}

export default App