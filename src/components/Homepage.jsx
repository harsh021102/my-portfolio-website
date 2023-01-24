import React from 'react'
import HomeNameSection from './HomeNameSection'
import HomeProfileBox from './HomeProfileBox'

const Homepage = () => {
  return (
    <div className='w-full h-full flex justify-center mt-8 overflow-auto'>
        <div className='w-11/12 h-5/6 md:w-10/12 flex flex-col md:flex-row bg-violet-500'>
            <div className='flex h-1/3 md:h-full md:w-1/3  justify-center items-center'>
                <HomeProfileBox/>
            </div>
            <HomeNameSection/>
        </div>
    </div>
  )
}

export default Homepage