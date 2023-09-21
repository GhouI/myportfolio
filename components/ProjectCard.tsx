"use client";
import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    imageSrc: StaticImageData
    altText: string
    liveDemoLink: string
    sourceCodeLink: string
    heightOfImage: number
    widthOfImage: number
}

const ProjectCard : React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies,
    imageSrc,
    altText,
    liveDemoLink,
    sourceCodeLink,
    heightOfImage,
    widthOfImage
}) => {
  return (
       <div className='bg-white p-6 rounded-lg shadow-md'>
      <div className='col-span-2'>
        <Image src={imageSrc} alt={altText} width={widthOfImage} height={heightOfImage} />
      </div>
      <div className='col-span-1 mt-10'>
        <h1 className='font-bold text-xl mb-6'>{title}</h1>
        <p className='text-gray-700 text-base'>{description}</p>
        <div className='mt-4'>
          <h1 className='font-bold text-xl mb-6'>Technologies Used</h1>
          <div className='flex flex-wrap justify-center items-center'>
            {technologies.map((tech, index) => (
              <button
                key={index}
                className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'
              >
                {tech}
              </button>
            ))}
          </div>
            <button className='bg-gradient-to-r from-green-500 to-teal-300 text-white px-4 py-4 mt-2 border-none rounded-md'>
            <a href={liveDemoLink} className="text-white">Live Demo</a>
            </button>            
            <button className='ml-6 bg-gradient-to-r from-teal-300 to-green-500 text-white px-4 py-4 mt-2 border-none rounded-md'>Source Code</button>
            <a href={sourceCodeLink} className="text-white"></a>
        </div>
      </div>
    </div>           
  )
}

export default ProjectCard