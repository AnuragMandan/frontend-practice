import React from 'react'

const Sidebar = ({Side ,setSide}) => {

  console.log("render")
  return (
    <aside className={`fixed h-screen bg-slate-900 text-slate-100 flex flex-col justify-between duration-500 ease-in-out p-4 shadow-xl  ${Side?"":"-translate-x-full"}`}>
      {/* Top Header / Logo Section */}
      <div>
        <div className="flex items-center gap-3 px-3 py-2 border-b border-slate-800 pb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
            A
          </div>
          <span className="text-xl font-bold tracking-wide">Dashboard</span>
        </div>

        {/* Navigation Menu Links */}
        <nav className="mt-6 flex flex-col gap-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600 text-white font-medium transition-all"
          >
            <span>Home</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
          >
            <span>Analytics</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
          >
            <span>Students</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
          >
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* Bottom Profile / User Section */}
      <div className="border-t border-slate-800 pt-4 px-2 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-semibold text-slate-200">
          U
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-200">User Profile</span>
          <span className="text-xs text-slate-500">user@example.com</span>
        </div>
      </div>
    </aside>
  );
};
 

export default Sidebar
