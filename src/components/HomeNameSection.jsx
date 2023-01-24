import React from 'react'
import Button from '../utils/Button'

const HomeNameSection = () => {
  return (
    <div className='flex flex-col h-2/3 sm:h-full md:w-2/3 gap-16 justify-start pt-20 md:justify-center items-center'>
        <h1 className='text-5xl font-bold sm:text-7xl  text-center'>Harsh Pratap Singh</h1>
        <div className='flex justify-center items-center gap-8 md:gap-6'>
            <Button text={"Resume"}/>
            <Button text={"Contact"}/>
        </div>
    </div>
  )
}

export default HomeNameSection