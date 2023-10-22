import React from 'react'
//importing Routes and Route, will allow us to configure the routes in our project
import {Routes, Route} from 'react-router-dom'
//folowing imports the pages so we can use them as routes
import Blog from './pages/Blog'
import Drivers from './pages/Drivers'
import Shop from './pages/shop'
import Trending from './pages/trending'
import Videos from './pages/videos'
import Management from './pages/Management'
import Login from './pages/Login'

const App = () => {
  return (
   <Routes>
<Route path='/' element={<Blog />}/>
<Route path='/drivers' element={<Drivers />}/>
<Route path='/shop' element={<Shop />}/>
<Route path='/trending' element={<Trending />}/>
<Route path='/videos' element={<Videos />}/>
<Route path='/management' element={<Management />}/>
<Route path='/login' element={<Login />}/>
   </Routes>
  )
}

export default App