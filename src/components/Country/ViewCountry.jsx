import React from 'react'
import adminImg from "../../assets/admin.png"
import { Link } from 'react-router-dom'

const ViewCountry = () => {
  return (
    <div className='relative'>
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
      <Link to="/dashboard/country" className='max-w-[27rem] text-center w-full py-3 bg-blue-600 text-white rounded-lg'>View All Countries</Link> 
      <Link to="/dashboard/country/createcountry" className='max-w-[27rem] text-center w-full'>Create a Country</Link> 
    </div>
    <div className='w-[99%] py-5 px-8 rounded-bl-lg bg-white mt-5 rounded-md border border-blue-300'>
       <h2>All Countries</h2>
       <div className='flex items-center justify-between py-3'>
        <div className='flex items-center gap-2'>
            <span className='text-gray-500'>Show</span>
            <input type="number" className='w-[35px] border border-gray-500 text-center rounded-md' />
            <span className='text-gray-500'>Entries</span>
        </div>
        <div className='max-w-[25rem] w-full px-2 rounded-md border border-gray-500 flex items-center'>
            <i className='bx bx-search text-gray-500'></i>
            <input type="text" className='flex-1 py-2 px-3 bg-transparent border-0 outline-0' placeholder='search country' />
        </div>
        <div className='flex items-center gap-5'>
            <div className='flex items-center justify-center py-1 px-4 border border-red-600 rounded-lg cursor-pointer'>
                <i className='bx bx-trash text-red-600'></i>
                <span className='text-red-600'>delete</span>
            </div>
            <div className='flex items-center justify-center py-1 px-4 border border-gray-500 rounded-lg cursor-pointer'>
                <i className='bx bx-trash text-gray-500'></i>
                <span className='text-gray-500'>filter</span>
            </div>
            <div className='flex items-center justify-center py-1 px-4 border border-gray-500 rounded-lg cursor-pointer'>
                <i className='bx bx-export text-gray-500'></i>
                <span className='text-gray-500'>Export</span>
            </div>
        </div>
       </div>
       <table className="mt-4 w-full table-auto border-collapse">
  <thead className="bg-blue-100">
    <tr>
      <th className="py-3 px-4 text-center text-blue-500 font-normal">COUNTRY NAME</th>
      <th className="py-3 px-4 text-center text-blue-500 font-normal">COUNTRY CODE</th>
      <th className="py-3 px-4 text-center text-blue-500 font-normal">CREATED AT</th>
      <th className="py-3 px-4 text-center text-blue-500 font-normal">ACTION</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-gray-400">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <input type="checkbox" />
          <span>Nigeria</span>
        </div>
      </td>
      <td className="py-3 px-4 text-center">P.O Box Molikko Buea</td>
      <td className="py-3 px-4 text-center">21/05/2023</td>
      <td className="py-3 px-4">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center py-1 px-3 border border-blue-600 rounded-lg cursor-pointer hover:bg-blue-50">
            <i className="bx bx-edit text-blue-600"></i>
          </div>
          <div className="flex items-center justify-center py-1 px-3 border border-blue-600 rounded-lg cursor-pointer hover:bg-blue-50">
            <i className="bx bx-show text-blue-600"></i>
          </div>
          <div className="flex items-center justify-center py-1 px-3 border border-red-600 rounded-lg cursor-pointer hover:bg-red-50">
            <i className="bx bx-trash text-red-600"></i>
          </div>
        </div>
      </td>
    </tr>
    <tr className="border-b border-gray-400">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <input type="checkbox" />
          <span>Nigeria</span>
        </div>
      </td>
      <td className="py-3 px-4 text-center">P.O Box Molikko Buea</td>
      <td className="py-3 px-4 text-center">21/05/2023</td>
      <td className="py-3 px-4">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center py-1 px-3 border border-blue-600 rounded-lg cursor-pointer hover:bg-blue-50">
            <i className="bx bx-edit text-blue-600"></i>
          </div>
          <div className="flex items-center justify-center py-1 px-3 border border-blue-600 rounded-lg cursor-pointer hover:bg-blue-50">
            <i className="bx bx-show text-blue-600"></i>
          </div>
          <div className="flex items-center justify-center py-1 px-3 border border-red-600 rounded-lg cursor-pointer hover:bg-red-50">
            <i className="bx bx-trash text-red-600"></i>
          </div>
        </div>
      </td>
    </tr>
    <tr className="border-b border-gray-400">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <input type="checkbox" />
          <span>Nigeria</span>
        </div>
      </td>
      <td className="py-3 px-4 text-center">P.O Box Molikko Buea</td>
      <td className="py-3 px-4 text-center">21/05/2023</td>
      <td className="py-3 px-4">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center py-1 px-3 border border-blue-600 rounded-lg cursor-pointer hover:bg-blue-50">
            <i className="bx bx-edit text-blue-600"></i>
          </div>
          <div className="flex items-center justify-center py-1 px-3 border border-blue-600 rounded-lg cursor-pointer hover:bg-blue-50">
            <i className="bx bx-show text-blue-600"></i>
          </div>
          <div className="flex items-center justify-center py-1 px-3 border border-red-600 rounded-lg cursor-pointer hover:bg-red-50">
            <i className="bx bx-trash text-red-600"></i>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
     
     <div className='flex items-center justify-end gap-1.5 mt-3'>
       <button className='fkex items-center gap-1 py-1 px-3 border border-gray-400 rounded-lg cursor-pointer'>
        <i className='bx bx-left-arrow-alt text-gray-500'></i>
        <span className='text-gray-500'>previous</span>
       </button>
       <div className='flex items-center '>
        <span className='py-[2px] px-2 bg-blue-600 text-white rounded-md cursor-pointer'>1</span>
        <span className='py-[2px] px-2  text-gray-400 cursor-pointer'>2</span>
        <span className='py-[2px] px-2 text-gray-400 cursor-pointer'>3</span>
        <span className='py-[2px] px-2 text-gray-400 cursor-pointer'>4</span>
        <span className='py-[2px] px-2 text-gray-400 cursor-pointer'>...</span>
        <span className='py-[2px] px-2 text-gray-400 cursor-pointer'>9</span>
       </div>
       <button className='fkex items-center gap-1 py-1 px-3 border border-gray-400 rounded-lg cursor-pointer'>
        <span className='text-gray-500'>next</span>
        <i className='bx bx-right-arrow-alt text-gray-500'></i>
       </button>
     </div>
    </div>
    </div>
  )
}

export default ViewCountry