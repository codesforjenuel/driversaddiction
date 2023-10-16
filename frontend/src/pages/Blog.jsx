import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Dotw from '../components/Dotw'
import Story from '../components/Story'

const Blog = () => {
  return (
    <div className='m-0 h-full w-full flex flex-col items-center'>
      <Nav/>
      <Banner/>
      <Dotw/>
      <Story/>
    </div>
  )
}

export default Blog