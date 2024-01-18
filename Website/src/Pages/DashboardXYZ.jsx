import React from 'react'
import Navbar from '../Components/Navbar'
import Map from '../Components/Map'
import {Search} from 'lucide-react'
import { Link } from 'react-router-dom'
function DashboardXYZ() {
  return (
    <div>
        <Navbar title={"DASHBOARD"}/>
        <div className='absolute z-10 bg-gray-300 h-[85vh] py-2 px-8 text-center'>
        <div className='bg-white rounded-2xl flex items-center px-3 mt-5'>
        <input type="text" placeholder='Search Map' className='p-2 rounded-2xl bg-white placeholder-black outline-none'/>
        <Search  className='ml-auto'/>
        </div>
        <div className='mt-20'>
        <p className='font-bold'>Camera ID :RJH562</p>
        <p className='font-bold'>Area: XYX, 482003</p>
        </div>
        <button className='bg-green-600 mt-10 py-3 px-6 rounded-lg text-white font-bold'>Recording</button>
        <div className='mt-10 flex flex-col'>
       <Link to={'/objectdetection'}><button className='bg-indigo-600 py-3 px-20 my-2 rounded-lg text-white font-bold'>Object Detection</button></Link> 
       <Link to={'/persondetection'}><button className='bg-indigo-600 py-3 px-20 my-2 rounded-lg text-white font-bold'>Person Detection</button></Link>
        <Link to={'/vehicledetection'}><button className='bg-indigo-600 py-3 px-20 my-2 rounded-lg text-white font-bold'>Vehicle Detection</button></Link>
        <button className='bg-indigo-600 py-3 px-10 my-2 rounded-lg text-white font-bold'>No. Plate Detection</button>
            
        </div>
        </div>
        <Map/>
    </div>
  )
}

export default DashboardXYZ