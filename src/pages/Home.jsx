import React from 'react'
import Footer from '../components/Footer'
import Testimonial from './../components/Testimonial'
import Banner from './../components/Banner'
import Hero from '../components/Hero'
import Support from '../components/Support'

export const Home = () => {
  return (
    <div className=''>
        <Hero />
        <Support />
        <Banner/>
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home