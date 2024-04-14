import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Dotminfo() {
    const [driverInfo, setDriverInfo] = useState("");

    useEffect(() => {
      async function fetchDriver() {
          try {
              const response = await axios.get("/api/driverOfTheWeek/6613aa132c2c7636ca911560");
              console.log('Data successfully received:', response.data);
              setDriverInfo(response.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      }

      fetchDriver();
    }, []);
  return (
    <div className=' text-center'>
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