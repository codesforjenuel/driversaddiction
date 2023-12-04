import React, {useState,useEffect} from 'react'

const Createruserform = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const URL = '/api/users/'
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await fetch(URL)
       result.json().then(data => {
        console.log(data)
      setApiInfo(JSON.stringify(data))
       })
      }
      fetchData()
    }, [])
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
    
      try {
        const dataToSubmit = {
          name,
          email,
          password,
        };
    
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
           
          },
          body: JSON.stringify(dataToSubmit)
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
    
        const responseData = await response.json();
        console.log('Data updated successfully:', responseData);
      } catch (error) {
        // Handle fetch error
        console.error('Error occurred while updating data:', error);
      }
    };
  
    return (
      
        <form action="#" method="put" className='w-60 h-full bg-white drop-shadow-lg flex flex-col items-center' onSubmit={handleFormSubmit}>
      <label htmlFor="name" className='mt-5'>Name</label>
   <input type="text" name="name" value={name} className=' border-2 border-solid border-slate-500 rounded-md mb-5'required onChange={(event) => setName(event.target.value)} />
   <label htmlFor="email">Email</label>
   <input type="email" name="email" value={email} className=' border-2 border-solid border-slate-500 rounded-md mb-5' required onChange={(event) => setEmail(event.target.value)}/>
   <label htmlFor="password">Password</label>
   <input type="password" name="password" value={password} className=' border-2 border-solid border-slate-500 rounded-md mb-5' required onChange={(event) => setPassword(event.target.value)}/>
 
  
   <button type="submit" className='w-20 bg-slate-300 rounded-md p-2 hover:bg-slate-400 transition-transform m-2'>Create</button>
  
   </form>
  
    )
}

export default Createruserform