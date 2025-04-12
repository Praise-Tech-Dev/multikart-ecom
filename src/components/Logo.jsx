import React from 'react'
import LogoData from '../utils/logoData'

export default function Logo() {
    console.log(LogoData, 'LogoData');
  return (
    
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-[30px] md:py-[50px] lg:py-[60px]'>
      {
        LogoData.map((data, index)=>{
            return (
                <div>
                    <div className=''>
                        <img src={data.img} className='w-full'/>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}
