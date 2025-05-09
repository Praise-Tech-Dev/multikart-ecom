import React from 'react'

export default function FooterBottom() {
  return (
    <div className='bg-black flex text-gray-300 justify-center gap-13 p-5 text-xl md:hidden lg:hidden'>
      <div>
        <i className='pi pi-search'></i>
      </div>
      <div>
        <i className='pi pi-heart-fill'></i>
      </div>
      <div>
        <i className='pi pi-shopping-cart'></i>
      </div>
      <div>
        <i className='pi pi-search pi-user'></i>
      </div>
      <div>
        <i className='pi pi-cog'></i>
      </div>
    </div>
  )
}
