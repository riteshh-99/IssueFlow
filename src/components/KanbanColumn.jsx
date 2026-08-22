import { useState } from 'react'
import KanbanCard from './KanbanCard'

const KanbanColumn = ({ title, status, issues, onDropIssue }) => {

    const [isOver, setIsOver] = useState(false)

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsOver(true)
    }

    const handleDragLeave = () => {
        setIsOver(false)
    }

    const handleDrop = (e) => {
        const issueId = e.dataTransfer.getData("issueId")

        onDropIssue(
            Number(issueId),
            status
        )

        setIsOver(false)
    }

    const columnStyles = {
        backlog: `
            bg-slate-100
            dark:bg-slate-800
        `,
        todo: `
            bg-blue-50
            dark:bg-blue-950/30
        `,
        "in-progress": `
            bg-yellow-50
            dark:bg-yellow-950/30
        `,
        review: `
            bg-purple-50
            dark:bg-purple-950/30
        `,
        done: `
            bg-green-50
            dark:bg-green-950/30
        `
    }

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`
                min-h-125 w-64 shrink-0 rounded-xl p-4 transition
                ${columnStyles[status]}
                ${isOver ? 'ring-2 ring-indigo-400' : ''}
            `}
        >

            <div className="mb-4 flex items-center justify-between">

                <h2 className="font-semibold text-slate-800 dark:text-slate-200">
                    {title}
                </h2>

                <span className="
                    rounded-full bg-white px-3 py-1
                    text-xs font-medium text-slate-600 shadow-sm
                    dark:bg-slate-700 dark:text-slate-300
                ">
                    {issues.length}
                </span>

            </div>

            <div className="space-y-3">

                {issues.length === 0 ? (

                    <div className="
                        rounded-lg border border-dashed border-slate-300
                        p-4 text-center text-sm text-slate-400
                        dark:border-slate-700 dark:text-slate-500
                    ">
                        No issues
                    </div>

                ) : (

                    issues.map((issue) => (
                        <KanbanCard
                            key={issue.id}
                            issue={issue}
                        />
                    ))

                )}

            </div>

        </div>
    )
}

export default KanbanColumn