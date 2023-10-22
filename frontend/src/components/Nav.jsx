import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFire } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { MdDirectionsCar } from 'react-icons/md';
import { MdStore } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const Nav = () => {
    const daLogo = "https://res.cloudinary.com/dkaeetuud/image/upload/v1697312507/Drivers%20Addiction/Drivers_Addiction_logo_gl2or7.png"
    const liStyle = ' font-semibold text-sm/[14px] md:text-base px-2 md:px-10 lg:px-20 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'
  const iconSize = 'w-5 h-5  md:w-6 md:h-6 lg:w-7 lg:h-7'
    return (
    <div className='w-full flex flex-wrap py-5 flex-row justify-between items-end bg-white drop-shadow-xl '>
     <img src={daLogo} alt="drivers addiction logo" className='w-full sm:w-40 lg:w-55 h-35' />
        <ul className='flex flex-row justify-around items-center'>
            <li className={liStyle}><Link to='/'><FaHome className={iconSize} color="black" /></Link></li>
            <li className={liStyle}><Link to='/trending'><FaFire className={iconSize} color='red' /></Link></li>
            <li className={liStyle}><Link to='/videos'><FaVideo className={iconSize} color="black" /></Link></li>
            {/* <li className={liStyle}><Link to='/drivers'><MdDirectionsCar className={iconSize} color="black" /></Link></li> */}
            {/* <li className={liStyle}><Link to='/shop'><MdStore className={iconSize} color="black" /></Link></li> */}
            <li className={liStyle}><Link to='/management'><img className={daLogo}
        src="https://res.cloudinary.com/dkaeetuud/image/upload/v1697447033/Drivers%20Addiction/white-circle-free-png_fo3uqd.webp"
        alt="TikTok Icon"
        width="40"
        height="40"
      /></Link></li>
        </ul>
        <h3><Link to='/login' className='font-medium text-md md:text-base mx-1 flex flex-row text-center drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'><FaUser className={iconSize} color="black" /></Link></h3>
    </div>
  )
  

}

export default Nav