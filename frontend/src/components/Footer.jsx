import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full p-10 text-center flex flex-col items-center bg-white'>
        <h3>© 2023 Drivers Addiction. All rights reserved.</h3>
<div className=' w-full flex flex-row justify-center'>
        <Link to="https://www.instagram.com/drivers.addiction/" target='https://www.instagram.com/drivers.addiction/'><FaInstagram size={30} color="#bc2a8d" className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s' /></Link>
        <Link to="https://www.youtube.com/@driversaddiction" target='https://www.youtube.com/@driversaddiction'><FaYoutube size={30} color="red" className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s' /></Link>
        <Link to="https://www.tiktok.com/@driversaddiction" target='https://www.tiktok.com/@driversaddiction'><img className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'
        src="https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small/tiktok-icon-free-png.png"
        alt="TikTok Icon"
        width="30"
        height="30"
      /></Link>
        </div>
    </div>
  )
}

export default Footer