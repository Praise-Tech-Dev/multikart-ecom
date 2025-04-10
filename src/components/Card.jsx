import React from 'react'
import CardData from '../utils/cardData'

export default function Card() {
    console.log(CardData, 'CardData');
  return (
    <div>
        <div className='grid grid-cols-4  w-[70%] m-auto gap-8'>
        {
            CardData.map((data, index) => {
                
                return (
                    <div>
                        <div>
                            <img src={data.img1} className='w-full'/>
                        </div>
                        <div>
                            <h6></h6>
                            <h4></h4>
                        </div>
                    </div>
                )
            })    
        }
        </div>
      
    </div>
  )
}
