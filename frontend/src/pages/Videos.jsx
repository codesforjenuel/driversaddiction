import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Videos = () => {
  return (
    <div className='m-0 h-full w-full flex flex-col items-center bg-gradient-to-br from-white to-stone-300'>
      <Nav/>
      {/* this div contains the banner */}
      <div className="w-full h-40 md:h-72 lg:h-96 max-w-screen-lg  bg-no-repeat bg-cover bg-center lg:bg-center bg-[url('https://res.cloudinary.com/dkaeetuud/image/upload/v1697577890/Drivers%20Addiction/collage_xcwmey.png')]">
    </div>
    {/* this div is the container for the lastest video */}
    <div className=' w-full max-w-screen-lg h-full flex flex-col items-center shadow-md bg-white'>
      <h2 className='text-xl font-light md:text-5xl drop-shadow-[0_7px_4px_rgba(0,0,0,0.25)] text-left m-10'>LATEST VIDEO</h2>
      <div className='w-full max-w-screen-lg h-full flex flex-col items-center border-y-2 border-solid border-slate-300'>
      <h3 className='text-base font-light md:text-3xl drop-shadow-[0_7px_4px_rgba(0,0,0,0.25)] text-left m-5'>Mark IV Toyota Supra BIG TURBO!</h3>
      <iframe className='w-full sm:h-96 md:h-500 md:w-3/4 h-60 mb-10' src="https://www.youtube.com/embed/ViY0iWSMR0I?si=r12hXg8XcksrUy7i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
    </div>
    </div>
    <div className=' w-full max-w-screen-lg h-full flex flex-col items-center shadow-md bg-white'>
      <h2 className='text-xl font-light md:text-5xl drop-shadow-[0_7px_4px_rgba(0,0,0,0.25)] text-left m-10'>SHORTS</h2>
      <div className='w-full max-w-screen-lg h-full flex flex-col md:flex-wrap md:flex-row items-center justify-center border-y-2 border-solid border-slate-300'>
      <iframe className='w-56 sm:h-96 md:h-500 md:w-72 h-96 m-5' src="https://youtube.com/embed/-pyaWlvilUk?si=96-Zs5tYcz9wiSsC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
      <iframe className='w-56 sm:h-96 md:h-500 md:w-72 h-96 m-5' src="https://youtube.com/embed/wsCHxMtzI-E?si=CLYK68Of8OmzfE7-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
      <iframe className='w-56 sm:h-96 md:h-500 md:w-72 h-96 m-5' src="https://youtube.com/embed/pA1igJRmCCs?si=Xr0RtyrOQ1t0FiFx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Videos