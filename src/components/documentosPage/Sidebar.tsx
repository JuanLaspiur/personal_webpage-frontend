import Link from 'next/link';
import React from 'react';
import { FaFileAlt, FaBook, FaTools, FaUser } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800/40 text-white p-4 relative z-[999999]">
      <h2 className="text-xl font-bold mb-6 text-center">Sidebar</h2>
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <FaFileAlt />
            <Link href="/documentos" className="text-white hover:text-gray-400">
              Documents
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaBook />
            <Link href="/documentos" className="text-white hover:text-gray-400">
              Books
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaTools />
            <Link href="/documentos" className="text-white hover:text-gray-400">
              Utils
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <FaUser />
            <Link href="/documentos" className="text-white hover:text-gray-400">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
