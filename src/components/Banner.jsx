import React from 'react'

export default function Banner() {
  return (
    <div id='hero' className='relative items-center p-60'>
        <div className='absolute top-[40%] text-center'>
            <p className='text-[18px] text-[#777777] tracking-[5.4px] '>Welcome To Fashion</p>
            <h1 className='uppercase text-5xl font-bold mb-7'>Men fashion</h1>
            <button className='text-white bg-orange-600 e py-3 px-5 uppercase'>Shop now</button>
        </div> 
    </div>
  )
}
