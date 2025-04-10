import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='flex justify-between py-[30px] px-30 '>
            <div className="flex">
                <div className='px-10 font-black  text-2xl'>
                    <i className='pi pi-bars'></i>
                </div>
                <div>
                    <img src='https://multikart-react-reactpixelstrap.vercel.app/assets/images/icon/logo.png'/>
                </div>
            </div>
           

            <ul className='uppercase flex '>
                <li className='px-10 flex gap-3'>
                    <div>Home</div>
                    <div><i class='pi pi-angle-down'></i></div>
                </li>
                <li className='px-10 flex gap-3'>
                    <div>Shop</div>
                    <div><i class='pi pi-angle-down'></i></div>
                </li>
                <li className='px-10 flex gap-3'>
                    <div>Product</div>
                    <div><i class='pi pi-angle-down'></i></div>
                </li>
                <li className='px-10 flex gap-3'>
                    <div>Features</div>
                    <div><i class='pi pi-angle-down'></i></div>
                </li>
                <li className='px-10 flex gap-3'>
                    <div>Pages</div>
                    <div><i class='pi pi-angle-down'></i></div>
                </li>
                <li className='px-10 flex gap-3'>
                    <div>Blogs</div>
                    <div><i class='pi pi-angle-down'></i></div>
                </li>
            </ul>
        </div>
    </div>
  )
}
