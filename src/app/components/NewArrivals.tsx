import React from "react";
import '../css/satoshi.css';
import Image from "next/image";
import Arrival1 from "@/app/assets/arrival1.png";
import Arrival2 from "@/app/assets/arrival2.png";
import Arrival3 from "@/app/assets/arrival3.png";
import Arrival4 from "@/app/assets/arrival4.png";
import rating1 from "@/app/assets/rating1.png";
import rating2 from "@/app/assets/rating2.png";
import rating3 from "@/app/assets/rating3.png";
import rating4 from "@/app/assets/rating4.png";
import rating5 from "@/app/assets/rating5.png";
import rating6 from "@/app/assets/rating6.png";
import rating7 from "@/app/assets/rating7.png";
import sell1 from "@/app/assets/sell1.png";
import sell2 from "@/app/assets/sell2.png";
import sell3 from "@/app/assets/sell3.png";
import sell4 from "@/app/assets/sell4.png";

const NewArrivals = () => {
  return (
    <>
      <div style={{fontFamily:"Satoshi"}}>
        <div className="flex justify-center items-center font-bold text-[32px] leading-[38.4px] w-[296px] h-[38px] pt-[50px] pb-[32px] mx-auto md:w-[403px] md:h-[58px] md:text-5xl md:leading-[57.6px] md:pt-[72px] md:pb-[55px]">
          
          <h1 style={{fontFamily:"integral"}}>NEW ARRIVALS</h1>
        </div>
      </div>
      <div>
        {/* New Arrivals */}
        <div className="grid grid-cols-2 justify-around items-center mx-[16px] gap-4 md:mx-[100px] md:gap-4 md:grid-cols-4">
          {/* Item 1 */}
          <div className="flex flex-col justify-start md:gap-1">
            <Image
              src={Arrival1}
              alt="arrival1"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[12px] leading-[21.6px] md:w-[225px] md:h-[27px]">
              T-SHIRT WITH TAPE DETAILS
            </h1>
            <Image
              src={rating1}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
            />
            <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
              $120
            </h1>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col justify-start md:gap-1">
            <Image
              src={Arrival2}
              alt="arrival1"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[12px] leading-[21.6px] md:w-[225px] md:h-[27px]">
              SKINNY FIT JEANS
            </h1>
            <Image
              src={rating2}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
            />
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $240
              </h1>
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] opacity-50 line-through md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $260
              </h1>
              <div className="h-[20px] w-[42px] bg-[#FF3333] bg-opacity-10 rounded-full flex justify-center items-center md:w-[58px] md:h-[28px]">
                <p className="text-[#FF3333] w-[26px] h-[14px] text-[10px] font-medium md:w-[32px] md:h-[16px] ">
                  -20%
                </p>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="md:flex flex-col justify-start md:gap-1 hidden">
            <Image
              src={Arrival3}
              alt="arrival1"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[12px] leading-[21.6px] md:w-[225px] md:h-[27px]">
              CHECKERED SHIRT
            </h1>
            <Image
              src={rating3}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
            />
            <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
              $180
            </h1>
          </div>
          {/* Item 4 */}
          <div className="hidden md:flex flex-col justify-start md:gap-1">
            <Image
              src={Arrival4}
              alt="arrival1"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[12px] leading-[21.6px] md:w-[225px] md:h-[27px]">
              SLEEVE STRIPED T-SHIRT
            </h1>
            <Image
              src={rating4}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
            />
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $130
              </h1>
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] opacity-50 line-through md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $160
              </h1>
              <div className="h-[20px] w-[42px] bg-[#FF3333] bg-opacity-10 rounded-full flex justify-center items-center md:w-[58px] md:h-[28px]">
                <p className="text-[#FF3333] w-[26px] h-[14px] text-[10px] font-medium md:w-[32px] md:h-[16px] ">
                  -30%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[24px] mx-4">
        <button className="w-[358px] h-[46px] rounded-full border-black border-[1px] border-opacity-10 hover:cursor-pointer hover:bg-blue-400 md:w-[218px] md:h-[52px]">
          View All
        </button>
      </div>

      <div className="my-[40px] mx-[16px]">
        <hr />
      </div>
      <div>
        <div>
          <div className="flex justify-center items-center font-bold text-[32px] leading-[38.4px] w-[296px] h-[38px]  pb-[32px] mx-auto md:w-[403px] md:h-[58px] md:text-5xl md:leading-[57.6px] md:pt-[72px] md:pb-[55px]">
            
            <h1 style={{fontFamily:"integral"}}>TOP SELLING</h1>
          </div>
        </div>

        {/* TOP SELLING */}
        <div className="grid grid-cols-2 justify-around items-center mx-[16px] gap-4 md:mx-[100px] md:gap-4 md:grid-cols-4">
          {/* Item 1 */}
          <div className="flex flex-col justify-start md:gap-1">
            <Image
              src={sell1}
              alt="arrival1"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[12px] leading-[21.6px] md:w-[225px] md:h-[27px]">
              VERTICAL STRIPED SHIRT
            </h1>
            <Image
              src={rating5}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
            />
            <div className="flex flex-row justify-start items-center gap-[5px]">
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $212
              </h1>
              <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] opacity-50 line-through md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
                $232
              </h1>
              <div className="h-[20px] w-[42px] bg-[#FF3333] bg-opacity-10 rounded-full flex justify-center items-center md:w-[58px] md:h-[28px]">
                <p className="text-[#FF3333] w-[26px] h-[14px] text-[10px] font-medium md:w-[32px] md:h-[16px] ">
                  -20%
                </p>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col justify-start md:gap-1">
            <Image
              src={sell2}
              alt="arrival1"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[12px] leading-[21.6px] md:w-[225px] md:h-[27px]">
              COURAGE GRAPHIC T-SHIRT
            </h1>
            <Image
              src={rating6}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
            />
            <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
              $145
            </h1>
          </div>
          {/* Item 3 */}
          <div className="hidden md:flex flex-col justify-start md:gap-1">
            <Image
              src={sell3}
              alt="arrival1"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[12px] leading-[21.6px] md:w-[225px] md:h-[27px]">
              LOOSE FIT BERMUDA SHORTS
            </h1>
            <Image
              src={rating7}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
            />
            <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px] ">
              $80
            </h1>
          </div>
          {/* Item 4 */}
          <div className="hidden md:flex flex-col justify-start md:gap-1">
            <Image
              src={sell4}
              alt="arrival1"
              className="w-[198px] h-[200.01px] rounded-[13.42] md:w-[295px] md:h-[298px]"
            />
            <h1 className="h-[22px] w-[180px] font-bold text-[12px] leading-[21.6px] md:w-[225px] md:h-[27px]">
              FADED SKINNY JEANS
            </h1>
            <Image
              src={rating1}
              alt="rating"
              className="w-[127px] h-[16px] md:w-[150px] md:h-[19px]"
            />
            <h1 className="w-[46px] h-[27px] font-bold text-[20px] leading-[27px] md:w-[55px] md:h-[32px] md:text-[24px] md:leading-[32.4px]" >
              $210
            </h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mt-[24px] mx-4'>
        <button className='w-[358px] h-[46px] rounded-full border-black border-[1px] border-opacity-10 hover:cursor-pointer hover:bg-blue-400 md:w-[218px] md:h-[52px]'>View All</button>
      </div>
    </>
  );
};

export default NewArrivals;
