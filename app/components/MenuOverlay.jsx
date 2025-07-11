import React from 'react'
import Link from 'next/link'

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <div className="md:hidden bg-[#121212] text-white px-6 pt-4 pb-8 absolute top-full left-0 right-0 z-40">
      <ul className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              onClick={closeMenu}
              className="text-xl font-semibold hover:text-yellow-400 transition"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuOverlay
