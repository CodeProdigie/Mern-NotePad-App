import React from 'react'
import homeImg from "../../assets/Section.png"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div className='flex min-h-[100vh]'>
       <div className="flex items-center gap-3">
           <div>
            <img src={homeImg} className='size-[40rem]' alt='Home Image'  />
           </div>
           <div className="flex flex-col items-center gap-3.5">
              <h2 className='text-3xl text-blue-500 font-bold'>Welcome to</h2>
              <img className='w-[35rem]' src={logo} alt="" />
              <Link to="/welcomelogin">
              <button className='text-white max-w-[19rem] w-full px-[18rem] py-4 bg-blue-500 cursor-pointer rounded-xl'>Next</button>
              </Link>
           </div> 
       </div>
    </div>
  )
}

export default WelcomePage