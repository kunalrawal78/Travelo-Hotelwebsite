import React, { useEffect } from 'react'
import { useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Manage = () => {

    const [Hotels,setHotel]=useState([]);
    useEffect(() => {
      fetch('http://localhost:9000/allhotels').then(res=>res.json()).then(data=>setHotel(data));
   
    }, [])
   console.log(setHotel) 
const handleDeleteHotel=(id)=>{
console.log(id);
fetch(`http://localhost:9000/hotels/${id}`,{method:'DELETE'}).then(res=>res.json()).then(data=>{
    alert(" Hotel DELETE Succesfully")
})
}

return (
    <div className='px-10 my-12 ' >
        <h2 className='text-3xl mb-8 font-bold text-center wi-full bg-[#FFF6E9] '>Manage Hotels</h2>
      
    <Table className='lg:w-[1px] md:w-[10px] flex-row sm:w-[300px]  '>
    <Table.Head className='border-2 w-[10rem] bg-[#211C6A] text-white  '>
      <Table.HeadCell> Sr No.</Table.HeadCell>
      <Table.HeadCell className='px-8'>HotelName</Table.HeadCell>
      <Table.HeadCell className='px-10 w-full' >Address </Table.HeadCell>

      <Table.HeadCell className='px-10'>Country</Table.HeadCell>
      <Table.HeadCell className='px-10'>Rooms</Table.HeadCell>


      <Table.HeadCell className='px-10'>Price</Table.HeadCell>
      <Table.HeadCell>
        <span >Edit/Manage</span>
      </Table.HeadCell>
    </Table.Head>
{
Hotels.map((hotel,index)=>  <Table.Body className="divide-y border-2 " key={hotel._id}>

   <Table.Row className=" dark:border-gray-700 dark:bg-gray-800 bg-[#ffef97] ">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
          {index + 1}
        </Table.Cell>
        <Table.Cell className='w-60'> {hotel.HotelTitle}</Table.Cell>

        <Table.Cell className='border-2 w-[200px]'>{hotel.Hoteladdress}</Table.Cell>
        <Table.Cell>{hotel.country}</Table.Cell>
        <Table.Cell>{hotel.Rooms}</Table.Cell>

        <Table.Cell>Rs{hotel.price}</Table.Cell>
        <Table.Cell className='flex items-center'>

          <Link to={`/admin/dashboard/edit-hotels/${hotel._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
            Edit
          </Link>

          <button onClick={()=> handleDeleteHotel(hotel._id)} className='bg-red-700 font-semibold px-3 py-1 rounded-md text-white hover:bg-sky-700'>Delete</button>

        </Table.Cell>
      </Table.Row>


</Table.Body> )

}

    
  </Table>



    </div>
)
}

export default Manage