


import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css';

const BookItem = ({ hotelId, onRemove }) => {
    const [hotelData, setHotelData] = useState(null);

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const response = await fetch(`http://localhost:9000/hotel/${hotelId}`);
                const data = await response.json();
                setHotelData(data);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
            }
        };

        if (hotelId) {
            fetchHotelData();
        }
    }, [hotelId]);

    const handleRemoveFromCart = () => {
        onRemove(hotelId); // Call the onRemove function with the hotelId
    };

    if (!hotelData) {
        return <p>Loading...</p>;
    }

    return (
          <div className="rounded-lg mb-6  p-6 shadow-md sm:flex sm:justify-between h-[300px]   ">
      
            {hotelData && (
              <>
      
      
      
                <div className="flex  justify-between  px-5 ">
      
                  <div className='top-0  h-auto '>
      
                    <h2 className="text-lg  font-bold text-gray-900  border-3 " >{hotelData.HotelTitle}</h2>
                    <h2 className="text-md  text-gray-900 font-light">Rooms: {hotelData.Rooms}</h2>
                    <p className="mt-1 text-md font-bold text-gray-700">Price: Rs {hotelData.price}</p>
      
      
                    <div className='flex flex-col justify-end mt-10 bottom-0 '>
                      <p className="  text-sm text-gray-700 justify-self-end">Address: {hotelData.Hoteladdress}</p>
      
                      <p className="  text-sm text-gray-700 font-semibold justify-self-end">Country: {hotelData.country}</p>
      
                    </div>
       <button className="lws-removeFromCart w-20 h-10 bg-green-400 rounded-lg justify-center"  >
                    PayNow
                  </button>
                  </div>
                 
      
                 
      
      
                </div>
      
      
                <div className="mt-5 sm:mt-0 space-x-1 flex w-[50%]  ">
      
      
                  <Swiper
      
                    pagination={{
                      type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper rounded-lg"
                  >
                    <SwiperSlide>
      
                      <img
                        src={hotelData.ImageUrl1}
                      />
                    </SwiperSlide>
                    <SwiperSlide> <img
                      src={hotelData.ImageUrl2}
                    /></SwiperSlide>
      
                  </Swiper>
      
      
      
                  <button className="lws-removeFromCart w-10 h-10 bg-red-600 rounded-lg justify-center" onClick={() => handleRemoveFromCart()} >
                    <IoMdClose className='items-center m-auto' />
                  </button>
      
      
      
      
                </div>
      
              </>
            )}
      
          </div>
      
        );
      
};

export default BookItem;
