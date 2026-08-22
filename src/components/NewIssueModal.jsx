import { useState } from 'react'

const NewIssueModal = ({ onClose, onCreate, issue, projects }) => {

    const [formData, setFormData] = useState(
        issue || {
            title: '',
            description: '',
            projectId: '',
            type: 'bug',
            priority: 'medium',
            status: 'backlog',
            assignee: ''
        }
    )

    const [titleError, setTitleError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [projectError, setProjectError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "title") {
            setTitleError('')
        }

        if (name === "description") {
            setDescriptionError('')
        }

        if (name === "projectId") {
            setProjectError('')
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let valid = true

        if (!formData.title.trim()) {
            setTitleError('Issue title is required')
            valid = false
        }

        if (!formData.description.trim()) {
            setDescriptionError('Issue description is required')
            valid = false
        }

        if (!formData.projectId) {
            setProjectError('Please select a project')
            valid = false
        }

        if (!valid) return

        onCreate(formData)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">

            <div className="
        w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl
        dark:bg-slate-900
      ">

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        {issue ? 'Edit Issue' : 'New Issue'}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {issue
                            ? 'Update the issue details below.'
                            : 'Create a new issue for your project.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Title */}
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Issue title"
                            aria-invalid={Boolean(titleError)}
                            aria-describedby={titleError ? 'issue-title-error' : undefined}
                            className="
                w-full rounded-lg border border-slate-200 bg-white
                px-3 py-2.5 text-sm text-slate-900 outline-none
                placeholder:text-slate-400
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                dark:border-slate-700 dark:bg-slate-800
                dark:text-slate-100 dark:placeholder:text-slate-500
                dark:focus:ring-indigo-500/20
              "
                        />

                        {titleError && (
                            <p
                                id="issue-title-error"
                                className="mt-1.5 text-sm text-red-600 dark:text-red-400"
                            >
                                {titleError}
                            </p>
                        )}

                        {descriptionError && (
                            <p className="text-sm text-red-600 dark:text-red-400">
                                {descriptionError}
                            </p>
                        )}

                        {projectError && (
                            <p className="text-sm text-red-600 dark:text-red-400">
                                {projectError}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Describe the issue"
                            rows="4"
                            className="
                w-full resize-none rounded-lg border border-slate-200
                bg-white px-3 py-2.5 text-sm text-slate-900 outline-none
                placeholder:text-slate-400
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                dark:border-slate-700 dark:bg-slate-800
                dark:text-slate-100 dark:placeholder:text-slate-500
                dark:focus:ring-indigo-500/20
              "
                        />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">

                        {/* Project */}
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                Project
                            </label>

                            <select
                                name="projectId"
                                value={formData.projectId}
                                onChange={handleChange}
                                aria-invalid={Boolean(projectError)}
                                aria-describedby={projectError ? 'issue-project-error' : undefined}
                                className="
                  w-full rounded-lg border border-slate-200 bg-white
                  px-3 py-2.5 text-sm text-slate-900 outline-none
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                  dark:border-slate-700 dark:bg-slate-800
                  dark:text-slate-100 dark:focus:ring-indigo-500/20
                "
                            >
                                <option value="">Select project</option>

                                {projects.map((project) => (
                                    <option key={project.id} value={project.id}>
                                        {project.name}
                                    </option>
                                ))}
                            </select>

                            {projectError && (
                                <p
                                    id="issue-project-error"
                                    className="mt-1.5 text-sm text-red-600 dark:text-red-400"
                                >
                                    {projectError}
                                </p>
                            )}
                        </div>

                        {/* Type */}
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                Type
                            </label>

                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="
                  w-full rounded-lg border border-slate-200 bg-white
                  px-3 py-2.5 text-sm text-slate-900 outline-none
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                  dark:border-slate-700 dark:bg-slate-800
                  dark:text-slate-100 dark:focus:ring-indigo-500/20
                "
                            >
                                <option value="bug">Bug</option>
                                <option value="feature">Feature</option>
                                <option value="improvement">Improvement</option>
                            </select>
                        </div>

                        {/* Priority */}
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                Priority
                            </label>

                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="
                  w-full rounded-lg border border-slate-200 bg-white
                  px-3 py-2.5 text-sm text-slate-900 outline-none
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                  dark:border-slate-700 dark:bg-slate-800
                  dark:text-slate-100 dark:focus:ring-indigo-500/20
                "
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="
                  w-full rounded-lg border border-slate-200 bg-white
                  px-3 py-2.5 text-sm text-slate-900 outline-none
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                  dark:border-slate-700 dark:bg-slate-800
                  dark:text-slate-100 dark:focus:ring-indigo-500/20
                "
                            >
                                <option value="backlog">Backlog</option>
                                <option value="todo">To Do</option>
                                <option value="in-progress">In Progress</option>
                                <option value="review">Review</option>
                                <option value="done">Done</option>
                            </select>
                        </div>

                    </div>

                    {/* Assignee */}
                    <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                            Assignee
                        </label>

                        <input
                            type="text"
                            name="assignee"
                            value={formData.assignee}
                            onChange={handleChange}
                            placeholder="Assignee"
                            className="
                w-full rounded-lg border border-slate-200 bg-white
                px-3 py-2.5 text-sm text-slate-900 outline-none
                placeholder:text-slate-400
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
                dark:border-slate-700 dark:bg-slate-800
                dark:text-slate-100 dark:placeholder:text-slate-500
                dark:focus:ring-indigo-500/20
              "
                        />
                    </div>

                    {/* Actions */}
                    <div className="
            flex justify-end gap-3 border-t border-slate-100 pt-5
            dark:border-slate-800
          ">
                        <button
                            type="button"
                            onClick={onClose}
                            className="
                rounded-lg border border-slate-200 px-4 py-2.5
                text-sm font-medium text-slate-600 hover:bg-slate-50
                dark:border-slate-700 dark:text-slate-300
                dark:hover:bg-slate-800
              "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
                        >
                            {issue ? 'Update Issue' : 'Create Issue'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewIssueModal