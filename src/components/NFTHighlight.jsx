import React from "react";
import { avatar7, Eye, NFTHighlight as bg } from "../assets";
import Button from "./Button";
import { Link } from "react-router-dom";
function NFTHighlight() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="md:px-[72px] lg:px-[115px] md:py-[40px] lg:py-[80px] px-[30px] py-[40px] bg-bgPrimary text-white font-workSans 
      h-[640px] relative  bg-center bg-cover "
    >

      <div className="z-50 md:h-[220px]  flex md:flex-row flex-col max-w-[1280px] lg:mx-auto  gap-[30px] md:items-end justify-between absolute md:bottom-[60px] mt-[120px] md:mt-0   left-[30px] md:left-[115px] right-[115px] ">
        <div className="flex flex-col  gap-[30px] ">
          <Link to={"/artistpage"} className="flex gap-[12px] w-fit px-[20px] py-[10px] rounded-[20px] bg-bgPrimary">
            <img src={avatar7} className="w-[24px] h-[24px]" alt="" />
            <span className="">Shroomi</span>
          </Link>
          <h1 className="text-[28px] font-bold md:text-[38px] lg:text-[51px] leading-[110%]">
            Magic Mushrooms
          </h1>
          <Button
            icon={Eye}
            class="bg-white text-black  hidden md:flex w-[198px] "
            text="See NFT"
          />
        </div>
        <div>
          <div className="bg-[#3b3b3b7f] rounded-[20px] w-[315px] md:w-[295px] h-[144px] p-[30px] font-spaceMono ">
            <div>
              <span className="md:text-[12px]">Auction ends in:</span>
              <div className="text-[38px] gap-3 flex  font-bold">
                <span>59</span>:<span>59</span>:<span>59</span>
              </div>
              <div className="text-xs gap-8 flex">
                <span>Hours</span> <span className="ml-5">Minutes</span>{" "}
                <span className="ml-6">seconds</span>
              </div>
            </div>
          </div>
        </div>
        <Button
          icon={Eye}
          to={"/nftpage"}
          class="bg-white text-black   md:hidden w-[315px] "
          text="See NFT"
        />
      </div>
    </div>

  );
}

export default NFTHighlight;