import React from "react";
import Image from "next/image";
import findCloth from '@/app/assets/FIND CLOTHES THAT MATCHES YOUR STYLE.png';
import models from '@/app/assets/heroImage.png';
import star from '@/app/assets/starLarge.png';
import "../css/satoshi.css";
const Hero = () => {
  return (
    <>
      <div className=" flex flex-col justify-between items-center bg-[#F2F0F1] mx-auto h-[853px] md:flex-row md:h-[663px] md:px-[100px]">
        <div className="mt-[40px] pl-[16px] md:mt-[103px] md:pl-[30px] md:w-1/2">
            {/* <Image src={findCloth} alt="find clothes" className="w-[315px] h-[93px] md:w-[577px] md:h-[173px]"/> */}
           <h1 className="w-[315px] h-[93px] font-bold text-[36px] md:w-[577px] md:h-[173px] md:text-[54px] md:leading-[64px]" style={{fontFamily:"integral"}}>Find clothes that matches your style</h1>

           <div>
            <p className="w-[358px] h-[50px] mt-[70px] md:w-[510px] Md:h-[33px] md:font-normal md:text-[15px] md:leading-[22px] md:pt-[32px]" style={{fontFamily:"Satoshi-Light"}}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

           </div>
            <div>
            <button className="w-[358px] h-[52px] rounded-full mt-[48px]  bg-black text-white md:w-[210px]">Shop now</button>

            </div>

            <div className="flex flex-wrap mx-[56px] w-[278px] justify-center items-center mt-[24px] md:w-[596px] md:flex-row md:justify-start md:mx-0 md:mb-[116px]">
                <div className="flex flex-col w-[106px] h-[48px]">
                    <h1 className="font-bold text-3xl" style={{fontFamily:"Satoshi-Regular"}}>200+</h1>
                    <p className="opacity-60 text-[10px]" style={{fontFamily:"Satoshi-Regular"}}>International Brands</p>
                </div>
                <span className="w-0.5 h-[52px] flex justify-center items-center bg-black opacity-10 mx-4">.</span>
                <div className="flex flex-col w-[117px] h-[48px]">
                    <h1 className="font-bold text-3xl" style={{fontFamily:"Satoshi-Regular"}}>2000+</h1>
                    <p className="opacity-60 text-[10px]" style={{fontFamily:"Satoshi-Regular"}}>High-Quality Products</p>
                </div>
                <div className="w-0.5 h-[52px] bg-black opacity-10 mx-4 hidden md:block">.</div>
                <div className="flex flex-col w-[117px] h-[48px]">
                    <h1 className="font-bold text-3xl" style={{fontFamily:"Satoshi-Regular"}}>30,000+</h1>
                    <p className="opacity-60 text-[10px]" style={{fontFamily:"Satoshi-Regular"}}>Happy Customers</p>
                </div>
            </div>
        </div>
        <div className="flex relative justify-center items-center h-[448px] md:h-[663px] md:w-1/2">
        <div >
        <Image 
            src={models} 
            alt="HeroImage" 
            className="h-[448px] w-full object-cover md:h-[663px] md:w-[530px] "
        />
    </div>
    <div>
        <Image src={star} alt="star" className="absolute h-[76px] w-[76px] top-[40px] right-[40px] animate-pulse md:top-[100px] md:right-[60px] md:h-[106px] md:w-[106px]"/>
        <Image src={star} alt="star" className="absolute h-[44px] w-[44px] top-[136px] left-[27px] animate-pulse  md:top-[297px] md:left-[10px] md:h-[56px] md:w-[56px]"/>
    </div>
        </div>
      </div>
     
    </>
  );
};
export default Hero;
