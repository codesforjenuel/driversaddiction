import React from 'react'

const Videosform = () => {
  return (
    <div className='w-60 h-full bg-white drop-shadow-lg flex flex-col items-center'>
    <label htmlFor="title">Title</label>
    <input type="text" name="title" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
    <label htmlFor="video">Video URL</label>
    <input type="text" name="video" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
  </div>
  )
}

export default Videosform