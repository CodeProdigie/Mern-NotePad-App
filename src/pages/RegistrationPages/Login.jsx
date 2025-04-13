import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import homeImg from "../../assets/Section.png"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className='flex min-h-[100vh] items-center justify-center px-4'>
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl">
        
        {/* Image Section */}
        <div className="hidden md:block">
          <img src={homeImg} className='size-[40rem]' alt='Home Image' />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center gap-3.5 w-full lg:w-[30rem]">
          <h2 className='text-3xl text-blue-500 font-bold'>Login In</h2>

          <div className="flex flex-col items-start gap-4 w-full">
            <h2 className="text-3xl text-blue-500">Register</h2>
            <p className="text-blue-500">Create an account as an admin</p>

            <div className="py-5 flex flex-col gap-4 w-full">
              {/* Email */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-gray-700 font-medium">Email</label>
                <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md w-full">
                  <i className="bx bx-envelope text-gray-500 mr-2"></i>
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="w-full outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2 w-full">
                <label className="text-gray-700 font-medium">Password</label>
                <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md w-full">
                  <i
                    className={`bx ${showPassword ? 'bxs-hide' : 'bx-show'} text-gray-500 mr-1 cursor-pointer`}
                    onClick={togglePassword}
                  ></i>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full outline-none bg-transparent px-2"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              {/* Navigation Button */}
              <Link
                to="/dashboard/country"
                className="bg-blue-500 text-xl text-white py-2 text-center w-full rounded-md"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login
