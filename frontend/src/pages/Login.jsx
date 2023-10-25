import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <div className='m-0 h-full w-full flex flex-col items-center  bg-white'>
      <Nav/>
      <div className='h-500 md:h-700 lg:h-1000 w-full bg-gradient-to-br from-zinc-500 to-white flex items-center justify-center'>
<div className='w-60 h-96 bg-white drop-shadow-lg flex flex-col items-center justify-center'>
  <label htmlFor="email" className='mt-5'>EMAIL</label>
  <input type="email" name="email" className=' border-2 border-solid border-slate-500 rounded-md mb-5'required />
  <label htmlFor="password">PASSWORD</label>
  <input type="password" name="password" className=' border-2 border-solid border-slate-500 rounded-md mb-5' required />
<div>
  <button className='w-20 bg-slate-300 rounded-md p-2 hover:bg-slate-400 transition-transform m-2'>LOGIN</button>
  {/* <button className='w-20 bg-slate-300 rounded-md p-2 hover:bg-slate-400 transition-transform m-2'>SIGN UP</button> */}
</div>
</div>

      </div>
      <Footer/>
    </div>
  )
}

export default Login