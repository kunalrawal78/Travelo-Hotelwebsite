import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addToBook } from '../redux/Bookings/actions';

import { Link } from 'react-router-dom';

const SearchToBookpath = () => {
   
  const dispatch=useDispatch();

  const handleAddToBook = (hotel) => {
    dispatch(addToBook(hotel));
    console.log(hotel);

 

  }


  const {country}=useParams();
  const [data,setData]=useState([]);


  useEffect(() => {
   const fetchData=async()=>{
   try {
    const response= await fetch(`http://localhost:9000/all-hotels/${country}`)
    
    const result=await response.json();
    setData(result);
    console.log(result)
    
   } catch (error) {
    console.error('Error fetching data:', error);
   }
   }
  fetchData();
  
  }, [country])
  
  const countryData = data.filter((hotel) => hotel.country === country);


  return (
 

    <div className='mx-auto items-center   '>
    {countryData.length > 0 ? (
      <div className='grid md:grid-cols-1 py-4 md:py-24 w-full '>
        <h2 className='text-5xl font-bold text-black items-center text-center mb-8'>Hotels in {country}</h2>
        {countryData.map((hotel) => (
          <div key={hotel._id} className="grid md:grid-cols-2 h-[400px]  card w-[75%] bg-base-100 shadow-xl align-content-center mb-4 mx-auto ">
            <figure className="relative ">
              <img src={hotel.ImageUrl1} alt={hotel.HotelTitle} className="h-[80%] w-full  rounded-md sm:h-[70%] sm:top-40 " />
              <div className="  badge badge-secondary absolute top-1 left-1 h-[8%] ">{hotel.HotelTitle}</div>
            </figure>
            <div className="card-body">
              <h2 className="card-title"></h2>
              <p className='w-[80%] sm:w-full text-[12px] '>{hotel.HotelDescription}</p>
              <div className="flex justify-between">
                <p className="w-full">Available: {hotel.Rooms}</p>
                <p className="text-left">Rs{hotel.price}</p>
              </div>


              {/* //// */}
              {/* <div className="card-actions mt-2 left-0 ">
                <button
               onClick={() => handleAddToBook(hotel)}
                 className="btn btn-sm btn-primary
                 
                 text-white ">Buy Now</button>
              </div> */}
              <Link to='/mybookings' className="card-actions mt-2 left-0 ">
                <button
             onClick={()=>handleAddToBook(hotel._id)}
                 className="btn btn-sm btn-primary
                 
                 text-white ">Book Now</button>
              </Link>


             {/* //// */}


            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center">No hotels available for {country}</p>
    )}
  
  </div>
  
  


);
};


export default SearchToBookpath