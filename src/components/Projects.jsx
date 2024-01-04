import React from 'react'
import project1 from '../assets/work/screenshot1.png'
import project2 from '../assets/work/screenshot2.png'
import project3 from '../assets/work/screenshot3.png'

const Projects = () => {
  return (
    <div id='projects'
      className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0'>
      <div className='w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
        <h4 className='text-3xl font-bold text-black text-center mb-10'>
          Projects
        </h4>

        <div className='flex flex-wrap gap-20 lg:gap-30 justify-center'>
          <div className='w-full md:w-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md'>
            <img
              src={project1}
              alt='Memory Game'
              className='w-full h-[250px] object-cover rounded-md'
            />

            <div className='w-full h-[100px] bg-white'>
              <h4 className='text-2xl text-black font-semibold py-2 px-2'>
                Memory Game
              </h4>
              <p className='text-sm text-indigo-800 px-2 uppercase'>Application created with Html, Css and Javacsript.</p>
            </div>

            <div className='mt-10 flex gap-10'>
              <a href='https://memory-game-jk.netlify.app/' target="_blank" rel="noopener noreferrer">
                <button className='bg-indigo-800 hover:bg-indigo-600 text-lg text-white font-semibold rounded-md py-3 px-5'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/Jovanka13/memory-game.git' target="_blank" rel="noopener noreferrer">
                <button className='text-lg text-white font-semibold rounded-md py-3 px-5 bg-gray-800 hover:bg-gray-600'>
                  Code
                </button>
              </a>
            </div>
          </div>

          <div className='w-full md:w-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md'>
            <img
              src={project2}
              alt='Weather App'
              className='w-full h-[250px] object-cover rounded-md'
            />

            <div className='w-full h-[100px] bg-white'>
              <h4 className='text-2xl text-black font-semibold py-2 px-2'>
                Weather App
              </h4>
              <p className='text-sm text-indigo-800 px-2 uppercase'>Website made with HTML, CSS, Bootstrap, JavaScript and OpenWeatherMap APIs.</p>
            </div>
            <div className='mt-10 flex gap-10'>
              <a href='https://weather-app-jk.netlify.app/' target="_blank" rel="noopener noreferrer">
                <button className='bg-indigo-800 hover:bg-indigo-600 text-lg text-white font-semibold rounded-md py-3 px-5'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/Jovanka13/Weather-App.git' target="_blank" rel="noopener noreferrer">
                <button className='text-lg text-white font-semibold rounded-md py-3 px-5 bg-gray-800 hover:bg-gray-600'>
                  Code
                </button>
              </a>
            </div>
          </div>

          <div className='w-full md:w-[350px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md'>
            <img
              src={project3}
              alt='E-Shop'
              className='w-full h-[250px] object-cover rounded-md'
            />

            <div className='w-full h-[100px] bg-white'>
              <h4 className='text-2xl text-black font-semibold py-2 px-2'>
                E-Shop
              </h4>
              <p className='text-sm text-indigo-800 px-2 uppercase'>Responsible website, created with Html, Css and Javacscript.</p>
            </div>
            <div className='mt-10 flex gap-10'>
              <a href='https://woman-fashion-shop.netlify.app/' target="_blank" rel="noopener noreferrer">
                <button className='bg-indigo-800 hover:bg-indigo-600 text-lg text-white font-semibold rounded-md py-3 px-5'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/Jovanka13/E-Shop.git' target="_blank" rel="noopener noreferrer">
                <button className='text-lg text-white font-semibold rounded-md py-3 px-5 bg-gray-800 hover:bg-gray-600'>
                  Code
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects