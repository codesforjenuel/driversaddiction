import React from 'react'
//importing Routes and Route, will allow us to configure the routes in our project
import {Routes, Route} from 'react-router-dom'
//folowing imports the pages so we can use them as routes
import Blog from './pages/blog'
import Drivers from './pages/Drivers'
import Shop from './pages/shop'
import Trending from './pages/trending'
import Videos from './pages/videos'

const App = () => {
  return (
   <Routes>
<Route path='/' element={<Blog />}/>
<Route path='/drivers' element={<Drivers />}/>
<Route path='/shop' element={<Shop />}/>
<Route path='/trending' element={<Trending />}/>
<Route path='/videos' element={<Videos />}/>
   </Routes>
  )
}

export default App