import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const daLogo = "https://res.cloudinary.com/dkaeetuud/image/upload/v1697312507/Drivers%20Addiction/Drivers_Addiction_logo_gl2or7.png"
    const liStyle = 'font-semibold text-sm md:text-base mx-2 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'
  return (
    <div className='w-full flex flex-wrap flex-row justify-between items-end'>
     <img src={daLogo} alt="drivers addiction logo" className='w-full sm:w-40 lg:w-55 h-35' />
        <ul className='flex flex-row justify-around'>
            <li className={liStyle}><Link to='/'>BLOG</Link></li>
            <li className={liStyle}><Link to='/trending'>TRENDING</Link></li>
            <li className={liStyle}><Link to='/videos'>VIDEOS</Link></li>
            <li className={liStyle}><Link to='/drivers'>DRIVERS</Link></li>
            <li className={liStyle}><Link to='/shop'>SHOP</Link></li>
        </ul>
        <h3><Link className='font-medium text-sm md:text-base mx-1 flex flex-row text-center drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'>login<br />Signup</Link></h3>
    </div>
  )
  

}

export default Nav