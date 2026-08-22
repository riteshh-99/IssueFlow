export const withProjectProgress = (projects, issues) =>
  projects.map((project) => {
    const projectIssues = issues.filter((issue) => issue.projectId === project.id)
    const completedIssues = projectIssues.filter((issue) => issue.status === 'done')
    const progress = projectIssues.length
      ? Math.round((completedIssues.length / projectIssues.length) * 100)
      : 0

    return { ...project, progress }
  })
