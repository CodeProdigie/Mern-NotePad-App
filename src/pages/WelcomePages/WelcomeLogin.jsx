import React from 'react'
import homeImg from "../../assets/Section.png"
import { Link } from 'react-router-dom'

const WelcomeLogin = () => {
  return (
    <div className='flex min-h-[100vh] items-center justify-center px-4'>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="hidden md:block">
          <img src={homeImg} className='size-[40rem]' alt='Home Image' />
        </div>
        <div className="flex flex-col items-center gap-3.5">
          <h2 className='text-3xl text-blue-500 font-bold'>Login as</h2>
          <div className='flex flex-col gap-6'>
            <Link to="/registerstart" className='text-white text-xl bg-blue-500 cursor-pointer py-5 px-[6rem] sm:px-[10rem] md:px-[18rem]'>An Admin</Link>
            <Link className='text-[#404040] text-xl border-[1px] border-blue-500 cursor-pointer py-5 px-[6rem] sm:px-[10rem] md:px-[18rem]'>A Manger</Link>
            <Link className='text-[#404040] text-xl border-[1px] border-blue-500 cursor-pointer py-5 px-[6rem] sm:px-[10rem] md:px-[18rem]'>Case Manager</Link>
            <Link className='text-[#404040] text-xl border-[1px] border-blue-500 cursor-pointer py-5 px-[6rem] sm:px-[10rem] md:px-[18rem]'>Student</Link>
            <Link className='text-[#404040] text-xl border-[1px] border-blue-500 cursor-pointer py-5 px-[6rem] sm:px-[10rem] md:px-[18rem]'>Consultant</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeLogin
