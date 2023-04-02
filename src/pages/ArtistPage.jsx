import React from "react";
import {
    Copy,
    DiscordLogo,
    InstagramLogo,
    Plus,
    TwitterLogo,
    YoutubeLogo,
    artistPageBg,
    avatar14,
    avatar10,
    avatar16,
    avatar20,
    image16,
    image21,
    image4,
    image24,
    image25,
    image26,
} from "../assets";

import '../App.css'
import { Footer, NFTCard } from "../components";
import { Link } from "react-router-dom";
function ArtistPage() {
    return (
        <section className="  bg-bgPrimary text-white  ">
            <div className="h-[300px]">
                <div
                    style={{
                        backgroundImage: `url(${artistPageBg})`,
                    }}
                    className="w-full  h-[250px] bg-cover bg-center relative"
                >
                    <div className=" w-[120px] h-[120px] absolute bottom-[-25%] pb-[60px] left-[50%] md:left-0 translate-x-[-50%] md:translate-x-0 md:ml-[72px] lg:ml-[115px]">
                        <img src={avatar14} className="" alt="" />
                    </div>
                </div>
            </div>
            <div className=" md:px-[72px] lg:px-[115px]  py-[30px] px-[30px] bg-bgPrimary text-white max-w-[1280px] lg:mx-auto">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                        <h1 className="capitalize text-[28px] md:text-[38px] lg:text-[51px]  leading-[140%] md:leading-[120%]  font-semibold">
                            animakid
                        </h1>
                        <div className="flex flex-col md:flex-row gap-5">
                            <button className="w-[315px] md:w-[186px] rounded-[20px] flex justify-center items-center gap-[12px] bg-cta text-white py-[19px] px-[50px]">
                                <img src={Copy} alt="Copy" />
                                0xc0E3...B79C
                            </button>
                            <button className="w-[315px] md:w-[145px] rounded-[20px] flex justify-center items-center gap-[12px]  border-cta border-4 text-white py-[19px] px-[50px]">
                                <img src={Plus} alt="" />
                                Follow
                            </button>
                        </div>
                    </div>
                    <div className=" md:w-[510px] w-[315px] lg:w-[510px] md:h-[57px] lg:h-[77px]">
                        <ul className="flex  justify-between items-start  ">
                            <li className="lg:leading-[39px] md:leading-[35px] leading-[35px] ">
                                <p className="md:text-[22px] lg:text-[28px] font-bold font-spaceMono">240k+</p>
                                <span className="font-workSans">Volume</span>
                            </li>
                            <li className="lg:leading-[39px] md:leading-[35px] leading-[35px] ">
                                <p className="md:text-[22px] lg:text-[28px] font-bold font-spaceMono">50k+</p>
                                <span className="font-workSans">NFTs Sold</span>
                            </li>
                            <li className="lg:leading-[39px] md:leading-[35px] leading-[35px]">
                                <p className="md:text-[22px] lg:text-[28px] font-bold font-spaceMono">3000+</p>
                                <span className="font-workSans">Followers</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-[#858584] leading-[140%]">Bio</h5>

                        <p>The internet's friendliest designer kid.</p>
                    </div>
                    <div className="text-[#858584] fill-[#858584]">
                        <h5 className="">Links</h5>
                        <div className="flex flex-col  ">

                            <ul className="flex w-[158px] justify-between mt-[15px]">
                                <li>
                                    <img src={DiscordLogo} alt="" />
                                </li>
                                <li>
                                    <img src={InstagramLogo} alt="" />
                                </li>
                                <li>
                                    <img src={YoutubeLogo} alt="" />
                                </li>
                                <li>
                                    <img src={TwitterLogo} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full md:px-[72px] lg:px-[115px]  py-[10px] px-[30px] border-t border-t-gray-600 font-semibold">
                    <div className="h-[60px] flex flex-row justify-between items-center ">
                        <div className="relative  w-[105px] md:w-[350px] flex justify-center link">
                            <a href="#" className=" px-[21px] py-[19px] " >Created</a>
                        </div><div className="relative  w-[105px] md:w-[350px] flex justify-center">
                            <a href="#" className=" px-[21px] py-[19px] opacity-60" >Collection</a>
                        </div><div className="relative  w-[105px] md:w-[350px] flex justify-center">
                            <a href="#" className=" px-[21px] py-[19px] opacity-60" >Owned</a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:px-[72px] lg:px-[115px]  py-[30px] px-[30px] bg-gray md:py-[80px]
                border-b
          "
            >
                <Link to={'/nftpage'}>
                    <NFTCard
                        title={"Distant Gallaxy"}
                        artistName={"MoonDancer"}
                        avatar={avatar16}
                        image={image16}
                        className={"bg-bgPrimary"}
                    />
                </Link>
                <Link to={'/nftpage'}>
                    <NFTCard
                        title={"Life on Edena"}
                        artistName={"NebulaKid"}
                        avatar={avatar10}
                        image={image21}
                        className={"bg-bgPrimary"}
                    />
                </Link>
                <Link to={'/nftpage'}>
                    <NFTCard
                        title={"AstroFiction"}
                        artistName={"Spaceone"}
                        avatar={avatar20}
                        image={image4}
                        className={"bg-bgPrimary"}
                    />
                </Link>
                <Link to={'/nftpage'}>
                    <NFTCard
                        title={"AstroFiction"}
                        artistName={"Spaceone"}
                        avatar={avatar20}
                        image={image24} ssss
                        className={"bg-bgPrimary"}
                    />
                </Link>
                <Link to={'/nftpage'}>
                    <NFTCard
                        title={"AstroFiction"}
                        artistName={"Spaceone"}
                        avatar={avatar20}
                        image={image25}
                        className={"bg-bgPrimary"}
                    />
                </Link>
                <Link to={'/nftpage'}>
                    <NFTCard
                        title={"AstroFiction"}
                        artistName={"Spaceone"}
                        avatar={avatar20}
                        image={image26}
                        className={"bg-bgPrimary"}
                    />
                </Link>
            </div>
            <Footer />
        </section>
    );
}

export default ArtistPage;
