import {React, useState} from  'react'
import Nav from '../components/Nav'

const Management = () => {
const[page, setPage] = useState(null)
const testObj = [
  {
"driverName": "Doug Demuro",
"driverImg" : "",
"bio":"hkhf;oaiao;vihr"
  },
  {
"driverName": "Paul Walker",
"driverImg" : "",
"bio":"hkhf;oaiao;vihr"
  }
]

const handlePageChange= (e) => {
setPage(e.target.value)
}

  return (
    <div className='m-0 h-full w-full flex flex-col items-center  bg-gradient-to-br from-white to-stone-300'>
    <Nav/>
    <div className="h-500 md:h-700 lg:h-1000 w-full flex items-center justify-center bg-cover bg-[url('https://res.cloudinary.com/dkaeetuud/image/upload/v1697760628/Drivers%20Addiction/IMG_2782_j7rqpy.jpg')]">
<div className='w-60 h-96 rounded-md bg-white drop-shadow-2xl flex flex-col items-center '>
<label htmlFor="page" className='mt-10' >Choose A Page:</label>
  <select  name="page" value={page || "select"} onChange={handlePageChange}>
    <option value="select">Select</option>
    <option value="blog">Blog</option>
    <option value="trending">Trending</option>
    <option value="videos">Videos</option>
  </select>
  {page === 'blog' &&  
  <div className='w-60 h-full bg-white drop-shadow-lg flex flex-col items-center'>
     <label htmlFor="hero" className='mt-5'>Hero Image URL</label>
  <input type="text" name="hero" className=' border-2 border-solid border-slate-500 rounded-md mb-5'required />
  <label htmlFor="profile">Profile Image URL</label>
  <input type="text" name="profile" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
  <label htmlFor="name">Driver's Name</label>
  <input type="text" name="name" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
  <label htmlFor="bio">Bio</label>
  <input type="text" name="bio" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
  <label htmlFor="story">Story</label>
  <input type="text" name="story" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
  </div>
  }
  {page === 'trending' &&  
  <div className='w-60 h-full bg-white drop-shadow-lg flex flex-col items-center'>
       <label htmlFor="hero" className='mt-5'>Hero Image URL</label>
  <input type="text" name="hero" className=' border-2 border-solid border-slate-500 rounded-md mb-5'required />
  <label htmlFor="title">Title</label>
  <input type="text" name="title" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
  <label htmlFor="story">Story</label>
  <input type="text" name="story" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
  </div>
  }
  {page === 'videos' &&  
  <div className='w-60 h-full bg-white drop-shadow-lg flex flex-col items-center'>
  <label htmlFor="title">Title</label>
  <input type="text" name="title" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
  <label htmlFor="video">Video URL</label>
  <input type="text" name="video" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
</div>
  }
</div>
</div>
</div>
  )
}

export default Management