import React from 'react'
import {Trash2, Video} from 'lucide-react'
function VehicleDetectionForm() {
  return (
    <div className='flex px-20'>
        <div className='w-1/2'>
        <form className='mt-10'>
       <div className='mb-4'>
            <label htmlFor="ID" className='text-lg'>
            Enter ID : 
            </label>
            <input type="text" name='ID' placeholder='XYZ' className='px-2 py-1 ml-10'/>
        </div>
        <div className='mb-4'>
            <label htmlFor="date" className='text-lg'>
            Enter Date : 
            </label>
            <input type="date" name='date' className='px-2 py-1 ml-5 w-72'/>
        </div>
        <div>
            <label htmlFor="time" className='text-lg'>
            Enter Time : 
            </label>
            <input type="time" name='time' placeholder='XYZ' className='px-2 py-1 ml-5'/>
            <span className='ml-5'>-</span>
            <input type="time" name='time' placeholder='XYZ' className='px-2 py-1 ml-5'/>
        </div>
       </form>
        </div>
        <div>
        <div className='text-center'>
       <button className='bg-green-600 mt-10 py-2 px-6 rounded-lg text-white font-bold'>Fetch Recording</button>
       </div>
       
<div className='flex justify-center mt-4'>
<button className='bg-gray-500 mt-10 py-4 px-8 rounded-lg text-white font-bold flex items-center'><Video color='black'/><span className='ml-2 text-black'>Recording</span></button>
<Trash2 className='mt-4 cursor-pointer text-red-500'/>
</div>

        </div>
        <div className='mt-20 ml-5 text-center'>
<button className='bg-indigo-600 py-3 px-10 my-2 rounded-lg text-white font-bold'>Vehicle Detection</button>
</div>
    </div>
  )
}

export default VehicleDetectionForm