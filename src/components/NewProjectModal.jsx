import { useState } from 'react'

const NewProjectModal = ({ onClose, onCreate, project }) => {

    const [formData, setFormData] = useState(
        project || {
            name: '',
            description: '',
            status: 'planning',
            members: 0
        }
    )

    const [nameError, setNameError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: name === 'members'
                ? Math.max(0, Number(value))
                : value
        }))

        if (name === 'name') {
            setNameError('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name.trim()) {
            setNameError("Project name is required")
            return
        }

        if (!formData.description.trim()) {
            setNameError("Project description is required")
            return
        }

        onCreate(formData)
    }

    return (
        <div className="
      fixed inset-0 z-50 flex items-center justify-center
      bg-slate-900/40 p-4
    ">

            <div className="
        w-full max-w-lg rounded-2xl
        bg-white p-6 shadow-xl
        transition-colors
        dark:bg-slate-900
      ">

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        {project ? 'Edit Project' : 'New Project'}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {project
                            ? 'Update your project details.'
                            : 'Create a new development project.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(nameError)}
                        aria-describedby={
                            nameError ? 'project-name-error' : undefined
                        }
                        className="
              w-full rounded-lg border border-slate-200
              bg-white px-3 py-2.5 text-sm
              text-slate-900 outline-none
              placeholder:text-slate-400
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-slate-100
              dark:placeholder:text-slate-500
              dark:focus:ring-indigo-500/20
            "
                    />

                    {nameError && (
                        <p
                            id="project-name-error"
                            className="text-sm text-red-600 dark:text-red-400"
                        >
                            {nameError}
                        </p>
                    )}

                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="
              w-full rounded-lg border border-slate-200
              bg-white px-3 py-2.5 text-sm
              text-slate-900 outline-none
              placeholder:text-slate-400
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-slate-100
              dark:placeholder:text-slate-500
              dark:focus:ring-indigo-500/20
            "
                    />

                    <input
                        type="text"
                        name="status"
                        placeholder="Status"
                        value={formData.status}
                        onChange={handleChange}
                        className="
              w-full rounded-lg border border-slate-200
              bg-white px-3 py-2.5 text-sm
              text-slate-900 outline-none
              placeholder:text-slate-400
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-slate-100
              dark:placeholder:text-slate-500
              dark:focus:ring-indigo-500/20
            "
                    />

                    <input
                        type="number"
                        name="members"
                        min="0"
                        placeholder="Members"
                        value={formData.members}
                        onChange={handleChange}
                        className="
              w-full rounded-lg border border-slate-200
              bg-white px-3 py-2.5 text-sm
              text-slate-900 outline-none
              placeholder:text-slate-400
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-slate-100
              dark:placeholder:text-slate-500
              dark:focus:ring-indigo-500/20
            "
                    />

                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                rounded-lg border border-slate-200
                px-4 py-2 text-sm font-medium text-slate-600
                hover:bg-slate-50
                dark:border-slate-700
                dark:text-slate-300
                dark:hover:bg-slate-800
              "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                        >
                            {project ? 'Update Project' : 'Create Project'}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default NewProjectModal