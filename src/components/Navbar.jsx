import React, { useState } from "react";
import {
    FaBars,
    FaTimes
} from "react-icons/fa";

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='px-0 2xl:px-40'>
            <div className='w-full mb-20 items-center border-b border-indigo-800 justify-between py-4 px-4 md:px-12'>
                <div className='flex items-center justify-between w-full'>
                    <a
                        href='/'
                        className='text-2xl font-bold text-indigo-800 cursor-pointer'
                    >
                        J.K.
                    </a>
                    <ul className='hidden md:flex gap-10 text-lg text-gray-800'>
                        <li className='cursor-pointer hover:text-indigo-800'>
                            <a href='#home'>Home</a>
                        </li>
                        <li className='cursor-pointer hover:text-indigo-800'>
                            <a href='#about'>About</a>
                        </li>
                        <li className='cursor-pointer hover:text-indigo-800'>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li className='cursor-pointer hover:text-indigo-800'>
                            <a href='#skills'>Skills</a>
                        </li>
                        <li className='cursor-pointer hover:text-indigo-800'>
                            <a href='#certificates'>Certificates</a>
                        </li>
                        <li className='cursor-pointer hover:text-indigo-800'>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>

                    {/* Hamburger */}
                    <div onClick={handleClick} className="md:hidden z-10">
                        {!nav ? <FaBars style={{
                            color: ' #3730A3',
                            cursor: 'pointer',
                        }} /> : <FaTimes style={{
                            color: ' #3730A3',
                            cursor: 'pointer',
                        }} />}
                    </div>
                    {/* Mobile Menu */}
                    <ul
                        className={
                            !nav
                                ? "hidden"
                                : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"
                        }
                    >


                        <li className="py-6 text-4xl hover:text-indigo-800"> <a href='#home' onClick={handleClick} className='cursor-pointer'>
                            Home
                        </a>
                        </li>
                        <li className="py-6 text-4xl hover:text-indigo-800"> <a href='#about' onClick={handleClick} className='cursor-pointer'>
                            About
                        </a>
                        </li>
                        <li className="py-6 text-4xl hover:text-indigo-800"> <a href='#projects' onClick={handleClick} className='cursor-pointer'>
                            Projects
                        </a>
                        </li>
                        <li className="py-6 text-4xl hover:text-indigo-800"> <a href='#skills' onClick={handleClick} className='cursor-pointer'>
                            Skills
                        </a>
                        </li>
                        <li className="py-6 text-4xl hover:text-indigo-800"> <a href='#certificates' onClick={handleClick} className='cursor-pointer'>
                            Certificates
                        </a>
                        </li>
                        <li className="py-6 text-4xl hover:text-indigo-800"> <a href='#contact' onClick={handleClick} className='cursor-pointer'>
                            Contact
                        </a>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
