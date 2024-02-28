import React from 'react'
import html from "../assets/html.svg";
import css from "../assets/css3.svg";
import javaScript from "../assets/javascript.svg";
import bootstrap from "../assets/bootstrap.svg";
import profilePicture from "../assets/profile1.png";


const Home = () => {
  return (
    <div id='home' className='px-0 lg:px-5 2xl:px-40 py-0 lg:py-0'>
      <div className='w-full flex flex-col lg:flex-row px-4 md:px-10 gap-10 2xl:gap-20 py-20 mt-14'>
        <div
          className='flex flex-col mb-20 lg:mb-0'>
          <span className='text-lg font-bold text-indigo-800'>
            FRONT END DEVELOPER
          </span>
          <div className='flex gap-4 items-center my-4'>
            <h1 className='text-gray-800 text-xl md:text-sm 2xl:text-xl font-bold text-center'>
              My name is
            </h1>
          </div>

          <h1 className='text-5xl 2xl:text-7xl font-extrabold text-black tracking-wider'>
            Jovanka Karoloska
          </h1>

          <p className='text-md text-black sm:mt-6 2xl:mt-10'>
            I am passionate front-end developer dedicated to crafting seamless and engaging user experiences. With a keen eye for design and a love for clean, efficient code, I specialize in turning creative ideas into functional and visually appealing websites. Let's create something amazing together!
          </p>

          <div className='mt-10 flex gap-10'>
            <a href='#contact'>
              <button className='bg-indigo-800 hover:bg-indigo-600 text-lg text-white font-semibold rounded-md py-3 px-5'>
                Hire Me
              </button>
            </a>
            <a href='#projects'>
              <button className='text-lg text-white font-semibold rounded-md py-3 px-5 bg-gray-800 hover:bg-gray-600'>
                Projects
              </button>
            </a>
          </div>
        </div>


        <div className='w-full flex-1 flex justify-center'>
          <div className='w-[300px] h-[290px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] border rounded-sm border-indigo-800 relative md:mt-20 lg:mt-0 flex items-center justify-center'>
            <img
              src={profilePicture}
              className='w-auto h-full absolute -top-5 md:-top-10' alt=''

            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home