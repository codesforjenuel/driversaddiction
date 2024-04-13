import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Dotminfo() {
    const [driverInfo, setDriverInfo] = useState("");

    async function fetchAllData() {
      try {
        const response = await axios.get("/api/driverOfTheWeek/6613aa132c2c7636ca911560");
        console.log(' All post have been successfully recieved:', response.data);
       setDriverInfo(response.data)
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }
    
    fetchAllData()
    
  return (
    <div className=' text-center m-5'>
    <h6>Welcome to Driver of The Month Edit</h6>
    <img src={driverInfo.heroImage} alt='banner of the driver' className=' w-40 h-20' />
    <img src={driverInfo.profileImage} alt='profile image of the driver' className='w-36 h-36'/>
    <p>{driverInfo.driversName}</p>
    <p>{driverInfo.driverBio}</p>
    <p>{driverInfo.story}</p>
    </div>
  )
}

export default Dotminfo