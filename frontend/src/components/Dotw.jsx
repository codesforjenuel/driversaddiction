//dotw stands for Driver of the Week
import React from 'react'

const Dotw = () => {
  return (
    <div className=' w-full h-full flex flex-col items-center justify-around'>
<h2 className='text-xl font-sans text-left font-semibold m-10'>DRIVER OF THE WEEK</h2>
<div className=' w-3/4 flex flex-col justify-around md:flex-row items-center border-solid border-y-2 border-darkgray'>
<div className="w-56 h-56 m-8 md:w-80 md:h-80 rounded-md bg-no-repeat bg-cover bg-center bg-[url('https://imageio.forbes.com/specials-images/imageserve/63d5c9ccd110211cca4c5504/Doug-DeMuro-Ford-GT/960x0.jpg?format=jpg&width=960')]"></div>
<p className='m-3 h-56 md:h-80 md:text-xl font-sans md:w-96 lg:w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum natus tenetur sunt earum tempore perferendis accusantium placeat mollitia. Obcaecati, vero nihil eaque corporis exercitationem dolore illum tempora culpa ipsum accusantium?</p>
   </div> 
    </div>
  )
}

export default Dotw