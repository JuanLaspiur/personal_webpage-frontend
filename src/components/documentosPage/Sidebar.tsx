import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800/40 text-white p-4 relative z-[999999]">
    <h2 className="text-xl font-bold mb-6">Sidebar</h2>
    <nav>
      <ul>
        <li className="mb-4">
          <Link href="/documentos" className="text-white hover:text-gray-400">
            Documents
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/documentos" className="text-white hover:text-gray-400">
            Books
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/documentos" className="text-white hover:text-gray-400">
            Utils
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/documentos" className="text-white hover:text-gray-400">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
)
}

export default Sidebar