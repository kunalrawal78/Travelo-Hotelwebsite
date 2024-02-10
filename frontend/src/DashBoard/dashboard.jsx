import React from 'react'

const Dashboard = () => {
  return (
    <div className='px-10 my5 mx-10 ' >
    <h1 className='text-3xl mb-8 font-bold text-center w-full h bg-[#ffeb39] '> Hotels Offers</h1>
 
   
   <div className="bg-gray-100 p-4 h-full flex items-center justify-center">
            <img src="/manarola-cinque-terre-italy-seascape-city-lights-dusk-3840x2400-3942.jpg" alt="Advertisement" className="w-full h-full md:w-[70%] mr-4" />
            <div className="text-center">
                <h2 className="text-lg font-semibold">Special Offer!</h2>
                <p className="text-gray-700">Get 20% off on all bookings this month. Book now!</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">Book Now</button>
            </div>
        </div>

    </div>
  )
}

export default Dashboard