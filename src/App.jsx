import React from 'react'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='relative main-bg h-screen flex flex-col-reverse sm:flex-row font-oswald'>
      <Navbar/>
      <Homepage/>
    </div>
  )
}

export default App