import React from 'react'
import InstaData from '../utils/instaData'

export default function Insta() {
    console.log(InstaData, 'InstaData');
  return (
    <div className='grid md:grid-cols-5 lg:grid-cols-7'>
        
      {
        InstaData.map((data, index) =>{
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
