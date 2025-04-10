import React from 'react'

export default function Catalogue() {
  return (
    <div className='flex mt-20 w-[80%] m-auto gap-7'>
      <div id='men-coll' >
        <div className='uppercase absolute top-[40%] right-[20%] text-center'>
            <h4 className='text-orange-600 text-[18px] font-medium'>10% off</h4>
            <h2 className='text-5xl text-[#222222] font-medium'>men</h2>
        </div>
      </div>
      <div id='women-coll'>
        <div className='uppercase absolute top-[40%] right-[20%] text-center'>
            <h4 className='text-orange-600 text-[18px] font-medium'>10% off</h4>
            <h2 className='text-5xl text-[#222222] font-medium'>women</h2>
        </div>
      </div>
    </div>
  )
}
