"use client";
import Image from 'next/image'
import React from 'react'
import ProfilePhoto from "/public/PF.png"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
const HomePage = () => {
  return (
    <div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-50">
        <Image src={ProfilePhoto} alt="Logo" className='mx-auto rounded-full items-end' />
      </div>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2  text-teal-400 font-medium'>Abdul Alian</h2>
        <h3 className='text-2xl py-2'>Software Engineer</h3>
        <p className='text-medium py-5 leading-8 text-gray-800'>
          I am a recently graduated software engineer with a passion for solving complex problems
          and a strong commitment to continuous learning and growth in the ever-evolving field of technology.
        </p>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href="https://linkedin/a/aalian"><AiFillLinkedin /></a>
          <a href="https://github.com/Ghoui"><AiFillGithub /></a>
        </div>

      </div>
    </div>
  )
}

export default HomePage