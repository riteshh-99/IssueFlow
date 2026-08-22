import ProjectCard from './ProjectCard'

const ProjectList = ({ projects, onDelete, onEdit }) => {
    if (projects.length === 0) {
        return (
            <div className="
        rounded-xl border border-dashed border-slate-300
        bg-white px-6 py-12 text-center
        dark:border-slate-700 dark:bg-slate-900
      ">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    No projects yet
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Create your first project to get started.
                </p>
            </div>
        )
    }

    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((item) => (
                <ProjectCard
                    key={item.id}
                    project={item}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    )
}

export default ProjectList