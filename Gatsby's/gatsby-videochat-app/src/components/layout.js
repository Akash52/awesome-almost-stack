import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <header className="bg-white shadow shadow-slate-500">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Video Chat App</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
    </div>
  )
}

export default Layout
