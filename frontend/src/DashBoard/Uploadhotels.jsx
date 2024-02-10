import React from 'react'
import { Button,  Label, TextInput,Textarea } from 'flowbite-react';

const Uploadhotels = () => {


    const handleHotelsubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const HotelTitle = form.querySelector('#HotelTitle').value;
        const Rooms = form.querySelector('#Rooms').value;
        const ImageUrl1 = form.querySelector('#ImageUrl1').value;
        const ImageUrl2 = form.querySelector('#ImageUrl2').value;
        const country = form.querySelector('#country').value;
        const HotelDescription = form.querySelector('#HotelDescription').value;
        const price = form.querySelector('#price').value;
        
        const hotelObj = {
            HotelTitle,
            Rooms,
            ImageUrl1,
            ImageUrl2,
            country,
            HotelDescription,
            price
        };
    
        console.log("hello");
        
        fetch('http://localhost:9000/uploadhotels', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(hotelObj)
        })
        .then(res => res.json())
        .then(data => {
            alert("Hotel Successfully Uploaded !!!");
            form.reset();
        });
    };
    
    return (
        <div className='px-8   bg-[#F0EDCF] rounded-lg'>

            <h2 className='text-3xl mb-8 font-bold my-10 text-center'>Upload A Hotel</h2>
            <form onSubmit={handleHotelsubmit} className="flex lg:w-[900px]  flex-col  flex-wrap gap-4">
            {/* first row */}

            <div className='flex gap-8'>
                 <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="HotelTitle" value="HotelTitle" />
                    </div>
                    <TextInput id="HotelTitle" type="text" placeholder="Hotel Name" required />
                </div>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label htmlFor="country" value="country" />
                    </div>
                    <TextInput id="country" type="text" placeholder="Country Name" required />
                </div>

            
            </div>
            {/* second row */}
            <div className='flex gap-8'>
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="ImageUrl1" value="ImageUrl1" />
        </div>
        <TextInput id="ImageUrl1" type="text" placeholder="Image 1 link" required />
    </div>
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="ImageUrl2" value="ImageUrl2" /> 
        </div>
        <TextInput id="ImageUrl2" type="text" placeholder="Image 2 link" required />
    </div>
</div>
           {/* Book BookDescription */}
           <div>
           <div className="mb-2 block">
          <Label htmlFor="HotelDescription" value="HotelDescription" />
        </div>
        <Textarea id="HotelDescription" name='HotelDescription' placeholder="Write about hotel..." required rows={6} className='w-full' />
          </div>

          <div>
           <div className="mb-2 block">
          <Label htmlFor="Rooms" value="Rooms" />
        </div>
        <Textarea id="Rooms" name='Rooms' placeholder=" Number of Rooms hotel with bedrooms" required className='w-full' />
          </div>
              <div/>

              <div>
           <div className="mb-2 block">
          <Label htmlFor="Hoteladdress" value="Hoteladdress" />
        </div>
        <Textarea id="Hoteladdress" name='Hoteladdress' placeholder=" hotel address..." required className='w-full' />
          </div>

          
          
         
              <div/>


               {/* Book PDF link */}
               <div>


               
               <div className="mb-2 block">
              <Label htmlFor="price" value="price" />
            </div>
             <TextInput id="price" name='price' type="text" placeholder='Amount ' required shadow />
              </div >

     
        <Button type="submit" className='mt-5 bg-black w-20 self-center' >Upload </Button>


            </form>
        </div>
    )
}

export default Uploadhotels;