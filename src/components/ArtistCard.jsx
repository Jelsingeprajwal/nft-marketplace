import React from "react";

function ArtistCard({ avatar, id, artistName, sales }) {
  return (
    <div className="lg:w-[240px] lg:h-[238px] h-[100px] bg-gray rounded-[20px] flex md:flex-row gap-5 lg:gap-0   p-5 lg:p-0 lg:flex-col relative">
      <div className=" flex  justify-center  items-center">
        <img
          className="lg:mt-[20px] w-[60px] h-[60px] lg:w-[120px] lg:h-[120px]"
          src={avatar}
          alt="avatar"
        />
        <span className="w-[20px] h-[20px] absolute lg:top-[18px] lg:left-[20px] rounded-2xl bg-bgPrimary flex justify-center  items-center p-4 top-[13px] left-[12px] font-spaceMono">
          {id}
        </span>
      </div>
      <div className="  flex flex-col  gap-[5px] leading-[140%] lg:m-[20px]">
        <h5 className="md:text-left text-[22px] lg:text-center font-semibold leading-[140%] ">
          {artistName}
        </h5>
        <div className="text-[16px]">
          <span className="text-[#858584]">Total Sales: </span>
          <span className="font-spaceMono">{sales}</span>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
