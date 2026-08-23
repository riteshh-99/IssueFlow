import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  const [mobileMenu, setMobileMenu] = useState(false)


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])


  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">

      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        toggleSidebar={() => setMobileMenu(true)}
      />


      <div className="flex min-h-[calc(100vh-72px)]">


        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar closeSidebar={() => {}} />
        </div>


        {/* Mobile Sidebar */}
        {mobileMenu && (
          <div className="fixed inset-0 z-50 md:hidden">

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileMenu(false)}
            />

            {/* Drawer */}
            <aside className="
      relative
      h-full
      w-64
      bg-white
      dark:bg-slate-900
    ">
              <Sidebar closeSidebar={() => setMobileMenu(false)} />
            </aside>

          </div>
        )}



        <main className="flex-1 min-w-0 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>


      </div>

    </div>
  )
}

export default MainLayout