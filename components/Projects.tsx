"use client";
import React from 'react'
import ProjectCard from './ProjectCard'
import Cards from "@/lib/Cards"
const Projects = () => {
  return (
<div className='bg-gray-50 h-full py-5'>
  <div className='container mx-auto text-center'>
    <h3 className='text-2xl font-semibold mb-4 border-b-2 border-green-200 pb-2'>Projects</h3>
    <p className="font-medium text-lg mb-8">
      Here you will find some of my past projects, both personal and professional, that I have worked on over the years.
    </p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {/* Projects */}
      {Cards.map((card, index) => (
        <ProjectCard
          key={index}
          title={card.title}
          description={card.description}
          technologies={card.technologies}
          imageSrc={card.imageSrc}
          altText={card.altText}
          liveDemoLink={card.liveDemoLink}
          sourceCodeLink={card.sourceCodeLink}
          heightOfImage={card.heightOfImage}
          widthOfImage={card.widthOfImage}
        />
      ))}
    </div>
  </div>
</div>


  )
}

export default Projects