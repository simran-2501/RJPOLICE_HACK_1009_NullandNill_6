import React from 'react'
import {Pencil,Trash2} from 'lucide-react'
export default function ImageCard() {
  return (
    <div className="w-[300px] rounded-md border h-fit mt-20 bg-white">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[250px] w-full rounded-md object-cover"
      />
      <div className="p-4 flex">
        <div>
       <p><b>Name: </b><span>ABC XYZ</span></p>
       <p><b>id: </b><span>5786 1234 1234</span></p>
       
        </div>
        <div className='flex ml-auto'>
        <Pencil className='mr-2'/>
        <Trash2/>
        </div>
      </div>
    </div>
  )
}
