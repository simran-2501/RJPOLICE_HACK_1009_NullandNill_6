import React from 'react'
import Navbar from './Navbar'

function PersonDetectionResult() {
  return (
    <div className='bg-gray-300 h-[100vh]'>
             <Navbar title="PERSON DETECTION"/>
<div className='flex'>
    <div className='w-1/2 p-20'>
<div className='w-[600px] h-[400px] bg-gray-400 flex items-center justify-center'>
    <h1 className='font-bold text-3xl'>VDO</h1>
</div>
    </div>
    <div className='w-1/2 p-20'>
    <fieldset className="border-solid border border-black w-[600px] h-[400px]">
    <legend className="text-center font-bold px-2 text-2xl">Detected Person</legend>
    <div className='text-center'>
    <button className='bg-indigo-600 py-3 px-20 my-2 rounded-lg text-white font-bold mt-10'>ABC XYZ</button>
    </div>
</fieldset>
    </div>
</div>
    </div>
  )
}

export default PersonDetectionResult