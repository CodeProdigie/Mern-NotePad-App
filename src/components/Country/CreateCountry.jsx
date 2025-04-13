import React from 'react'
import adminImg from "../../assets/admin.png"
import { Link } from 'react-router-dom'

const CreateCountry = () => {
  return (
    <div className='relative w-full'>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-1'>
             <h2 className='text-blue-600 text-2xl font-medium'>Countries</h2>
             <p className='text-blue-500'>View and add more countries</p>
            </div>
            <div className='flex items-center gap-5'>
            <div className='max-w-[25rem] w-full px-2 rounded-md border border-gray-500 flex items-center'>
                <i className='bx bx-search text-gray-500'></i>
                <input type="text" className='flex-1 py-2 px-3 bg-transparent border-0 outline-0' placeholder='search anything' />
            </div>
            <div className='flex items-center gap-1'>
             <i className='bx bx-bell'></i>
             <span className=' rounded-md text-white p-1 text-center bg-blue-600'>03</span>
            </div>
            <div className='flex items-center gap-5 w-full'>
                <img src={adminImg} alt="" />
                <div className='flex flex-col '>
                  <h2>Admin Profile</h2>
                  <p className='text-blue-500'>Admin</p>
                </div>
                <i className='bx bxs-down-arrow text-[13px]'></i>
            </div>
            <div>
    
            </div>
            </div>
        </div>
        <div className='w-[99%] py-3 px-8 rounded-bl-lg bg-white mt-10 flex items-center justify-between rounded-md border border-blue-300'>
          <Link to="/dashboard/country" className='max-w-[27rem] text-center w-full'>View All Countries</Link> 
          <Link to="/dashboard/country/createcountry" className='max-w-[27rem] text-center w-full py-3 bg-blue-600 text-white rounded-lg'>Create a Country</Link> 
        </div>
        <div className='w-[99%] py-5 px-8 rounded-bl-lg bg-white mt-5 rounded-md border border-blue-300'>
           <h2>Add New Country</h2>
          <div className='flex flex-col gap=2 pt-10'>
             <div className="flex flex-col gap-1">
              <label>Country Name</label>
              <select className='border border-gray-400 rounded-xl flex-1 py-2 px-4 outline-0 cursor-pointer'>
                <option value="">---Select a Country----</option>
                <option value="">Kenya</option>
                <option value="">Togo</option>
                <option value="">South africa</option>
                <option value="">Cameroon</option>
              </select>
             </div>
          </div>
         
        </div>
        </div>
  )
}

export default CreateCountry