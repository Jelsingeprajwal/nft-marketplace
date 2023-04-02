import React from "react";
import { Link } from "react-router-dom";

function CollectionCard({ avatar, image1, image2, image3 }) {
  return (
    <div className="flex flex-col gap-[15px] w-[330px] rounded-[20px]">
      <Link to={'/nftpage'}>
        <img className="w-[330px] h-[330px]" src={image1} alt="image" />
      </Link>
      <div className="flex h-[100px] justify-between">
        <Link to={'/nftpage'}>

          <img src={image2} alt="" />
        </Link>
        <Link to={'/nftpage'}>
          <img src={image3} alt="" />
        </Link>
        <Link to={'/nftpage'} className="h-[100px] w-[100px] bg-cta rounded-[20px] flex justify-center items-center font-spaceMono">
          1025+
        </Link>
      </div>
      <div className="flex flex-col gap-[10px] ">
        <span className="font-semibold text-[22px] leading-[140%]">
          DSGN Animals
        </span>
        <div className="flex gap-[12px]">
          <Link to={"/artistpage"}>
            <img src={avatar} className={"w-[24px] h-[24px]"} alt="avatar" />
          </Link>
          <span className="leading-[140%] ">MrFox</span>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
