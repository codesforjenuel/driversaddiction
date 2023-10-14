import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const daLogo = "https://res.cloudinary.com/dkaeetuud/image/upload/v1697312507/Drivers%20Addiction/Drivers_Addiction_logo_gl2or7.png"
  return (
    <div className='flex flex-wrap flex-row justify-between items-end'>
        <img src={daLogo} alt="drivers addiction logo" className='w-55 h-20' />
        <ul className='flex flex-row justify-around'>
            <li className='font-semibold mx-10 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'><Link to='/'>BLOG</Link></li>
            <li className='font-semibold mx-10 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'><Link to='/trending'>TRENDING</Link></li>
            <li className='font-semibold mx-10 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'><Link to='/videos'>VIDEOS</Link></li>
            <li className='font-semibold mx-10 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'><Link to='/drivers'>DRIVERS</Link></li>
            <li className='font-semibold mx-10 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'><Link to='/shop'>SHOP</Link></li>
        </ul>
        <h3><Link className='font-meduim flex flex-row text-center drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'>login<br />/Signup</Link></h3>
    </div>
  )
}

export default Nav