import React from 'react'

export default function Subsrcibe() {
  return (
    <div className='bg-gray-100'>
        <div className='py-5 flex flex-col justify-center items-center  '>
            <div className='uppercase text-center mb-[10px] font-medium text-[16px] lg:text-lg'>know it all first </div>
            <form className='shadow'>
                <input type='email' name='email' id='subscribe' placeholder='Enter your email' className='bg-white p-3'/>
                <button type='submit' className='uppercase text-white bg-[#ff4c3b] px-4 py-3 '>subscribe</button>
            </form>
        </div>
        <div className='p-3'>
            <div className='flex justify-between  m-auto border-b-2 border-b-gray-200 border-t-2 pt-[30px] border-t-gray-200 '>
                <h4 className="uppercase mb-2  text-base font-medium">about</h4>
                <div>
                    <i className='pi pi-angle-down'></i>
                </div>
            </div>
            <div className='py-5'>
                <div>
                    <img src='./logo/logo.png'/>
                </div>
                <p className='text-wrap pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>
            <ul className='flex gap-5  text-xl'>
                <li>
                    <i className='pi pi-facebook'></i>
                </li>
                <li>
                    <i className='pi pi-google'></i>
                </li>
                <li>
                    <i className='pi pi-twitter'></i>
                </li>
                <li>
                    <i className='pi pi-instagram'></i>
                </li>
                <li>
                    <i className='pi pi-wifi'></i>
                </li>
            </ul>
            <div>
                <div className='flex justify-between  m-auto border-b-2 border-b-gray-200 border-t-2 pt-[10px] border-t-gray-200 '>
                    <h4 className="uppercase mb-2  text-base font-medium">my account</h4>
                    <div>
                        <i className='pi pi-angle-down'></i>
                    </div>
                </div>
                <div className=''>
                    <ul className='text-xl text-[#777777]'>
                    <li>Womens</li>
                    <li>Clothing</li>
                    <li>Accessories</li>
                    <li>Featured</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='flex justify-between  m-auto border-b-2 border-b-gray-200 border-t-2 pt-[10px] border-t-gray-200 '>
                    <h4 className="uppercase mb-2  text-base font-medium">why we choose</h4>
                    <div>
                        <i className='pi pi-angle-down'></i>
                    </div>
                </div>
                <div className=''>
                    <ul className='text-xl text-[#777777] capitalize'>
                    <li>shipping & return</li>
                    <li>secure shopping</li>
                    <li>gallery</li>
                    <li>affilates</li>
                    <li>contacts</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className='flex justify-between  m-auto border-b-2 border-b-gray-200 border-t-2 pt-[10px] border-t-gray-200 '>
                    <h4 className="uppercase mb-2  text-base font-medium">store information</h4>
                    <div>
                        <i className='pi pi-angle-down'></i>
                    </div>
                </div>
                <div className=''>
                    <ul className='text-sm text-[#777777] capitalize py-3'>
                        <li className=''><i className='pi pi-map-marker'></i>  multikart demo store india 345-659</li>
                        <li><i className='pi pi-phone'></i>  call us: 123-456-7898</li>
                        <li><i className='pi pi-envelope'></i>  email us: support@Fiot.Com</li>
                        <li>   fax:123456</li>
                    </ul>
                </div>
            </div>
            
        </div>
        
    </div>
    
  )
}
