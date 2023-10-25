import React from 'react'

const Trendingform = () => {
  return (
    <div className='w-60 h-full bg-white drop-shadow-lg flex flex-col items-center'>
    <label htmlFor="hero" className='mt-5'>Hero Image URL</label>
<input type="text" name="hero" className=' border-2 border-solid border-slate-500 rounded-md mb-5'required />
<label htmlFor="title">Title</label>
<input type="text" name="title" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
<label htmlFor="story">Story</label>
<input type="text" name="story" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
</div>
  )
}

export default Trendingform