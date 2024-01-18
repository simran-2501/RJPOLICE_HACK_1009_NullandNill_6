import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Otp from './Pages/Otp'
import DashboardXYZ from './Pages/DashboardXYZ'
import ObjectDetection from './Pages/ObjectDetection'
import PersonDetection from './Pages/PersonDetection'
import PersonDetectionResult from './Components/PersonDetectionResult'
import VehicleDetection from './Pages/VehicleDetection'
function App() {
  

  return (
   <Routes>

<Route exact path='/' element={<Dashboard/>}></Route>
<Route exact path='/xyz' element={<DashboardXYZ/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/otp' element={<Otp/>}></Route>
<Route exact path='/objectdetection' element={<ObjectDetection/>}></Route>
<Route exact path='/persondetection' element={<PersonDetection/>}></Route>
<Route exact path='/persondetection/result' element={<PersonDetectionResult/>}></Route>
<Route exact path='/vehicledetection' element={<VehicleDetection/>}></Route>

   
   </Routes>
  )
}

export default App
