import React from 'react'
import Nav from '../components/Nav'

const Management = () => {
  return (
    <div className='m-0 h-full w-full flex flex-col items-center  bg-gradient-to-br from-white to-stone-300'>
    <Nav/>
    <div className="h-500 md:h-700 lg:h-1000 w-full flex items-center justify-center bg-cover bg-[url('https://res.cloudinary.com/dkaeetuud/image/upload/v1697760628/Drivers%20Addiction/IMG_2782_j7rqpy.jpg')]">
<div className='w-60 h-96 rounded-md bg-white drop-shadow-2xl flex flex-col items-center justify-center'>
<label for="page">Choose A Page:</label>
  <select  name="page">
    <option value="">Select</option>
    <option value="blog">Blog</option>
    <option value="trending">Trending</option>
    <option value="videos">Videos</option>
  </select>
  <button>Enter</button>
</div>
</div>
</div>
  )
}

export default Management