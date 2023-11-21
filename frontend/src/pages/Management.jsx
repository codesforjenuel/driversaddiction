import {React, useState} from  'react'
import Nav from '../components/Nav'
import Blogform from '../components/Blogform'
import Trendingform from '../components/Trendingform'
import Videosform from '../components/Videosform'
import auth from '../utils/auth'

const Management = () => {
const[page, setPage] = useState(null)

const handlePageChange= (e) => {
setPage(e.target.value)
}
if (!auth.loggedIn()) {
window.location.assign("/login")
return 
}

  return (
    <div className='m-0 h-full w-full flex flex-col items-center  bg-gradient-to-br from-white to-stone-300'>
    <Nav/>
    <div className="h-500 md:h-700 lg:h-1000 w-full flex items-center justify-center bg-cover bg-[url('https://res.cloudinary.com/dkaeetuud/image/upload/v1697760628/Drivers%20Addiction/IMG_2782_j7rqpy.jpg')]">
<div className='w-60 h-fullrounded-md border bg-white drop-shadow-2xl flex flex-col items-center '>
<label htmlFor="page" className='mt-5' >Choose A Page:</label>
  <select  className='m-10' name="page" value={page || "select"} onChange={handlePageChange}>
    <option value="select">Select</option>
    <option value="blog">Blog</option>
    <option value="trending">Trending</option>
    <option value="videos">Videos</option>
  </select>
  {page === 'blog' &&  
<Blogform />
  }
  {page === 'trending' &&  
 <Trendingform/>
  }
  {page === 'videos' &&  
<Videosform/>
  }
</div>      
</div>
</div>
  )
}

export default Management