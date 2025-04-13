import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white min-h-screen w-64 shadow-md p-4 flex flex-col justify-between">
      {/* Logo/Header */}
      <div>
        <div className="text-blue-600 font-bold text-lg mb-6 leading-tight py-2 border-b border-b-gray-500">
          <img className="w-[15rem]" src={logo} alt="" />
        </div>

        {/* Menu Items */}
        <ul className="space-y-3 text-gray-700 text-sm max-h-[25rem] overflow-y-auto">
          <Link to="/dashboard/country" className="flex items-center justify-center gap-2 relative py-2 w-full bg-blue-100 after:content-[''] after:absolute after:top-0 after:left-0 after:w-2.5 after:h-full after:bg-blue-600">
            <i className="bx bx-grid-alt text-blue-600 text-[17px]"></i>
            <h3 className="text-blue-600 text-[17px]">Create a Country</h3>
          </Link>
          <Link to="/dashboard/region" className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-file text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Create region</h3>
          </Link>
          <Link to="/dashboard/category" className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-user text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Create Category</h3>
          </Link>
          <Link to="/dashboard/manager" className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-group text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Create Manager</h3>
          </Link>
          <Link to="/dashboard/casemanager" className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Create Case Manager</h3>
          </Link>
          <Link to="/dashboard/school" className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Create School</h3>
          </Link>
          <Link className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Create Class</h3>
          </Link>
          <Link className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Create Specialty</h3>
          </Link>
          <Link className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Create Time Table</h3>
          </Link>
          <Link className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Screen Student</h3>
          </Link>
          <Link className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Create Tasks</h3>
          </Link>
          <Link className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Assign Tasks</h3>
          </Link>
          <Link className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Create Consultants</h3>
          </Link>
          <Link className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Messages</h3>
          </Link>
          <Link className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">Refer</h3>
          </Link>
          <Link className="flex items-center justify-center gap-2 relative py-2 w-full ">
            <i className="bx bx-cog text-gray-500 text-[17px]"></i>
            <h3 className="text-gray-500 text-[17px]">FollowUp</h3>
          </Link>
        </ul>
        <div className="text-red-500 hover:text-red-700 cursor-pointer flex items-center justify-center relative top-12 gap-2">
        <i className='bx bx-log-out'></i>
        <span>Log Out</span>
      </div>
      </div>

      
    </div>
  );
};

export default Sidebar;
