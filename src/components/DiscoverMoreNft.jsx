import React from "react";
import {
  avatar10,
  avatar16,
  avatar20,
  Eye,
  image16,
  image21,
  image4,
} from "../assets";
import Button from "./Button";
import NFTCard from "./NFTCard";
import { Link } from "react-router-dom";
function DiscoverMoreNft() {
  return (
    <div className="md:px-[72px] lg:px-[115px] md:py-[40px] lg:py-[80px] px-[30px] py-[40px] bg-bgPrimary text-white font-workSans max-w-[1280px] lg:mx-auto">
      <div className="flex w-full justify-between items-end">
        <div className="flex flex-col gap-[10]">
          <h4 className="font-semibold leading-[140%]  md:leading-[120%] text-[28px] lg:text-[38px] ">
            Discover More NFTs
          </h4>
          <span className="md:text-[16px] lg:text-[22px] leading-[140%] md:leading-[160%]">
            Explore new trending NFTs
          </span>
        </div>
        <div>
          <Button
            text="See all"
            icon={Eye}
            class={
              "font-normal bg-transparent px-[50px] gap-5 hidden md:flex   border-cta border-2"
            }
          />
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]
          mt-[40px] md:mt-[60px]
          "
      >
        <Link to={'/nftpage'}>
          <NFTCard
            title={"Distant Gallaxy"}
            artistName={"MoonDancer"}
            avatar={avatar16}
            image={image16}
            className={"bg-gray"}
          />
        </Link>
        <Link to={'/nftpage'}>
          <NFTCard
            title={"Life on Edena"}
            artistName={"NebulaKid"}
            avatar={avatar10}
            image={image21}
            className={"bg-gray"}
          />
        </Link>
        <Link to={'/nftpage'}>
          <NFTCard
            title={"AstroFiction"}
            artistName={"Spaceone"}
            avatar={avatar20}
            image={image4}
            className={"bg-gray"}
          />
        </Link>
      </div>
      <Button

        text="See all"
        icon={Eye}
        class={
          "font-normal bg-transparent px-[50px] gap-5 w-full md:hidden mt-[40px]   border-cta border-2"
        }
      />
    </div>
  );
}

export default DiscoverMoreNft;
