import React from 'react'

import img1 from '../../public/icon/visa.png'
import img2 from '../../public/icon/mastercard.png'
import img3 from '../../public/icon/paypal.png'
import img4 from '../../public/icon/american-express.png'
import img5 from '../../public/icon/discover.png'

export default function Footer() {
  return (
    <div className='lg:flex justify-between lg:px-10 max-w-[1400px] m-auto'>
        <p className='text-center text-sm p-5'>&copy;  2023-24 themeforest powered by pixelstrap</p>
        <div className='flex justify-center pb-[25px] gap-3 lg:p-5'>
            <div><img src={img1}/></div>
            <div><img src={img2}/></div>
            <div><img src={img3}/></div>
            <div><img src={img4}/></div>
            <div><img src={img5}/></div>
        </div>
    </div>
  )
}
