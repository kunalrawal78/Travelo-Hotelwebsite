import React from 'react'

import { useLoaderData, useParams } from 'react-router-dom'
// import  { useState } from 'react'
import { Button, Label,  TextInput,Textarea } from 'flowbite-react';

const Edit = () => {

    const { id } = useParams();
    const { HotelTitle, Hoteladdress, ImageUrl1, ImageUrl2, HotelDescription, country, price, Rooms } = useLoaderData()

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const HotelTitle = form.HotelTitle.value;

        const Hoteladdress = form.Hoteladdress.value;
        const ImageUrl1 = form.ImageUrl1.value;
        const ImageUrl2 = form.ImageUrl2.value;

        const country = form.country.value;
        const HotelDescription = form.HotelDescription.value;
        const price = form.price.value;
        const Rooms = form.Rooms.value;


        const UpdateHotelObj = {
            HotelTitle,
            Hoteladdress,
            ImageUrl1,
            ImageUrl2,
            country,
            HotelDescription,
            price,
            Rooms
        }
        console.log(UpdateHotelObj);

        fetch(`http://localhost:9000/hotels/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(UpdateHotelObj)
        }).then(res => res.json()).then(data => {
            alert("Hotel Data Updated !!!");
        }).catch(error => {
            console.error("Error updating hotel data:", error);
        });

    }

    return (
        <div className='px-4 my-12 '>

            <h2 className='text-3xl mb-8 font-bold '>Update Hotel Data</h2>
            <form onSubmit={handleUpdate} className="flex lg:w-[900px]  flex-col  flex-wrap gap-4">
                {/* first row */}

                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="HotelTitle" value="HotelTitle" />
                        </div>
                        <TextInput id="HotelTitle" type="text" placeholder="Hotel Name" required defaultValue={HotelTitle} />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="Hoteladdress" value="Hoteladdress" />
                        </div>
                        <TextInput id="Hoteladdress" type="text" placeholder="Address " required defaultValue={Hoteladdress} />
                    </div>


                </div>
                {/* second row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="ImageUrl1" value="ImageUrl1" />
                        </div>
                        <TextInput id="ImageUrl1" type="text" placeholder="Image1 link" required defaultValue={ImageUrl1} />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="ImageUrl2" value="ImageUrl2" />
                        </div>
                        <TextInput id="ImageUrl2" type="text" placeholder="Image2 link" required defaultValue={ImageUrl2} />
                    </div>

                </div>


                {/* Book BookDescription */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="HotelDescription" value="HotelDescription" />
                    </div>
                    <Textarea id="HotelDescription" name='HotelDescription' placeholder="Write about hotel..." required rows={6} className='w-full' defaultValue={HotelDescription} />
                </div>
               
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Rooms" value="Rooms" />
                    </div>
                    <TextInput id="Rooms" name='Rooms' type="text" placeholder='rooms number' required shadow defaultValue={Rooms} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="country" value="country" />
                    </div>
                    <TextInput id="country" name='country' type="text" placeholder='country ' required shadow defaultValue={country} />
                </div>

                <div />
                {/* Book PDF link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="price" value="price" />
                    </div>
                    <Textarea id="price" name='price' placeholder="Write about hotel..." required rows={2} className='w-full' defaultValue={price} />
                </div>

                <Button type="submit" className='mt-5 bg-black w-25 h-10 p self-center' >Update Hotel</Button>


            </form>
        </div>
    )
}

export default Edit