import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import X from '@/app/assets/X.png'
import hamburger from '@/app/assets/hamburgermenu.png'
import Logo from '@/app/assets/Logo.png'
import searchIcon from '@/app/assets/searchIcon.png'
import Cart from '@/app/assets/cartIcon.png'
import profile from '@/app/assets/profileIcon.png'
import dropdown from '@/app/assets/dropDownIcon.png'
const Navbar = () => {
  return (
    <>
  
   <nav className='relative'>
    <div className='bg-black  h-auto w-auto text-white md:h-[38px]'>
        <div className='flex justify-center items-center text-xs mx-auto md:mx-auto gap-4 text-'>
            <div className='text-center flex-grow py-[9px] md:flex-grow-0'>
                Sign up and get 20% off your first order. <Link href='/' className='underline'>Sign Up Now</Link>
            </div>
            {/* This div will only show on medium and larger screens */}
            <div className='cursor-pointer hidden md:block md:absolute md:right-[100px]'>
                <Image src={X} alt='X' />
            </div>
        </div>
    </div>

        {/* small device screen Navbar */}
    <div className='flex justify-between h-[18px] my-5 mx-4 w-auto bg-white md:hidden'>
        <div className='flex gap-4 items-center'>
            <Image src={hamburger} alt='hamburger' className='w-[24px] h-[24px]'/>
            <Image src={Logo} alt='Logo' className='w-[126px] h-[18px]' />
        </div>

        <div className='flex gap-[12px] md:hidden'>
            <Image src={searchIcon} alt='SearchIcon' className='w-[24px] h-[24px]'/>
            <Image src={Cart} alt='SearchIcon' className='w-[24px] h-[24px]'/>
            <Image src={profile} alt='SearchIcon' className='w-[24px] h-[24px]'/>
        </div>
    </div>

    {/* Large device Navbar */}

    <div className='justify-center items-center h-[96px] hidden bg-white z-20 md:flex ' >
        <div className='flex justify-between items-center mx-[100px]  h-[48px] w-full '>
            <Image src={Logo} alt='Logo' className='w-[160px] h-[22px] font-bold text-[32px] hover:'/>
            <ul className='flex gap-[40px] font-normal text-[16px] leading-[21.6px] cursor-pointer'>
                <li className='flex justify-between cursor-pointer '>Shop <span className='flex items-center'><Image src={dropdown} alt='dropdown' className='h-[6.5px] w-[11.5px] py-auto'/></span></li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
            <div className='flex items-center pl-[17.86px] text-[#000000] text-opacity-40 w-[377px] h-[48px] rounded-full bg-[#F0F0F0]'>
                <Image src={searchIcon} alt='Logo' className='w-[24px] h-[24px] flex items-center opacity-40'/>
                <input type="text" placeholder='Search for products...' className='flex items-center bg-transparent w-[300px] h-[22px] pl-[17.86px] text-[#000000] text-opacity-40'/>
            </div>

            <div className='flex justify-between gap-[14px] cursor-pointer '>
                <Image src={Cart} alt='cart' className='w-[20.25px] h-[20.25px] hover:opacity-50'/>
                <Image src={profile} alt='cart' className='w-[20.25px] h-[20.25px] hover:opacity-50'/>
            </div>
        </div>
    </div>
</nav>


    </>
  )
}
export default Navbar
