export const addActivity = (setActivities, activity) => {
  setActivities((previousActivities) => [
    {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      ...activity,
    },
    ...previousActivities,
  ])
}
