import React from 'react'
import { FaBootstrap, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";



const Skills = () => {
  return (
    <div id='skills'
      className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 relative'>
      <div className='w-full flex flex-col py-10 md:mt-40'>
        <h4 className='text-3xl font-bold text-black mb-10 text-center'>
          Technical Skills
        </h4>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>

          <div className='border-2 group shadow-md shadow-[#4d6078] hover:shadow-xl duration-500 relative min-w-[10rem] max-w-[16rem] bg-indigo-300 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full'>
              <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:text-indigo-300'>
                <FaHtml5 />
              </div>
            </div>
            <p className='text-center text-xl mt-3 text-indigo-900'>HTML</p>
          </div>

          <div className='border-2 group shadow-md shadow-[#4d6078] hover:shadow-xl duration-500 relative min-w-[10rem] max-w-[16rem] bg-indigo-300 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full'>
              <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:text-indigo-300'>
                <FaCss3Alt />
              </div>
            </div>
            <p className='text-center text-xl mt-3 text-indigo-900'>CSS</p>
          </div>

          <div className='border-2 group shadow-md shadow-[#4d6078] hover:shadow-xl duration-500 relative min-w-[10rem] max-w-[16rem] bg-indigo-300 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full'>
              <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:text-indigo-300'>
                <IoLogoJavascript />
              </div>
            </div>
            <p className='text-center text-xl mt-3 text-indigo-900'>JavaScript</p>
          </div>

          <div className='border-2 group shadow-md shadow-[#4d6078] hover:shadow-xl duration-500 relative min-w-[10rem] max-w-[16rem] bg-indigo-300 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full'>
              <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:text-indigo-300'>
                <FaBootstrap />
              </div>
            </div>
            <p className='text-center text-xl mt-3 text-indigo-900'>Bootstrap</p>
          </div>

          <div className='border-2 group shadow-md shadow-[#4d6078] hover:shadow-xl duration-500 relative min-w-[10rem] max-w-[16rem] bg-indigo-300 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full'>
              <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:text-indigo-300'>
                <SiTailwindcss />
              </div>
            </div>
            <p className='text-center text-xl mt-3 text-indigo-900'>Tailwind</p>
          </div>

          <div className='border-2 group shadow-md shadow-[#4d6078] hover:shadow-xl duration-500 relative min-w-[10rem] max-w-[16rem] bg-indigo-300 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full'>
              <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:text-indigo-300'>
                <FaReact />
              </div>
            </div>
            <p className='text-center text-xl mt-3 text-indigo-900'>React</p>
          </div>

          <div className='border-2 group shadow-md shadow-[#4d6078] hover:shadow-xl duration-500 relative min-w-[10rem] max-w-[16rem] bg-indigo-300 p-10 rounded-xl'>
            <div className='w-32 h-32 flex items-center justify-center rounded-full'>
              <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:text-indigo-300'>
                <FaGithub />
              </div>
            </div>
            <p className='text-center text-xl mt-3 text-indigo-900'>GitHub</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Skills;