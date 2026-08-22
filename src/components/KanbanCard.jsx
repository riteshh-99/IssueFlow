
const KanbanCard = ({ issue }) => {

    const handleDragStart = (e) => {
        e.dataTransfer.setData(
            "issueId",
            issue.id
        )
    }

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            className="
                cursor-grab
                active:cursor-grabbing
                rounded-xl
                border
                border-slate-200
                bg-white
                p-4
                shadow-sm
                transition
                hover:shadow-md

                dark:border-slate-700
                dark:bg-slate-900
                dark:hover:shadow-lg
            "
        >
            <h3 className="
                font-semibold
                leading-5
                text-slate-900
                dark:text-slate-100
            ">
                {issue.title}
            </h3>

            <p className="
                mt-1
                line-clamp-2
                text-sm
                text-slate-500
                dark:text-slate-400
            ">
                {issue.description}
            </p>

            <div className="mt-3 flex justify-between">

                <span className="
                    rounded-full
                    bg-indigo-50
                    px-2
                    py-1
                    text-xs
                    text-indigo-600

                    dark:bg-indigo-500/10
                    dark:text-indigo-400
                ">
                    {issue.priority}
                </span>

                <span className="
                    text-xs
                    text-slate-500
                    dark:text-slate-400
                ">
                    {issue.assignee || "Unassigned"}
                </span>

            </div>

        </div>
    )
}

export default KanbanCard