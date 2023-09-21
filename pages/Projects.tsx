import Image from 'next/image'
import React from 'react'
import DiscordThumb from "@/public/discord-thumb.webp"
import AnotherThumb from "@/public/discord-thumb.webp"
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
<div className='bg-gray-50 h-full py-5'>
  <div className='container mx-auto text-center'>
    <h3 className='text-2xl font-semibold mb-4 border-b-2 border-green-200 pb-2'>Projects</h3>
    <p className="font-medium text-lg mb-8">
      Here you will find some of my past projects, both personal and professional, that I've worked on over the years.
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {/* Project 1 */}
      <ProjectCard
        title="Discord Application"
        description="This is a Discord application where you can invite it to your server and play various types of games. This bot is primarily focused on role-playing game elements, such as leveling up, gaining experience, and fighting monsters. It has been completed and used by over 1,000 users."
        technologies={["Node.js", "MongoDB", "AWS"]}
        imageSrc={DiscordThumb}
        altText="Discord Application Logo"
        liveDemoLink="#"
        sourceCodeLink="#"
        heightOfImage={1200}
        widthOfImage={1200}
      />
            <ProjectCard
        title="Discord Application"
        description="This is a Discord application where you can invite it to your server and play various types of games. This bot is primarily focused on role-playing game elements, such as leveling up, gaining experience, and fighting monsters. It has been completed and used by over 1,000 users."
        technologies={["Node.js", "MongoDB", "AWS"]}
        imageSrc={DiscordThumb}
        altText="Discord Application Logo"
        liveDemoLink="#"
        sourceCodeLink="#"
        heightOfImage={1200}
        widthOfImage={1200}
      />
            <ProjectCard
        title="Discord Application"
        description="This is a Discord application where you can invite it to your server and play various types of games. This bot is primarily focused on role-playing game elements, such as leveling up, gaining experience, and fighting monsters. It has been completed and used by over 1,000 users."
        technologies={["Node.js", "MongoDB", "AWS"]}
        imageSrc={DiscordThumb}
        altText="Discord Application Logo"
        liveDemoLink="#"
        sourceCodeLink="#"
        heightOfImage={1200}
        widthOfImage={1200}
      />
    </div>
  </div>
</div>


  )
}

export default Projects