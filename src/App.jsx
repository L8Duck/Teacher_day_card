import {Routes, Route} from "react-router-dom"

import MyCard from './components/pages/MyCard'
import Explore from './components/pages/Explore'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

import ChipTabs from "./components/ChipTabs"


function App() {
return (
  <div className="h-screen overflow-hidden container-fluid bg-slate-300">
    <ChipTabs/>
    <Routes>
      <Route path='/home' element={<Home />}></Route>  
      <Route path='/mycard' element={<MyCard />}></Route>  
      <Route path='/explore' element={<Explore />}></Route>  
      <Route path='/login' element={<Login />}></Route>  
      <Route path='/register' element={<Register />}></Route>  
    </Routes>
  </div>
  )
}

export default App