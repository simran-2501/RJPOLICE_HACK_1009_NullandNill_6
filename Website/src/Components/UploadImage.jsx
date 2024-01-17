import React,{useState} from 'react'
import { Plus } from 'lucide-react'
import PersonDetectionPopup from './PersonDetectionPopup'
import ImageCard from './ImageCard'
function UploadImage() {
    const [open, setOpen] = useState(false)
    const [image,setImage]=useState(false)
  return (
    <>
    <div className='w-1/2 items-center flex flex-col p-6 border-r-2 border-black'>
        <h1 className='text-gray-600 font-bold text-3xl'>Upload Image</h1>
        {image?
        <ImageCard/>
        :
        <div className='mt-36 text-center'>
    
      
        <p>Upload images for detection</p>
        <p>(.png, .jpg, .jpeg)</p>

        </div>
}
        <button className='bg-indigo-600 p-4 rounded-lg ml-auto mt-[17.6rem]' onClick={()=>setOpen(true)}><Plus color='white'/></button>
    </div>
    <PersonDetectionPopup open={open} setOpen={setOpen}/>
    </>
  )
}

export default UploadImage