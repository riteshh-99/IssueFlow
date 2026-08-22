
const IssuesToolbar = ({
    projects,
    search,
    setSearch,
    projectFilter,
    setProjectFilter,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    typeFilter,
    setTypeFilter
}) => {
    return (
        <div
            className="
        mb-5 rounded-xl border border-slate-200
        bg-white p-4 shadow-sm
        dark:border-slate-800 dark:bg-slate-900
      "
        >
            <div className="grid gap-3 lg:grid-cols-[minmax(240px,1fr)_repeat(4,minmax(140px,1fr))]">

                <input
                    type="text"
                    placeholder="Search issues..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="
            rounded-lg border border-slate-200
            bg-white px-3 py-2.5 text-sm
            text-slate-900 outline-none
            placeholder:text-slate-400
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
            dark:border-slate-700 dark:bg-slate-800
            dark:text-slate-100
            dark:placeholder:text-slate-500
            dark:focus:ring-indigo-500/20
          "
                />

                <select
                    value={projectFilter}
                    onChange={(e) => setProjectFilter(e.target.value)}
                    className="
            rounded-lg border border-slate-200 bg-white
            px-3 py-2.5 text-sm text-slate-900 outline-none
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
            dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100
            dark:focus:ring-indigo-500/20
          "
                >
                    <option value="all">All Projects</option>

                    {projects.map((project) => (
                        <option key={project.id} value={project.id}>
                            {project.name}
                        </option>
                    ))}
                </select>

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="
            rounded-lg border border-slate-200 bg-white
            px-3 py-2.5 text-sm text-slate-900 outline-none
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
            dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100
            dark:focus:ring-indigo-500/20
          "
                >
                    <option value="all">All Status</option>
                    <option value="backlog">Backlog</option>
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="review">Review</option>
                    <option value="done">Done</option>
                </select>

                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="
            rounded-lg border border-slate-200 bg-white
            px-3 py-2.5 text-sm text-slate-900 outline-none
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
            dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100
            dark:focus:ring-indigo-500/20
          "
                >
                    <option value="all">All Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="
            rounded-lg border border-slate-200 bg-white
            px-3 py-2.5 text-sm text-slate-900 outline-none
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
            dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100
            dark:focus:ring-indigo-500/20
          "
                >
                    <option value="all">All Types</option>
                    <option value="bug">Bug</option>
                    <option value="feature">Feature</option>
                    <option value="improvement">Improvement</option>
                </select>

            </div>
        </div>
    )
}

export default IssuesToolbar