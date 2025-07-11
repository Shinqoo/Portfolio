"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Stack", path: "#stack" }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] shadow-md bg-opacity-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-slate-200 border border-slate-400 p-2 rounded hover:text-white hover:border-white transition"
          >
            {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden md:block ml-auto">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-xl md:text-2xl font-semibold text-white hover:text-yellow-400 transition duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} />}
    </nav>
  );
};

export default Navbar;
