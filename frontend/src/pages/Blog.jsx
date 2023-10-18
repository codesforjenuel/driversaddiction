import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Dotw from '../components/Dotw'
import Story from '../components/Story'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <div className='m-0 h-full w-full flex flex-col items-center bg-white'>
      <Nav/>
      <Banner/>
      <Dotw/>
      <Story/>
      <Footer/>
    </div>
  )
}

export default Blog