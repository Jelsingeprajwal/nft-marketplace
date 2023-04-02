import React from "react";

function CollectionCard({ avatar, image1, image2, image3 }) {
  return (
    <div className="flex flex-col gap-[15px] w-[330px] rounded-[20px]">
      <div>
        <img className="w-[330px] h-[330px]" src={image1} alt="image" />
      </div>
      <div className="flex h-[100px] justify-between">
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <div className="h-[100px] w-[100px] bg-cta rounded-[20px] flex justify-center items-center font-spaceMono">
          1025+
        </div>
      </div>
      <div className="flex flex-col gap-[10px] ">
        <span className="font-semibold text-[22px] leading-[140%]">
          DSGN Animals
        </span>
        <div className="flex gap-[12px]">
          <img src={avatar} className={"w-[24px] h-[24px]"} alt="avatar" />
          <span className="leading-[140%] ">MrFox</span>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
