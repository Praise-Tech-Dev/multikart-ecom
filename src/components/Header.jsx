import React, { useEffect, useState } from 'react'
import img from '/h_icons/search.80230c5d.png'
import img_1 from '/h_icons/setting.c1961eae.png'
import img_2 from '/h_icons/cart.6f33eddb.png'
import { Link } from 'react-router-dom'
import { getCart } from '../utils/cart'

export default function Header() {

    const [countCart, setCountCart] = useState([])

    const updateCount = () => {
        setCountCart(getCart())

    }
    useEffect(()=>{
        updateCount()
    },[])

  return (
    <div>
        <div className='flex justify-between py-[30px] px-5 md:px-10 lg:px-50  '>
            <div className="flex">
                <div className='px-10 font-black  text-2xl'>
                    <i className='pi pi-bars'></i>
                </div>
                <Link to={'/'}><div className='h-6'>
                    <img src='/logo/logo.png' className='w-full h-full'/>
                </div></Link> 
                
            </div>
           

            <ul className='lg:flex uppercase hidden '>
                <Link to={'/'}>
                <li className='px-6 flex '>
                <div>Home</div>
                </li>
                </Link>
                
                <li className='px-6 flex '>
                    <a href='#shop'>Shop</a>
                </li>
                <li className='px-6 flex '>
                    <a href='#product'>Product</a>
                </li>
                <li className='px-6 flex ' >
                    <a href='#features'>Features</a>
                </li>
                {/* <li className='px-6 flex '>
                    <div>Pages</div>
                    <div><i className='pi pi-angle-down'></i></div>
                </li> */}
                <li className='px-6 flex '>
                    <a href='#blog'>Blogs</a>
                </li>
                <div className='flex items-center gap-2 px-6'>
                    <img src={img} className='cursor-pointer' alt="" />
                    <img src={img_1} className='cursor-pointer ' alt="" />
                    <div className="w-fit relative">
                        <Link to={'/cart'}> 
                            <img src={img_2} className='cursor-pointer ' alt="" />
                        </Link>
                        <p className=' bg-red-500 rounded-full py-0 px-1 absolute -top-1 -right-1 translate-x-1/2 -translate-y-1/2 text-white text-[10px]'>{countCart.length}</p>
                    </div>
                </div>
                
            </ul>
        </div>
    </div>
  )
}
