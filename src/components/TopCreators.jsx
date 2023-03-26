import React, { useState } from "react";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  RocketLaunch,
} from "../assets";
import ArtistCard from "./ArtistCard";
import Button from "./Button";

function TopCreators() {
  const [artistDetails, setArtistDetails] = useState([
    {
      id: 1,
      artistName: "Keepitreal",
      avatar: avatar1,
    },
    {
      id: 2,
      artistName: "DigiLab",
      avatar: avatar2,
    },
    {
      id: 3,
      artistName: "GravityOne",
      avatar: avatar3,
    },
    {
      id: 4,
      artistName: "Juanie",
      avatar: avatar4,
    },
    {
      id: 5,
      artistName: "BlueWhale",
      avatar: avatar5,
    },
    {
      id: 6,
      artistName: "mr fox",
      avatar: avatar6,
    },
    {
      id: 7,
      artistName: "Shroomie",
      avatar: avatar7,
    },
    {
      id: 8,
      artistName: "robotica",
      avatar: avatar8,
    },
    {
      id: 9,
      artistName: "RustyRobot",
      avatar: avatar9,
    },
    {
      id: 10,
      artistName: "animakid",
      avatar: avatar10,
    },
    {
      id: 11,
      artistName: "Dotgu",
      avatar: avatar11,
    },
    {
      id: 12,
      artistName: "Ghiblier",
      avatar: avatar12,
    },
  ]);
  return (
    <section className="md:px-[72px] lg:px-[115px] md:py-[40px] lg:py-[80px] bg-bgPrimary text-white font-workSans">
      <div className="flex w-full justify-between items-end">
        <div className="flex flex-col gap-[10] md:w-[343px]">
          <h4 className="font-semibold md:leading-[140%] lg:leading-[120%] md:text-[28px] lg:text-[38px] ">
            Top creators
          </h4>
          <span className="md:text-[16px] lg:text-[22px] md:leading-[140%] lg:leading-[160%]">
            Checkout Top Rated Creators on the NFT Marketplace
          </span>
        </div>
        <div>
          <Button
            text="View Ranking"
            icon={RocketLaunch}
            class={"font-normal bg-transparent px-[50px] border-cta border-2"}
          />
        </div>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[60px]">
        {artistDetails.map((data, index) => (
          <ArtistCard
            key={index}
            id={data.id}
            artistName={data.artistName}
            avatar={data.avatar}
            sales="34.53 ETH"
          />
        ))}
      </div>
    </section>
  );
}

export default TopCreators;
