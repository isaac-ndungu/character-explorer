import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-gray-900 border-r border-gray-700 flex flex-col">
        <div className="px-5 py-6 border-b  border-gray-100/30">
            <h1 className="text-green-50 font-semibold text-2xl">Rick and Morty</h1>
            <p className="text-gray-600 text-sm uppercase tracking-widest">Character Explorer</p>
        </div>

        <ul className="space-y-2 list-none p-0 mt-4">
            <li><NavLink to='/' end className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg text-md transition-colors duration-150 border
                ${isActive
                  ? 'text-green-50 bg-green-950 border-green-900 hover:border-green-700'
                  : 'text-gray-500 border-transparent hover:bg-gray-800/50 hover:text-gray-300'
                }`
              }>
            Home</NavLink></li>
            <li><NavLink to='/characters' className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg text-md transition-colors duration-150 border
                ${isActive
                  ? 'text-green-50 bg-green-950 border-green-900 hover:border-green-700'
                  : 'text-gray-500 border-transparent hover:bg-gray-800/50 hover:text-gray-300'
                }`
              }>
            Characters</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg text-md transition-colors duration-150 border
                ${isActive
                  ? 'text-green-50 bg-green-950 border-green-900 hover:border-green-700'
                  : 'text-gray-500 border-transparent hover:bg-gray-800/50 hover:text-gray-300'
                }`
              }>
            About</NavLink></li>
        </ul>
    </div>
  )
}

export default Sidebar