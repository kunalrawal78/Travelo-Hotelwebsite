import React from 'react'

// import Cards from './Cards';


export const TourMain = () => {
  return (
    <div className='px-4 md:py-24 '>


      <div className='flex  w-full h-full justify-between m-auto '>

        <div className='flex flex-col gap-y-1 px-4 rounded-md w-1/2 py-12 shadow-md'>
          <h1 className='items-start text-6xl text-blue-800   word-spacing-3  text-center m-auto font-serif '>
            "Book Early</h1>

          <h1 className='items-start text-6xl text-blue-800  word-spacing-3  text-center m-auto font-serif '>
            AND
          </h1>
          <h1 className='items-start  text-6xl text-blue-800  word-spacing-3  text-center m-auto font-serif '>

            Save More !!!"
          </h1>

          <button className='bg-blue-700 w-[30%] m-auto h-10 text-white rounded-lg shadow'>
            Lets Go
          </button>

        </div>


        <img
          className='w-[65%] h-[50%] mr-0 rounded-md relative shadow-lg'
          src='https://feeds.abplive.com/onecms/images/uploaded-images/2024/01/04/799bad5a3b514f096e69bbc4a7896cd906923.jpg' />


      </div>
      <div className='absolute flex  top-[92%]  left-[79%] text-3xl text-[#1F2544] italic'>
        <h1>Bharat's lakshawdeep</h1>
        <h1></h1>

      </div>

    </div>
    
   




  )
};
