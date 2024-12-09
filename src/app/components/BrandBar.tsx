import React from 'react'
import Image from 'next/image'
import brand1 from '@/app/assets/versace.png'
import brand2 from '@/app/assets/zara.png'
import brand3 from '@/app/assets/gucci.png'
import brand4 from '@/app/assets/prada.png'
import brand5 from '@/app/assets/calvin.png'
const BrandBar = () => {
  return (
    <div>
    <div className="flex bg-black h-[166px] w-full justify-center items-center md:h-[122px]">
    <div className="flex flex-wrap justify-center items-center pt-[70px] leading-4 gap-4 md:gap-[76px] md:flex-row md:justify-between md:pt-[10px]">
        <Image src={brand1} alt="brand1" className="w-[116.74px] h-[23.25px] md:w-[156.48px] md:h-[33.16px]" />
        <Image src={brand2} alt="brand2" className="w-[63.81px] h-[26.65px] md:w-[81px] md:h-[38px]" />
        <Image src={brand3} alt="brand3" className="w-[109.39px] h-[25.24px] md:w-[146px] md:h-[36px]" />
        <Image src={brand4} alt="brand4" className="w-[127px] h-[21px] md:w-[164px] md:h-[32px]" />
        <Image src={brand5} alt="brand5" className="w-[134.84px] h-[21.75px] md:w-[206.79px] md:h-[33.35px]" />
    </div>
</div>
</div>
  )
}

export default BrandBar
