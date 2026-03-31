import React from 'react'
import Footer from './Footer'
import Testimonial from './Testimonial'
import Banner from './Banner'

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