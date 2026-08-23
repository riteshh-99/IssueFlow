import { useState } from 'react'
import { Search, Bell, Moon, Sun, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ darkMode, toggleTheme, toggleSidebar }) => {

    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        const value = e.target.value

        setSearch(value)

        if (value.trim()) {
            navigate(`/issues?search=${encodeURIComponent(value)}`)
        } else {
            navigate('/issues')
        }
    }

    return (
        <header className="
      h-18
      border-b border-slate-200
      bg-white
      px-4 sm:px-6 lg:px-8
      transition-colors
      dark:border-slate-800
      dark:bg-slate-900
    ">

            <div className="flex h-full items-center justify-between">

                <div>
                    <h1 className="text-xl font-bold tracking-tight">
                        Issue<span className="text-indigo-600">Flow</span>
                    </h1>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">

                    {/* Search */}

                    <div className="
            hidden w-72 items-center rounded-lg
            border border-slate-200
            bg-slate-50
            px-3
            sm:flex
            dark:border-slate-700
            dark:bg-slate-800
          ">

                        <Search
                            size={18}
                            className="text-slate-400"
                        />

                        <input
                            type="text"
                            placeholder="Search issues..."
                            value={search}
                            onChange={handleSearch}
                            className="
                w-full
                bg-transparent
                px-2 py-2
                text-sm
                outline-none
                placeholder:text-slate-400
                dark:text-white
              "
                        />

                    </div>

                    {/* Theme Toggle */}

                    <button
                        onClick={toggleTheme}
                        className="
              rounded-lg
              p-2
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-slate-900
              dark:text-slate-400
              dark:hover:bg-slate-800
              dark:hover:text-white
            "
                    >

                        {darkMode ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}

                    </button>

                    {/* Notification */}

                    <button className="
            rounded-lg p-2
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-900
            dark:text-slate-400
            dark:hover:bg-slate-800
            dark:hover:text-white
          ">
                        <Bell size={20} />
                    </button>

                    {/* User */}

                    <button className="
            flex items-center gap-2
            rounded-lg
            p-1.5
            transition
            hover:bg-slate-100
            dark:hover:bg-slate-800
          ">

                        <button
                            onClick={toggleSidebar}
                            className="
    md:hidden
    rounded-lg
    p-2
    text-slate-500
    hover:bg-slate-100
    dark:text-slate-400
    dark:hover:bg-slate-800
  "
                        >
                            <Menu size={22} />
                        </button>

                        <div className="
              flex h-8 w-8
              items-center justify-center
              rounded-full
              bg-indigo-100
              text-sm font-semibold
              text-indigo-700
              dark:bg-indigo-900
              dark:text-indigo-300
            ">
                            R
                        </div>

                        <span className="
              hidden text-sm font-medium
              sm:block
            ">
                            Ritesh
                        </span>

                    </button>

                </div>
            </div>

        </header>
    )
}

export default Navbar