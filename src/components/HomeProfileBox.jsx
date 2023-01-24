import React from 'react'
import profile from '../images/me.jpg' 
const HomeProfileBox = () => {
  return (
    <div className='flex justify-center md:justify-end items-center h-full w-4/6 md:w-full md:h-1/2 bg-yellow-400'>
      <img src={profile} alt="profile" className=' w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-center bg-cover bg-no-repeat rounded-full border-8 border-nav-black'/>
    </div>
  )
}

export default HomeProfileBox