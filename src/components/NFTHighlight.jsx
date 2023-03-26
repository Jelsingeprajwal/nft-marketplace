import React from "react";
import { avatar7, Eye, NFTHighlight as bg } from "../assets";
import Button from "./Button";
function NFTHighlight() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="md:px-[72px] lg:px-[115px] md:py-[50px] lg:py-[80px] bg-bgPrimary text-white font-workSans 
      h-[640px] relative  bg-center bg-cover"
    >
      <div className="z-50 h-[220px]   flex gap-[30px] items-end justify-between absolute bottom-[60px]  left-[115px] right-[115px]">
        <div className="flex flex-col   gap-[30px]">
          <div className="flex gap-[12px] w-fit px-[20px] py-[10px] rounded-[20px] bg-bgPrimary">
            <img src={avatar7} className="w-[24px] h-[24px]" alt="" />
            <span className="">Shroomi</span>
          </div>
          <h1 className="md:text-[38px] lg:text-[51px] leading-[110%]">
            Magic Mushroom
          </h1>
          <Button
            icon={Eye}
            class="bg-white text-black  w-[198px] "
            text="See NFT"
          />
        </div>
        <div>
          <div className="bg-[#3b3b3b7f] rounded-[20px] w-[295px] h-[144px] p-[30px]">
            <div>
              <span className="md:text-[12px]">Auction ends in:</span>
              <div className="text-[38px] font-spaceMono font-bold">
                <span>59</span>:<span>59</span>:<span>59</span>
              </div>
              <div className="text-xs">
                <span>Hours</span> <span className="ml-5">Minutes</span>{" "}
                <span className="ml-6">seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTHighlight;

// <div
//     style={{
//       background:
//         "linear-gradient(180deg, rgba(161, 89, 255, 0) , #A259FF )",
//     }}
//     className="absolute top-0 bottom-0 z-0  left-0 right-0"
//   ></div>
