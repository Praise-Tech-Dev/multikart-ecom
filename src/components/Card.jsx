import React from 'react'
import CardData from '../utils/cardData'

export default function Card() {
    console.log(CardData, 'CardData');
  return (
    <div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] m-auto md:gap-6 lg:gap-8'>
        {
            CardData.map((data, index) => {
                
                return (
                    <div className=''>
                        <div>
                            <img src={data.img1} className='w-full'/>
                        </div>
                        <div className='text-left py-3'>
                            <div className=''>
                                <div className='text-amber-400'>
                                    <i className='pi pi-star-fill'></i>
                                    <i className='pi pi-star-fill'></i>
                                    <i className='pi pi-star-fill'></i>
                                    <i className='pi pi-star-fill'></i>
                                    <i className='pi pi-star-fill'></i>
                                </div>
                            </div>
                            <h6 className='text-[#777777] text-[16px]'>{data.name}</h6>
                            <h4 className='text-[18px] font-medium'>{data.price}</h4>
                        </div>
                    </div>
                )
            })    
        }
        </div>
      
    </div>
  )
}
