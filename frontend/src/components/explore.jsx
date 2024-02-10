import React from 'react'

const Explore = () => {
  return (
    <div className='px-4 lg:px-24 mt-20'>
    <div className='relative'>
      <img className='h-[600px] w-full rounded-[20px] ' 

      src='/manarola-cinque-terre-italy-seascape-city-lights-dusk-3840x2400-3942.jpg'

      
       />
      <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end px-6 py-4 items-center'>
        <h1 className='text-white text-center text-3xl font-bold'>Travelling Leaves you speechless and turns you into a Storyteller...</h1>
        <button className='bg-white text-black items-center py-2 px-4 mt-4 rounded-[30px] w-20'>Explore</button>
      </div>
    </div>
  </div>
  
  )
}

export default Explore