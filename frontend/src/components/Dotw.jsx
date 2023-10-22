//dotw stands for Driver of the Week
import React from 'react'

const Dotw = () => {
  return (
    <div className=' w-full max-w-screen-lg h-full flex flex-col items-center justify-around bg-white'>
<h2 className='text-xl font-light md:text-5xl drop-shadow-[0_7px_4px_rgba(0,0,0,0.25)] text-left m-10'>DRIVER OF THE WEEK</h2>
<div className=' w-3/4 flex flex-col justify-around md:flex-row items-center border-solid border-y-2 border-darkgray'>
<div className="shadow-lg w-56 h-56 m-8 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-md bg-no-repeat bg-cover bg-center bg-[url('https://imageio.forbes.com/specials-images/imageserve/63d5c9ccd110211cca4c5504/Doug-DeMuro-Ford-GT/960x0.jpg?format=jpg&width=960')]"></div>
<div className='flex flex-col m-8 h-full'>
<h2 className='text-center font-normal text-2xl '>DOUG DEMURO</h2>
<p className='  md:text-xl  md:w-80 lg:w-96 md:leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum natus tenetur sunt earum tempore perferendis accusantium placeat mollitia. Obcaecati, vero nihil eaque corporis exercitationem dolore illum tempora culpa ipsum accusantium?</p>
 </div>  
   </div> 
    </div>
  )
}

export default Dotw