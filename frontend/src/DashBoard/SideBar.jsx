import React, { useContext } from 'react'
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
// import userImg from '../assets/profile.jpg'
// import { AuthContext } from '../contects/AuthProvider';
const SideBar = () => {

//   const {user}=useContext(AuthContext)
//   console.log(user)
  return (
    <div className='bg-[#11235A] text-white rounded-lg '>


     <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="/" 
    //   img={user?.photoURL}
        imgAlt="Userimg" className='w-16 h-16 text-[8px]'>
    
    {/* {
user?.displayName || "Demo user"
    } */}
      </Sidebar.Logo>


      <Sidebar.Items >
        <Sidebar.ItemGroup  >
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className='text-white text-2xl '>
            <p>Dashboard</p> 
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className='text-white py-3 '>
           <p>Upload Hotels</p>
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className='text-white py-3'>
        <p>Manage Hotels</p>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiUser} className='text-white py-3'>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight} className='text-white py-3'>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable} className='text-white py-3'>
           Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie} className='text-white py-3'>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}className='text-white py-3'>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy } className='text-white py-3'>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar




