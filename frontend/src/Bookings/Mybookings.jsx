// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import BookItem from './BookItem';

// const Mybookings = () => {
//     const bookedHotels = useSelector((state) => state.book.bookedHotels) || [];
//    console.log(bookedHotels)

 

    
// console.log(bookedHotels)
//     return (
//       <main className="py-24 max-w-7xl container mx-auto px-4 ">
//       <div className="container mx-auto">
//         <h2 className="mb-5 text-xl text-center font-bold"> Hotel Booked</h2>
//         <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
//           <div className="space-y-6 md:w-2/3 ">
//             {bookedHotels.length > 0 ? (
//   bookedHotels.map((hotelId) => (
//       <BookItem  key={hotelId} hotelId={hotelId}  />


      
//   ))
// ) : (
//   <p>No bookings yet.</p>
// )}
//           </div>
//           {/* <div className="md:w-1/3"><Billing /></div> */}
//         </div>
//       </div>
//     </main>
//     );
// };

// export default Mybookings;


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const Mybookings = () => {
    const bookedHotels = useSelector((state) => state.book.bookedHotels) || [];
    const [filteredHotels, setFilteredHotels] = useState(bookedHotels);

    const handleRemoveHotel = (hotelId) => {
        // Filter out the removed hotel from the bookedHotels array
        const updatedHotels = filteredHotels.filter(id => id !== hotelId);
        setFilteredHotels(updatedHotels);
    };

    return (
        <main className="py-24 max-w-7xl container mx-auto px-4 ">
            <div className="container mx-auto">
                <h2 className="mb-5 text-xl text-center font-bold"> Hotel Booked</h2>
                <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <div className="space-y-6 md:w-2/3 ">
                        {filteredHotels.length > 0 ? (
                            filteredHotels.map((hotelId) => (
                                <BookItem key={hotelId} hotelId={hotelId} onRemove={handleRemoveHotel} />
                            ))
                        ) : (
                            <p>No bookings yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Mybookings;
