import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div id='contact' className='w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 bg-indigo-800'>
            <div className='flex flex-col gap-10 items-center justify-center py-10'>
                <p className='text-white font-semibold tracking-wider py-3 text-xl'>Contact Me</p>

                <div className='flex gap-10 text-white text-2xl'>
                    <a href="https://github.com/Jovanka13" target="_blank" rel="noopener noreferrer"><FaGithub size={50} className='hover:scale-125' /></a>
                    <a href="https://www.linkedin.com/in/jovanka-karoloska-9413841a3/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={50} className='hover:scale-125' /></a>
                    <a href="mailto:jovanka.karoloska@gmail.com" target="_blank" rel="noopener noreferrer"><MdOutlineEmail size={50} className='hover:scale-125' /></a>
                </div>
                <div className='flex flex-col text-white text-center mt-10'>
                    <p className='text-gray-400 text-md tracking-wider'>Jovanka Karoloska 2024</p>
                    <p className='text-gray-400 text-md tracking-wider'>jovanka.karoloska@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer