import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AddImage from '../assets/add_image.png'
export default function PersonDetectionPopup({open, setOpen}) {
  

  const cancelButtonRef = useRef(null)
    const uploadImageRef=useRef(null)


    const loadFile = (e) => {
        let output = document.getElementById("output");
        output.src = URL.createObjectURL(e.target.files[0]);
        output.onload = () => {
          URL.revokeObjectURL(output.src);
        };
      };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div>
                    <form>
                    <div className='mb-4'>
            <label htmlFor="name" className='text-lg'>
            NAME : 
            </label>
            <input type="text" name='ID' placeholder='ABC XYZ' className='px-2 py-1 ml-5 bg-gray-300 w-72'/>
        </div>
        <div className='mb-4'>
            <label htmlFor="ID" className='text-lg'>
            ID : 
            </label>
            <input type="text" name='ID' placeholder='XYZ' className='px-2 py-1 ml-14 bg-gray-300 w-72'/>
        </div>
                    </form>
                    
                
                    
                    <img src={AddImage} alt="add_image" width={350} className='mx-auto cursor-pointer' id='output' onClick={()=>uploadImageRef.current.click()}/>


                    <input type="file" accept='image/*' className='hidden' ref={uploadImageRef} onChange={(e)=>{
                            loadFile(e)
                            
                    }}/>
                    <div className='text-center'>
       <button className='bg-green-600 mt-10 py-2 px-6 rounded-lg text-white font-bold'>Upload</button>
       </div>

                  </div>
                </div>
               
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
