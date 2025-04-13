import React, { useState } from "react";
import adminImg from "../../assets/admin.png";
import { Link } from "react-router-dom";
import Camlogo from "../../assets/cameroon.png";

const CreateCaseManger = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-blue-600 text-2xl font-medium">Case Manager</h2>
          <p className="text-blue-500">View and add more case managers</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="max-w-[25rem] w-full px-2 rounded-md border border-gray-500 flex items-center">
            <i className="bx bx-search text-gray-500"></i>
            <input
              type="text"
              className="flex-1 py-2 px-3 bg-transparent border-0 outline-0"
              placeholder="search anything"
            />
          </div>
          <div className="flex items-center gap-1">
            <i className="bx bx-bell"></i>
            <span className=" rounded-md text-white p-1 text-center bg-blue-600">
              03
            </span>
          </div>
          <div className="flex items-center gap-5 w-full">
            <img src={adminImg} alt="" />
            <div className="flex flex-col ">
              <h2>Admin Profile</h2>
              <p className="text-blue-500">Admin</p>
            </div>
            <i className="bx bxs-down-arrow text-[13px]"></i>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-[99%] py-3 px-8 rounded-bl-lg bg-white mt-10 flex items-center justify-between rounded-md border border-blue-300">
        <Link
          to="/dashboard/casemanager"
          className="max-w-[27rem] text-center w-full"
        >
          View All Case Managers
        </Link>
        <Link
          to="/dashboard/casemanager/createcasemanager"
          className="max-w-[27rem] text-center w-full py-3 bg-blue-600 text-white rounded-lg"
        >
          Create a Case Manager
        </Link>
      </div>
      <div className="w-[99%] py-5 px-8 rounded-bl-lg bg-white mt-5 rounded-md border border-blue-300">
        <h2>Add New Case Manager</h2>
        <div className="flex flex-col items-start gap-4 w-full  p-4">
          <div className="py-5 flex flex-wrap gap-4 w-full">
            {/* Full Names */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Full Names</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <i className="bx bx-user text-gray-400"></i>
                <input
                  className="w-full outline-none bg-transparent px-3"
                  placeholder="Enter full name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Email</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <i className="bx bx-user text-gray-400"></i>
                <input
                  className="w-full outline-none bg-transparent px-3"
                  placeholder="Enter email"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Phone Number</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md gap-2">
                <i className="bx bx-phone text-gray-500"></i>
                <img src={Camlogo} className="w-[1.2rem]" alt="" />
                <input
                  type="text"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Phone Number</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md gap-2">
                <i className="bx bxl-whatsapp text-gray-500"></i>
                <img src={Camlogo} className="w-[1.2rem]" alt="" />
                <input
                  type="text"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Date of birth */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Date of birth</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <i className="bx bx-cake text-gray-500"></i>
                <input
                  type="date"
                  className="w-full outline-none bg-transparent px-3 text-gray-500"
                />
              </div>
            </div>

            {/* Language */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Language</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <select className="w-full outline-none bg-transparent px-3 text-gray-500">
                  <option>Select Language</option>
                  <option>English</option>
                  <option>French</option>
                </select>
              </div>
            </div>

            {/* gender */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Gender</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <select className="w-full outline-none bg-transparent px-3 text-gray-500">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            {/* Marital status */}

            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">
                Marital Status
              </label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <select className="w-full outline-none bg-transparent px-3 text-gray-500">
                  <option>Select Marital Status</option>
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
            </div>

            {/* Location */}

            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Location</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <i className="bx bx-map text-gray-500"></i>
                <input
                  type="text"
                  className="w-full outline-none bg-transparent px-3 text-gray-500"
                  placeholder="Enter your location"
                />
              </div>
            </div>

            {/* Role */}

            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Role</label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <select className="w-full outline-none bg-transparent px-3 text-gray-500">
                  <option>Select Your Role</option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">Password </label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md gap-2">
                <i
                  className={`bx ${
                    showPassword ? "bxs-hide" : "bx-show"
                  } text-gray-500 cursor-pointer`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full outline-none bg-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Working Experience */}

            <div className="flex flex-col gap-2 basis-full md:basis-[48%]">
              <label className="text-gray-700 font-medium">
                Working Experience
              </label>
              <div className="flex items-center border border-[#BCBCBC] px-3 py-2 rounded-md">
                <input
                  type="text"
                  className="w-full outline-none bg-transparent px-3"
                  placeholder="Enter working experience"
                />
              </div>
            </div>

            {/* Buttons & Links */}
            <button className="bg-blue-500 text-xl text-white py-2 text-center w-full rounded-md">
              Save Case Manager
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCaseManger;
