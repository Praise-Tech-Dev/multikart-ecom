import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='flex justify-between py-[30px] px-5 md:px-10 lg:px-30  '>
            <div className="flex">
                <div className='px-10 font-black  text-2xl'>
                    <i className='pi pi-bars'></i>
                </div>
                <div className='h-6'>
                    <img src='../../public/logo/logo.png' className='w-full h-full'/>
                </div>
            </div>
           

            <ul className='lg:flex uppercase hidden '>
                <li className='px-7 flex '>
                    <div>Home</div>
                    <div><i className='pi pi-angle-down'></i></div>
                </li>
                <li className='px-7 flex '>
                    <div>Shop</div>
                    <div><i className='pi pi-angle-down'></i></div>
                </li>
                <li className='px-7 flex '>
                    <div>Product</div>
                    <div><i className='pi pi-angle-down'></i></div>
                </li>
                <li className='px-7 flex '>
                    <div>Features</div>
                    <div><i className='pi pi-angle-down'></i></div>
                </li>
                <li className='px-7 flex '>
                    <div>Pages</div>
                    <div><i className='pi pi-angle-down'></i></div>
                </li>
                <li className='px-7 flex '>
                    <div>Blogs</div>
                    <div><i className='pi pi-angle-down'></i></div>
                </li>
            </ul>
        </div>
    </div>
  )
}
