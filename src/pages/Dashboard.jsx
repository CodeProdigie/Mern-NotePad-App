import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='bg-[#f6f9fe] flex gap-10 min-h-[100vh] p-2'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Dashboard
