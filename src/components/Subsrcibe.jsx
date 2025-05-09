import React from 'react'

export default function Subsrcibe() {
  return (
    <div className='bg-gray-100'>
        <div className='max-w-[1400px] m-auto'>
            <div className='py-5 flex flex-col lg:flex-row lg:justify-between justify-center items-center  lg:border-b-1 border-b-gray-300'>
                <div className='lg:border-r-1 border-r-gray-300 lg:w-[50%]'>
                    <div className='uppercase text-center mb-[10px] font-medium text-[16px] lg:text-lg'>know it all first </div>
                    <p className='invisible  lg:visible'>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                </div>
                
                <form className='shadow '>
                    <input type='email' name='email' id='subscribe' placeholder='Enter your email' className='bg-white p-3 mr-3'/>
                    <button type='submit' className='uppercase text-white bg-[#ff4c3b] px-4 py-3 '>subscribe</button>
                </form>
            </div>
        <div className='p-5 md:grid grid-cols-2 lg:flex lg: justify-between lg:px-3'>
            <div className='lg:w-[35%] md:w-full'>
                <div className='flex justify-between  m-auto border-b-2 border-b-gray-200 md:border-0 lg:border-0 border-t-2 pt-[30px] md:pt-0 lg:pt-0 border-t-gray-200 '>
                    <h4 className="uppercase mb-2  text-base font-medium md:hidden lg:hidden">about</h4>
                    <div className='md:hidden'>
                        <i className='pi pi-angle-down'></i>
                    </div>
                </div>
                <div className='py-5 '>
                    <div>
                        <img src='../../public/logo/logo.png'/>
                    </div>
                    <p className='text-wrap pt-5 text-sm/[2.5] text-[#777777]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <ul className='flex gap-7  text-xl pb-5'>
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
            </div>
            
            <div className='p-5 md:px-3 lg:px-3'>
                <div className='flex justify-between  m-auto border-b-2 border-b-gray-200  md:border-0 lg:border-0'>
                    <h4 className="uppercase mb-2 lg:mb-[25px]  text-base font-medium ">my account</h4>
                    <div className='hidden'>
                        <i className='pi pi-angle-down'></i>
                    </div>
                </div>
                <div className=''>
                    <ul className='lg:text-sm  text-[#777777]'>
                    <li className=' md:pt-[13px] lg:pt-[13px]'>Womens</li>
                    <li className=' md:pt-[13px] lg:pt-[13px]'>Clothing</li>
                    <li className=' md:pt-[13px] lg:pt-[13px]'>Accessories</li>
                    <li className=' md:pt-[13px] lg:pt-[13px]'>Featured</li>
                    </ul>
                </div>
            </div>
            <div className='p-5 lg:px-3'>
                <div className='flex justify-between  m-auto border-b-2 border-b-gray-200 md:border-0 lg:border-0 border-t-2 pt-[10px] lg:pt-0 border-t-gray-200 '>
                    <h4 className="uppercase mb-2  text-base font-medium">why we choose</h4>
                    <div className='md:hidden lg'>
                        <i className='pi pi-angle-down'></i>
                    </div>
                </div>
                <div className=''>
                    <ul className='text-xl lg:text-sm text-[#777777] capitalize'>
                    <li className='lg:px-3 lg:pt-[13px]'>shipping & return</li>
                    <li className='lg:px-3 lg:pt-[13px]'>secure shopping</li>
                    <li className='lg:px-3 lg:pt-[13px]'>gallery</li>
                    <li className='lg:px-3 lg:pt-[13px]'>affilates</li>
                    <li className='lg:px-3 lg:pt-[13px]'>contacts</li>
                    </ul>
                </div>
            </div>

            <div className='p-5 lg:px-3'>
                <div className='flex justify-between  m-auto border-b-2 border-b-gray-200 md:border-0 lg:border-0 pt-[10px] lg:pt-0'>
                    <h4 className="uppercase mb-2  text-base font-medium">store information</h4>
                    <div className='md:hidden lg:hidden'>
                        <i className='pi pi-angle-down'></i>
                    </div>
                </div>
                <div className=''>
                    <ul className='text-sm text-[#777777] capitalize py-3 '>
                        <li className='lg:pt-[14px]'><i className='pi pi-map-marker'></i>  multikart demo store india 345-659</li>
                        <li><i className='pi pi-phone lg:pt-[14px]'></i>  call us: 123-456-7898</li>
                        <li><i className='pi pi-envelope lg:pt-[14px]'></i>  email us: support@Fiot.Com</li>
                        <li className='lg:pt-[14px]'>   fax:123456</li>
                    </ul>
                </div>
            </div>
            
        </div>
        
    </div>
    </div>
    
    
  )
}
