import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineModeOfTravel } from "react-icons/md";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';

import { Link } from 'react-router-dom';

const Navbar = () => {
const [isMenuOpen,setMenuOpen]=useState(false);
const [isSticky,setSticky]=useState(false);

// const {user}=useContext(AuthContext);

// console.log(user);

const toggleMenu=()=>{
    setMenuOpen(!isMenuOpen);
}
useEffect(()=>{
const handleScroll=()=>{
    if(window.scrollY > 100){
        setSticky(true);
    }
    else{
        setSticky(false);

    }
}
window.addEventListener('scroll',handleScroll)
return()=>{
    window.addEventListener('scroll',handleScroll);
}
},[])

const navItems=[
    {link:"Home",path:"/"},
    {link:"Tour",path:"/tour"},
    {link:"SpeacialDeals",path:"/speacialdeals"},
    {link:"MyBookings", path:'/mybookings'}, 
    {link:"Admin", path:'/admin/dashboard'},
    {link:"About",path:"/about"},

    
]
  return (

<header className='w-full bg-transparent fixed  top-0 right-0 left-0 transition-all ease-in duration-300 z-[10]'>
    <nav className={`py-4 lg:px-24  px-4 ${isSticky ? "sticky  top-0 left-0 right-0 bg-[#F5F5F5] text-black": ''}`}>
    <div className='flex justify-between items-center gap-8 text-base  '>
          {/* Logo */}
        <Link to='/' style={{fontSize:'25px'}} className='text-2xl  flex items-center gap-2 font-bold'> <MdOutlineModeOfTravel className='inline-block' />Travelo</Link>

        <ul className='md:flex space-x-12 hidden ' >
        {
            navItems.map(({link,path})=> <Link className={`block hover:text-blue-700 cursor-pointer ${isSticky ? "sticky text-black":""} text-base hover:text-blue-400 `} key={path} to={path}>{link}</Link> )
        }
       </ul>

  
                {/* nav for other links */}

   
   
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                  

                      {/* {
                    user?user.email:""
                   } */}
         
                  
                  
                </div>

                {/* menu for mobile */}
                <div className='md:hidden  '>
                <button onClick={toggleMenu} className='text-black focus:outline-none'>
                {isMenuOpen ? <FaXmark className='h-5 w-5 text-black '/> :<FaBarsStaggered className='h-5 w-5 text-black'/>}

                </button>

                </div>
             </div>
                {/* menu for sm devices */}
                
             
         <div className={`space-y-4 mt-14  py-7 bg-[#1a237e] ${isMenuOpen ? " block fixed top-5  right-0 left-0":"hidden"}`}>
                    {
                        navItems.map(({link,path})=><Link key={path} to={path} className='block uppercase cursor-pointer text-base text-white '>{link}</Link>)
                    }
                </div>


    </nav>
</header>

  )
}

export default Navbar