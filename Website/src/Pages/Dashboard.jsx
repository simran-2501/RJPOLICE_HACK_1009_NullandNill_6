import React from 'react'
import Navbar from '../Components/Navbar'
import Map from '../Components/Map'
import {Search} from 'lucide-react'
function Dashboard() {
  return (
    <div>
        <Navbar title={"DASHBOARD"}/>
        <div className='bg-gray-300 absolute z-10 rounded-2xl flex items-center px-3'>
        </div>
        <Map/>
    </div>
  )
}

export default Dashboard