import React from 'react'
import Navbar from '../Components/Navbar'
import UploadImage from '../Components/UploadImage'
import ImageDetectionForm from '../Components/ImageDetectionForm'

function PersonDetection() {
  return (
    <div className='bg-gray-300 h-[100vh]'>
        <Navbar title="PERSON DETECTION"/>
        <div className='flex'>
            <UploadImage/>
            <ImageDetectionForm/>
        </div>
    </div>
  )
}

export default PersonDetection