import React from 'react'
import Footer from '../components/Footer'
import Testimonial from './../components/Testimonial'
import Banner from './../components/Banner'

export const Home = () => {
  return (
    <div className=''>
        <Banner/>
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home