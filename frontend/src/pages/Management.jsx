import {React, useState} from  'react'
import Nav from '../components/Nav'
import Edit from '../components/Edit'
import Trendingform from '../components/Trendingform'
import Videosform from '../components/Videosform'
import { FaUser } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { BiBarChart } from 'react-icons/bi'
import { FaBullhorn } from 'react-icons/fa'
import auth from '../utils/auth'

const Management = () => {
const[page, setPage] = useState("edit")

const handlePageChange= (selectedPage) => {
setPage(selectedPage)
}
if (!auth.loggedIn()) {
window.location.assign("/login")
return 
}

  return (
    <div className='m-0 h-full w-full flex flex-col items-center  bg-gradient-to-br from-white to-stone-300'>
    <Nav/>
    <div className="h-700 md:h-700 lg:h-1000 w-full flex flex-row bg-cover ">
<div className='w-60 h-full rounded-md border bg-white drop-shadow-2xl flex flex-col items-center '>
<label htmlFor="page" className='mt-5 flex flex-col' >Management:</label>
  <ul className='m-10' name="page">
    <li className='flex flex-row items-center' onClick={() => handlePageChange('edit')}><FaEdit/>Edit Pages</li>
    <li className='flex flex-row items-center' onClick={() => handlePageChange('users')}><FaUser />Users</li>
    <li className='flex flex-row items-center' onClick={() => handlePageChange('analytics')}><BiBarChart/>Analytics</li>
    <li className='flex flex-row items-center' onClick={() => handlePageChange('ads')}><FaBullhorn/>Ads</li>
  </ul>

</div> 
       <div>
  {page === 'edit' &&  
<Edit />
  }
  {page === 'users' &&  
 <Trendingform/>
  }
  {page === 'analytics' &&  
<Videosform/>
  }
  {page === 'ads' &&  
<Videosform/>
  }
</div>
</div>

</div>
  )
}

export default Management