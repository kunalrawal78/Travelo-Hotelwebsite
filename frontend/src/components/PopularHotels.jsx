import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
  import { Pagination, Navigation } from 'swiper/modules';
  import { FaStar} from "react-icons/fa6"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './pp.css';

const  PopularHotels = () => {

    const [data,setdata]=useState([]);

     useEffect(() => {
    fetch('http://localhost:9000/allhotels').then(res=>res.json()).then(e=>setdata(e.slice(1,7)))
    console.log(setdata)
    }, [])
    

  return (

    <div className='px-4 md:px-24  '>
    <h1 className='text-5xl text-center font-semibold '>Popular Hotels</h1>
    <div className='grid md:grid-cols-3 py-4  '>
         
    {
        data.map((hotels)=>(
            <div key={hotels._id} className="card w-[80%] bg-base-100 shadow-xl h-[80%] shadow-[#484646] mt-10 rounded-md ">
  <figure className=''>
  
  
  
 

  <Swiper
      
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper rounded-lg"
    >
      <SwiperSlide >
      
      <img className='object-fit bg-cover'
        src={hotels.ImageUrl1}
      />
      </SwiperSlide>
      <SwiperSlide> <img
      className='object-fit bg-cover'
        src={hotels.ImageUrl2}
      /></SwiperSlide>
 
    </Swiper>


  
  </figure>
  <div className="card-body h-[25%]   ">
 

    <h2 className="card-title text-[15px] ">{hotels.HotelTitle}</h2>

    
    <div className='flex items-center '>

     <p>{hotels.country}</p>
     <FaStar className='text-amber-500'/> 
    <FaStar className='text-amber-500'/> 
    <FaStar className='text-amber-500'/>
    <FaStar className='text-amber-500'/> 
    <FaStar className='text-amber-500'/> 

</div>
  

 

</div>

  <div className="card-actions flex justify-between items-start px-7 py-3 ">

    <div className='flex space-x-5 '> 
      <p className='text-[15px]'>Rs{hotels.price}</p>
      <p className='text-[15px]'>{hotels.Rooms}</p>


      </div>
      <div className='mb-2'>
       <button className="bg-blue-600 text-white h-10 w-20 rounded-lg ">Book Now</button>
    
      </div>
     


    
  </div>
</div>

        ))
    }
    
    </div>
  
    </div>
  )
}

export default PopularHotels