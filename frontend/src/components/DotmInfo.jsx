import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Dotminfo() {
    const [driverInfo, setDriverInfo] = useState("");
    const [text, setText] = useState("");
 
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
       const handleTextChange = (event) => {
      setText(event.target.value);
  };
  return (
    <div className='ibm-plex-mono-light w-72 flex flex-col items-center justify-center'>
    <h6>Welcome to Driver of The Month Edit</h6>
    <img src={driverInfo.heroImage} alt='banner of the driver' className=' w-40 h-20 m-5' />
    <img src={driverInfo.profileImage} alt='profile image of the driver' className='w-36 h-36 m-5'/>
    <p className='m-5'>{driverInfo.driversName}</p>
    <p className='m-5'>{driverInfo.driverBio}</p>
    <textarea
                rows="5" 
                cols="30"
                placeholder="Enter your text here" // Placeholder text
                value={driverInfo.story} 
                onChange={handleTextChange} // Call handleTextChange on textarea value change
            />
    </div>
  )
}

export default Dotminfo