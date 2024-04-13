import React from 'react'
import { RxUpload } from "react-icons/rx";
function Category() {
  return (
<div className='flex justify-between '>
    <div className='flex items-center gap-2'>
    <p>
          bags
        </p>
        <span className='h-2 w-2 bg-white rounded-full'></span>
        <p>Backpacks</p>
    </div>
    <div className='flex items-center gap-3'>
        <p>13 products</p>
        <RxUpload />
           </div>
    
      </div>
    )
}

export default Category