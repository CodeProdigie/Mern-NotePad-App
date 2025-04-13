import React from 'react';
import registerImg from "../../assets/register.png";
import Camlogo from "../../assets/cameroon.png"
import { Link } from 'react-router-dom';

const RegisterStart = () => {
  return (
    <div className="min-h-screen px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-around gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-4 w-full lg:w-1/2">
          <h2 className="text-3xl text-blue-500">Register</h2>
          <p className="text-blue-500">Create an account as an admin</p>

          <div className="py-5 flex flex-col gap-4 w-full">
            {/* Full Names */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-700 font-medium">Full Names</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md w-full">
                <i className="bx bx-user text-gray-500 mr-2"></i>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

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

            {/* Phone Number */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-700 font-medium">Phone Number</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md w-full">
                <div className="flex items-center mr-2">
                  <i className="bx bx-phone text-gray-500 mr-1"></i>
                  <img src={Camlogo} className="w-5" alt="Cameroon" />
                </div>
                <input
                  type="text"
                  className="w-full outline-none bg-transparent px-2"
                />
              </div>
            </div>

            {/* Whatsapp Number */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-700 font-medium">Whatsapp Number</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md w-full">
                <div className="flex items-center mr-2">
                  <i className="bx bxl-whatsapp text-gray-500 mr-1"></i>
                  <img src={Camlogo} className="w-5" alt="Cameroon" />
                </div>
                <input
                  type="text"
                  className="w-full px-2 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Academic Record */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-700 font-medium">Academic Record</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md w-full">
                <i className="bx bxs-graduation text-gray-500 mr-2"></i>
                <input
                  type="text"
                  placeholder="Enter Academic record"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <Link
              to="/registernext"
              className="bg-blue-500 text-xl text-white py-2 text-center w-full rounded-md"
            >
              Next
            </Link>
            <p className="text-center text-[#bcbcbc]">
              Already have an account? <Link className="text-blue-500">Login Now</Link>
            </p>
          </div>
        </div>

        {/* Right Section (Image) - Hidden on Small Screens */}
        <div className="hidden lg:block">
          <img
            src={registerImg}
            className="w-[30rem] object-cover"
            alt="Register"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterStart;
