import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full m-10 text-center'>
        <h3>© 2023 Drivers Addiction. All rights reserved.
Any unauthorized reproduction or distribution of the content on this website is prohibited.
</h3>
<div className=' w-full flex flex-row justify-center'>
        <FaInstagram size={30} color="#bc2a8d" className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s' />
        <FaYoutube size={30} color="red" className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s' />
        <img className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'
        src="https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small/tiktok-icon-free-png.png"
        alt="TikTok Icon"
        width="30"
        height="30"
      />
        </div>
    </div>
  )
}

export default Footer