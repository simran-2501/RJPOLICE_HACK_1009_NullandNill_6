import React from 'react'
import Navbar from '../Components/Navbar'
import VehicleDetectionForm from '../Components/VehicleDetectionForm'

function VehicleDetection() {
  return (
    <div className='bg-gray-300 h-[100vh]'>
        <Navbar title={"VEHICLE DETECTION"}/>
        <VehicleDetectionForm/>
    </div>
  )
}

export default VehicleDetection