import React from 'react'
import '@/app/css/satoshi.css'
import Image from 'next/image'
import emailIcone from '@/app/assets/emailIcon.png'
import logo from '@/app/assets/Logo.png'
import tw from '@/app/assets/twiter.png'
import fb from '@/app/assets/fb.png'
import ig from '@/app/assets/ig.png'
import gh from '@/app/assets/gh.png'
import visa from '@/app/assets/visa.png'
import master from '@/app/assets/master.png'
import paypal from '@/app/assets/paypal.png'
import applepay from '@/app/assets/applepay.png'
import gpay from '@/app/assets/gpay.png'

const Footer = () => {
  return (
    <>
     
      <div className='bg-[#F0F0F0] h-[850px] md:h-[499px] md:flex flex-col justify-center relative'>
      <div className='absolute top-[-150px] md:top-[-90px] flex flex-col justify-start items-center bg-[#000000] mx-4 h-[293px] w-[358px] rounded-[16px] gap-16 md:flex-row md:h-[180px] md:w-[1060px] md:mx-[100px]'>
        <h1 style={{fontFamily:"integral"}} className='w-[327px] h-[105px] leading-[35px] font-bold text-white text-[28px] pl-[24px] pt-[32px] md:w-[551px] md:h-[94px] md:text-[38px] md:leading-[45px] md:ml-[34px] md:pt-[0px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <div className='flex flex-col justify-between items-center gap-4'>
        <div className='flex flex-row gap-4 justify-start items-center pl-4 w-[311px] h-[42px] rounded-full border-2 bg-[#ffffff] md:w-[349px] md:h-[48px]'>
        <Image src={emailIcone} alt='email' className='w-5 h-5'/>
        <input type="text" placeholder='Enter your email address' />
        </div>
        <button className='flex flex-row gap-4 text-center justify-center font-medium text-[16px] items-center pl-4 w-[311px] h-[42px] rounded-full border-2 bg-[#ffffff] md:w-[349px] md:h-[48px]'>Subscribe to Newsletter
        </button>
      </div>
      </div>
      <footer className='mt-[200px] md:mt-[50px] flex flex-col  gap-16 pl-[17px] md:flex-row md:justify-center md:px-[100px]'>
            <div className='flex flex-col justify-start mt-[170px] md:mt-0'>
                <Image src={logo} alt='logo' className='w-[144px] h-[20px] md:h-[23px] md:w-[167px]'/>
                <p className='w-[357px] h-[40px] mt-[17px] md:mt-[25px] font-normal text-[14px] leading-[20px] opacity-60 md:w-[252px] md:h-[66px] md:text-[14px] md:leading-[22px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex flex-row gap-4 items-center mt-5 md:mt-[35px]'>
                    <Image src={tw} alt='twitter' className='w-[28px] h-[28px]'/>
                    <Image src={fb} alt='twitter' className='w-[28px] h-[28px]'/>
                    <Image src={ig} alt='twitter' className='w-[28px] h-[28px]'/>
                    <Image src={gh} alt='twitter' className='w-[28px] h-[28px]'/>
                </div>
               </div>

            <div className='grid grid-cols-2 gap-4 justify-between pl-[17px] md:pl[113px] md:flex md:flex-row md:justify-between md:gap-[90px] '>
                <div style={{fontFamily:"Satoshi-regular"}} className='flex flex-col gap-4 mt-'>
                        <h1 className='font-semibold text-[14px] leading-[18px] tracking-[0.09em]'>COMPANY</h1>
                        <ul className='flex flex-col gap-4 text-[14px]'>
                        <li>About</li>
                        <li>Fetures</li>
                        <li>Works</li>
                        <li>Career</li>
                        </ul>
                    </div>

                    <div style={{fontFamily:"Satoshi-regular"}} className='flex flex-col gap-4 mt-'>
                        <h1 className='font-semibold text-[14px] leading-[18px] tracking-[0.09em]'>HELP</h1>
                        <ul className='flex flex-col gap-4 text-[14px]'>
                        <li>Customer Support</li>
                        <li>Fetures</li>
                        <li>Works</li>
                        <li>Career</li>
                        </ul>
                    </div>

                    <div style={{fontFamily:"Satoshi-regular"}} className='flex flex-col gap-4 mt-'>
                        <h1 className='font-semibold text-[14px] leading-[18px] tracking-[0.09em]'>FAQ</h1>
                        <ul className='flex flex-col gap-4 text-[14px]'>
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Orders</li>
                        <li>Payment</li>
                        </ul>
                    </div>

                    <div style={{fontFamily:"Satoshi-regular"}} className='flex flex-col gap-4 mt-'>
                        <h1 className='font-semibold text-[14px] leading-[18px] tracking-[0.09em]'>RESOURCES</h1>
                        <ul className='flex flex-col gap-4 text-[14px]'>
                        <li>Free eBook</li>
                        <li>Development Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
               
        </footer>
        <hr className='mx-[16px] mt-[40px] md:mt-[50px] md:mx-[100px] h-[2px] bg-black opacity-30 flex justify-center'/>
                <div className='flex flex-col gap-4 items-center mt-4 mx-4 md:mx-[100px] md:mt-[25px] md:flex-row justify-between'>
                    <p className='opacity-60'>© 2000-2021, All rights reserved</p>
                    <div className='flex flex-row justify-between md:gap-[12px]'>
                        <Image src={visa} alt='visa' className='w-[45.96px] h-[30.74px] md:w-[56.61px] md:h-[40.03px]'/>
                        <Image src={master} alt='visa' className='w-[45.96px] h-[30.74px] md:w-[56.61px] md:h-[40.03px]'/>
                        <Image src={paypal} alt='visa' className='w-[45.96px] h-[30.74px] md:w-[56.61px] md:h-[40.03px]'/>
                        <Image src={applepay} alt='visa' className='w-[45.96px] h-[30.74px] md:w-[56.61px] md:h-[40.03px]'/>
                        <Image src={gpay} alt='visa' className='w-[45.96px] h-[30.74px] md:w-[56.61px] md:h-[40.03px]'/>
                    </div>
                </div>
      </div>
      
      

     
    </>
  )
}

export default Footer;
