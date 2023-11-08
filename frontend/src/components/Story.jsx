import React, { useState , useEffect } from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Story = () => {
const [driverStory, setDriverStory] = useState('')
const [driverInst, setDriverInst] = useState('')
const [driverYt, setDriverYt] = useState('')
const [driverTik, setDriverTik] = useState('')
const [driverWeb, setDriverWeb] = useState('')
const [videoInt, setVideoInt] = useState(false)
const URL = 'http://localhost:3001/api/driverOfTheWeek'


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
     result.json().then(data => {
      setDriverStory(data.story)
      setDriverInst(data.socials[2].url)
      setDriverYt(data.socials[3].url)
      setDriverTik(data.socials[1].url)
      setDriverWeb(data.socials[0].url)
      setVideoInt(data.video.isShort)
     })
    }
    fetchData()
  }, [])

  return (
    
    <p className=' w-full max-w-screen-lg h-full flex flex-col items-center shadow-md bg-white'>
    <h1 className='text-2xl m-8 font-normal'>The Story</h1>
    <p className=' mx-20 text-left font-sans md:text-xl lg:mx-44 md:leading-10'>{driverStory}</p>
        <div className=' w-full flex flex-row justify-center'>
        <Link to={driverInst} target={driverInst}><FaInstagram size={40} color="#bc2a8d" className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s' /></Link>
        <Link to={driverYt} target={driverYt}><FaYoutube size={40} color="red" className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s' /></Link>
        <Link to={driverWeb} target={driverWeb}><FaGlobe size={40} color="blue" className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s' /></Link>
        <Link to={driverTik} target={driverTik}><img className='m-5 drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)] transition duration-5s'
        src="https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small/tiktok-icon-free-png.png"
        alt="TikTok Icon"
        width="40"
        height="40"
      /></Link>
        </div>
        {videoInt === true &&
        <iframe className='w-full sm:h-96 md:h-500 md:w-3/4 h-60 m-20' src="https://www.youtube.com/embed/V_fYfdXpkx4?si=FN3YtYjpCrQ9hAYM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        }
        </p>
  )
}

export default Story