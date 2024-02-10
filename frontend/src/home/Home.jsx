import React from 'react'
import Searchbox from './Searchbox'
import Banner from '../components/Banner'
import PopularHotels from '../components/PopularHotels'
import Comments from '../components/Comments'
import Explore from '../components/explore'
import { Footer } from 'flowbite-react'

const Home = () => {
  return (
    <div className=''>
    
<Banner/>
<Searchbox/>
<PopularHotels/>
<Explore/>
<Comments/>
<Footer/>

    </div>

  )
}

export default Home