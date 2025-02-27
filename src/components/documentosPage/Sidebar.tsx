import React from 'react'

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 relative z-[99]">
    <h2 className="text-xl font-bold mb-6">Sidebar</h2>
    <nav>
      <ul>
        <li className="mb-4">
          <a href="/documentos" className="text-white hover:text-gray-400">
            Documents
          </a>
        </li>
        <li className="mb-4">
          <a href="/other" className="text-white hover:text-gray-400">
            Other
          </a>
        </li>
        <li className="mb-4">
          <a href="/profile" className="text-white hover:text-gray-400">
            Profile
          </a>
        </li>
      </ul>
    </nav>
  </aside>
)
}

export default Sidebar