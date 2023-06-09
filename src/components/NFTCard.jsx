import React from "react";
import { Link } from "react-router-dom";

function NFTCard({ title, artistName, image, avatar, className }) {
  return (
    <div className={"flex flex-col gap-[15px] w-full max-w-[315px] lg:max-w-[330px] md:w-[330px] h-[402px] md:h-[469px]  rounded-[20px] " + className}>
      <div>
        <img
          className="w-full md:w-[330px] h-[238px] md:h-[296px]"
          src={image}
          alt="image"
        />
      </div>
      <div className="flex flex-col gap-[25px]  h-[100px] justify-between ">
        <div className="mx-[30px] ">
          <span className="text-[22px] font-semibold leading-[140%]">
            {title}
          </span>
          <div className="flex gap-[12px] items-center">
            <img src={avatar} className="w-[20px] h-[20px]" alt="" />
            <span className="leading-[140%]">{artistName}</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between mx-[30px]">
            <div className="flex flex-col gap-2">
              <span className="text-xs leading-[110%] text-gray-400 font-spaceMono">
                Price
              </span>
              <span className="font-spaceMono">1.63 ETH</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs leading-[110%] text-gray-400 font-spaceMono">
                Highest Bid
              </span>
              <span className="font-spaceMono">0.33 wETH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
