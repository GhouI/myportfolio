import React from 'react'

const AboutMe = () => {
  return (
<div className='bg-gray-50 h-full py-5'>
  <div className='container mx-auto text-center'>
    <h3 className='text-2xl font-semibold mb-4 border-b-2 border-green-500 pb-2'>About Me</h3>
    <p className="font-medium text-lg mb-8">
      Here you will find more information about me, what I do, and my current skills, mostly in terms of programming and technology.
    </p>

    <div className='flex flex-col md:flex-row space-y-6 md:space-x-6'>
      {/* Left side (About You) */}
      <div className='md:w-1/2 bg-white p-6 rounded-lg shadow-md'>
        <h1 className='font-extrabold text-xl mb-6'>Get to know me!</h1>
        <p className='text-gray-700 text-lg mb-4'>
          I'm a <span className='font-bold'>Junior Full Stack Developer</span> specializing in <span className='font-bold'>web application development and software engineering</span>.
        </p>
        <p className='text-gray-700 text-lg mb-4'>
          I have a passion for contributing to <span className='font-bold'>large-scale projects</span> and creating meaningful impacts through my work.
        </p>
        <p className='text-gray-700 text-lg mb-4'>
          In the realm of web development, I've honed my skills in <span className='font-bold'>both frontend and backend technologies</span>, allowing me to craft comprehensive applications that are both user-friendly and robust.
        </p>
        <p className='text-gray-700 text-lg mb-6'>
          Feel free to explore some of my past projects in the Projects section to get a glimpse of my capabilities.
        </p>
        <button className='bg-gradient-to-r from-green-500 to-teal-300 text-white px-4 py-4 mt-2 border-none rounded-md'>Contact Me</button>
      </div>

      {/* Right side (Skills) */}
      <div className='md:w-1/2 bg-white p-6 rounded-lg shadow-md'>
        <h1 className='font-extrabold text-xl mb-6'>My Skills</h1>
        <div className='text-gray-700'>
          <div className='mb-4'>
            <label className='font-extrabold'>Languages</label>
            <div className='flex flex-wrap justify-center items-center'>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>HTML</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>CSS</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>JavaScript</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>TypeScript</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>Python</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>Java</button>
            </div>
          </div>
          <div className='mb-4'>
            <label className='font-extrabold'>Frontend</label>
            <div className='flex flex-wrap justify-center items-center'>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>React</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>Next.js</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>TailwindCSS</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>Bootstrap</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>Material UI</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>jQuery</button>
            </div>  
          </div>
          <div className='mb-4'>
            <label className='font-extrabold'>Backend</label>
            <div className='flex flex-wrap justify-center items-center'>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>Node.js</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>Express</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>Django</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>Flask</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>MongoDB</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>MySQL</button>
              <button className='font-bold bg-gray-100 mr-2 mb-2 text-xl p-2'>PostgreSQL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  )
}

export default AboutMe