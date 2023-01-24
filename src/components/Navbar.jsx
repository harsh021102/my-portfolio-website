import React from 'react'
import { BiUser } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className='h-1/12 rounded-t-xl sm:rounded-none sm:rounded-r-xl sm:h-full flex flex-row md:flex-col justify-center items-center bg-nav-black'>
        <div className='flex sm:flex-col items-center gap-12 sm:gap-8'>
            <button className='my-4 sm:mx-4'>
                <HiOutlineHome className='text-white text-5xl sm:text-4xl'/>
            </button>
            <button className='sm:mx-4'>
                <BiUser className='text-white text-5xl sm:text-4xl'/>
            </button>
            <button className='sm:mx-4'>
                <FaGraduationCap className='text-white text-5xl sm:text-4xl'/>
            </button>
            <button className='sm:mx-4'>
                <BsBriefcase className='text-white text-5xl sm:text-4xl'/>
            </button>
        </div>
    </div>
  )
}

export default Navbar