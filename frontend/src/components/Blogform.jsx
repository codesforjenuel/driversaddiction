import React, {useState,useEffect} from 'react'

const Blogform = () => {
  const [heroImage, setHeroImage] = useState(null)
  const [profileImage, setProfileImage] = useState(null)
  const [driversName, setDriversName] = useState(null)
  const [driverBio, setDriverBio] = useState(null)
  const [story, setStoryInfo] = useState(null)
  const [url, setUrl] = useState(null)
  const [isShort, setIsShort] = useState(null)
  const URL = 'http://localhost:3001/api/driverOfTheWeek'
  const handleVideoChange= (e) => {
    setIsShort(e.target.value)
    }
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
     result.json().then(data => {
      console.log(data)
    
     })
    }
    fetchData()
  }, [])

  const handleFormSubmit = (event) => {
event.preventDefault();
const dataToSubmit = {
  heroImage,
  profileImage,
  driversName,
  driverBio,
  story,
  url,
  isShort
}
fetch('http://localhost:3001/api/driverOfTheWeek/1', {
  method: 'PUT' ,
  headers: {
    'Content-type' : 'application/json; charset=UTF-8'
  },
  body: JSON.stringify(dataToSubmit)
}).then(res => res.json())
.then(res => {
  console.log(res)
})
  }

  return (
    
      <form action="#" method="put" className='w-60 h-full bg-white drop-shadow-lg flex flex-col items-center' onSubmit={handleFormSubmit}>
    <label htmlFor="hero" className='mt-5'>Hero Image URL</label>
 <input type="text" name="hero" value={heroImage} className=' border-2 border-solid border-slate-500 rounded-md mb-5'required onSubmit={(event) => setHeroImage(event.target.value)} />
 <label htmlFor="profile">Profile Image URL</label>
 <input type="text" name="profile" value={profileImage} className=' border-2 border-solid border-slate-500 rounded-md mb-5' required onSubmit={(event) => setProfileImage(event.target.value)}/>
 <label htmlFor="name">Driver's Name</label>
 <input type="text" name="name" value={driversName} className=' border-2 border-solid border-slate-500 rounded-md mb-5' required onSubmit={(event) => setDriversName(event.target.value)}/>
 <label htmlFor="bio">Bio</label>
 <input type="text" name="bio" value={driverBio} className=' border-2 border-solid border-slate-500 rounded-md mb-5' required onSubmit={(event) => setDriverBio(event.target.value)}/>
 <label htmlFor="story">Story</label>
 <input type="text" name="story" value={story} className=' border-2 border-solid border-slate-500 rounded-md mb-5' required onSubmit={(event) => setStoryInfo(event.target.value)}/>
 <label htmlFor="video">Video URL</label>
 <input type="text" name="video" value={url} placeholder='if no video,leave blank!' className=' border-2 border-solid border-slate-500 rounded-md mb-5' onSubmit={(event) => setUrl(event.target.value)}/>
 <div className=' flex justify-between w-20 items-center text-center'>
 <label htmlFor="videoTrue">True</label>
 <input type="radio" name="videoAv" value={isShort || "true"} onSubmit={handleVideoChange} />
 <label htmlFor="videoFalse">false</label>
 <input type="radio" name="videoAv" value={isShort || "false"} onSubmit={handleVideoChange} />
 </div>
 <button type="submit" className='w-20 bg-slate-300 rounded-md p-2 hover:bg-slate-400 transition-transform m-2'>Update</button>
 </form>

  )
}

export default Blogform