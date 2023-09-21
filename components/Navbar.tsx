import React from 'react'
import {BsMoonStarsFill} from "react-icons/bs"
const Navbar = () => {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
        <h1 className="text-xl">Abdul Portfolio</h1>
        <ul className="flex items-center">
        <li><a href="/Resume.pdf" className="bg-gradient-to-r from-cyan-500 to-teal-300 text-white px-4 py-4 border-none rounded-md ml-8">Resume</a></li>
        </ul>
    </nav>
  )
}

export default Navbar