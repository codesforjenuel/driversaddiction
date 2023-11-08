//dotw stands for Driver of the Week
import React, {useState, useEffect} from 'react'

const Dotw = () => {

const [driverPhoto, setDriverPhoto] = useState('https://imageio.forbes.com/specials-images/imageserve/63d5c9ccd110211cca4c5504/Doug-DeMuro-Ford-GT/960x0.jpg?format=jpg&width=960')
const [driversName, setDriverName] = useState('https://imageio.forbes.com/specials-images/imageserve/63d5c9ccd110211cca4c5504/Doug-DeMuro-Ford-GT/960x0.jpg?format=jpg&width=960')
const [driverBio, setDriverBio] = useState('https://imageio.forbes.com/specials-images/imageserve/63d5c9ccd110211cca4c5504/Doug-DeMuro-Ford-GT/960x0.jpg?format=jpg&width=960')
const [driverHero, setDriverHero] = useState('https://imageio.forbes.com/specials-images/imageserve/63d5c9ccd110211cca4c5504/Doug-DeMuro-Ford-GT/960x0.jpg?format=jpg&width=960')
const URL = 'http://localhost:3001/api/driverOfTheWeek'


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
     result.json().then(data => {
      console.log(data)
      setDriverPhoto(data.profileImage)
      setDriverName(data.driversName)
      setDriverBio(data.driverBio)
      setDriverHero(data.heroImage)
     })
    }
    fetchData()
  }, [])

  return (
    <div className=' w-full max-w-screen-lg h-full flex flex-col items-center justify-around bg-white'>
      <div className={`w-full h-40 md:h-96 lg:h-96 max-w-screen-lg bg-no-repeat bg-cover bg-top lg:bg-top bg-[url('${driverHero}')]`}>
    </div>
<h2 className='text-xl font-light md:text-5xl drop-shadow-[0_7px_4px_rgba(0,0,0,0.25)] text-left m-10'>DRIVER OF THE WEEK</h2>
<div className=' w-3/4 flex flex-col justify-around md:flex-row items-center border-solid border-y-2 border-darkgray'>
<div className={`shadow-lg w-56 h-56 m-8 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-md bg-no-repeat bg-cover bg-center bg-[url('${driverPhoto}')]`}></div>
<div className='flex flex-col m-8 h-full'>
<h2 className='text-center font-normal text-2xl '>{driversName}</h2>
<p className='  md:text-xl  md:w-80 lg:w-96 md:leading-10'>{driverBio}</p>
 </div>  
   </div> 
    </div>
  )
}

export default Dotw