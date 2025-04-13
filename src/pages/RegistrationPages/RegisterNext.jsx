import React, { useState } from 'react';
import registerImg from "../../assets/register.png";
import Camlogo from "../../assets/cameroon.png";
import { Link } from 'react-router-dom';

const RegisterNext = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center justify-around px-6 py-10">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-4 w-full md:w-[50%] p-4">
          <h2 className="text-3xl text-blue-500 font-bold">Register</h2>
          <p className="text-blue-500">Create an account as an admin</p>

          <div className="py-5 flex flex-wrap gap-4 w-full">
            {/* Language */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Language</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <select className="w-full outline-none bg-transparent">
                  <option>Select Language</option>
                </select>
              </div>
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Gender</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <select className="w-full outline-none bg-transparent">
                  <option>Select Gender</option>
                </select>
              </div>
            </div>

            {/* Marital Status */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Marital Status</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md gap-2">
                <i className="bx bx-phone text-gray-500"></i>
                <img src={Camlogo} className="w-[1.2rem]" alt="" />
                <select className="w-full outline-none bg-transparent">
                  <option>Select Status</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Location</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md gap-2">
                <i className="bx bxs-map text-gray-500"></i>
                <img src={Camlogo} className="w-[1.2rem]" alt="" />
                <input
                  type="text"
                  className="w-full outline-none bg-transparent"
                  placeholder="Enter location"
                />
              </div>
            </div>

            {/* Work Experience */}
            <div className="flex flex-col gap-2 basis-full md:basis-[100%]">
              <label className="text-gray-700 font-medium">Work Experience</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <textarea
                  type="text"
                  placeholder="Enter Academic record"
                  className="w-full h-[8rem] outline-none bg-transparent"
                ></textarea>
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Password </label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md gap-2">
                <i
                  className={`bx ${showPassword ? "bxs-hide" : "bx-show"} text-gray-500 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full outline-none bg-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Confirm Password</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md gap-2">
                <i
                  className={`bx ${showConfirmPassword ? "bxs-hide" : "bx-show"} text-gray-500 cursor-pointer`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full outline-none bg-transparent"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            {/* Buttons & Links */}
            <Link
              to="/registernext"
              className="bg-blue-500 text-xl text-white py-2 text-center w-full rounded-md"
            >
              Create Account
            </Link>
            <p className="text-center text-[#bcbcbc] w-full">
              Already have an account? <Link to="/login" className="text-blue-500">Login Now</Link>
            </p>
          </div>
        </div>

        {/* Right Section - Hidden on small screens */}
        <div className="hidden md:block">
          <img
            src={registerImg}
            className="w-[30rem] object-cover"
            alt="Register Visual"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterNext;
