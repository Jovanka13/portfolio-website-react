import React from 'react'
import aboutPicture from "../assets/profile2.png";

const About = () => {
  return (
    <div id='about'
      className='w-full mt-10 md:mt-40 px-0 lg:px-5 2xl:px-40 py-10 lg:py-0'>
      <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
        <div className='w-full md:h-[390px] lg:w-2/3 flex flex-col items-center relative bg-indigo-100 rounded-xl aboutPicture -z-0'>
          <img
            src={aboutPicture}
            className='h-[390px] p-1 rounded-md'
          />
        </div>

        <div className='w-full flex flex-col'>
          <p className='text-3xl font-bold text-black'>
            About Me
          </p>
          <p className='text-lg text-black leading-10 pt-10'>
            I am on a mission to transform digital experiences. My passion lies in translating design concepts into elegant, user-friendly interfaces. Armed with a solid foundation in HTML, CSS, JavaScript, and React I enjoy bringing websites to life by blending creativity with cutting-edge technology. With a constant curiosity for emerging web trends, I strive to create captivating and responsive solutions.
          </p>


        </div>
      </div>
    </div>
  )
}

export default About