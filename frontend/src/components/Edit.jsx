import React, { useState, useEffect} from 'react';
import Blogform from './Blogform';
import Dotminfo from './DotmInfo';
import Videosform from './Videosform';

function Edit() {
const liStyle ='w-52  hover:transition duration-300 ease-in-out hover:text-black text-center hover:border-b-4 border-stone-300 hover:bg-stone-300'

const [editPage, seteditPage] = useState("dotm")

const handleEditPage = (selectedPage) => {
  seteditPage(selectedPage)
}

  return (
    <div>
    <div className=' w-full h-full flex flex-row flex-wrap bg-white'>
    <ul className=' w-full h-10 flex flex-row items-center justify-start text-slate-400 bg-white'>
      <li className={liStyle} onClick={() => handleEditPage('dotm')}>Driver of The Month</li>
      <li className={liStyle} onClick={() => handleEditPage('trending')}>Trending</li>
      <li className={liStyle} onClick={() => handleEditPage('videos')}>Videos</li>
    </ul>
      </div>
      {editPage === "dotm" && 
      <div className='flex flex-row flex-wrap'>
    <Blogform />
<Dotminfo/>
<Videosform/>
</div>
    }
    </div>
  )
}

export default Edit