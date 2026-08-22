import { NavLink } from 'react-router-dom'
import {
    LayoutDashboard,
    FolderKanban,
    Bug,
    Kanban
} from 'lucide-react'

const Sidebar = () => {

    const navItems = [
        {
            name: 'Dashboard',
            path: '/',
            icon: LayoutDashboard
        },
        {
            name: 'Projects',
            path: '/projects',
            icon: FolderKanban
        },
        {
            name: 'Issues',
            path: '/issues',
            icon: Bug
        },
        {
            name: 'Board',
            path: '/board',
            icon: Kanban
        }
    ]

    return (
        <aside className="
      w-64 shrink-0
      border-r border-slate-200
      bg-white
      transition-colors
      dark:border-slate-800
      dark:bg-slate-900
    ">
            <div className="flex h-full flex-col p-4">

                <nav className="space-y-1">

                    {navItems.map((item) => {
                        const Icon = item.icon

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive
                                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-400'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                                    }`
                                }
                            >
                                <Icon size={19} />
                                <span>{item.name}</span>
                            </NavLink>
                        )
                    })}

                </nav>

            </div>
        </aside>
    )
}

export default Sidebar