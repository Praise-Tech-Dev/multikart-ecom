import React from 'react'

export default function Footer() {
  return (
    <div className=''>
        <p className='text-center text-sm p-5'>&copy;  2023-24 themeforest powered by pixelstrap</p>
        <div className='flex justify-center pb-[25px] gap-3'>
            <div><img src='./icon/visa.png'/></div>
            <div><img src='./icon/mastercard.png'/></div>
            <div><img src='./icon/paypal.png'/></div>
            <div><img src='./icon/american-express.png'/></div>
            <div><img src='./icon/discover.png'/></div>
        </div>
    </div>
  )
}
