import React from "react";
import { ArrowRight, Globe, NFTPageBg, avatar1, avatar10, avatar16, avatar20, image16, image21, image24, image25, image26, image4 } from "../assets";
import { Button, Footer, NFTCard } from "../components";
import { Link } from "react-router-dom";

function NFTPage() {
  return <section className="bg-bgPrimary  text-white font-workSans">

    <div className="">
      <div
        style={{
          backgroundImage: `url(${NFTPageBg})`,
        }}
        className="w-full  h-[320px] md:h-[420px] lg:h-[560px] bg-cover bg-center "
      ></div>
      <div className="grid md:px-[72px] lg:px-[115px] md:py-[40px] lg:py-[80px] px-[30px] py-[40px] ">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-end w-full">
          <div className="w-full">
            <div className=" text-white">
              <h4 className="capitalize text-[28px] md:text-[38px] lg:text-[51px]  leading-[140%] md:leading-[120%]  font-semibold">The Orbitians</h4>
              <p className="leading-[140%] lg:leading-[160%] text-gray-500 font-normal lg:text-[22px]">Minted on Sep 30, 2022</p>
            </div>
            {/* mobile view componnent */}
            <div>
              <div className="bg-[#3b3b3b7f] rounded-[20px] w-[315px] md:w-[295px] h-[234px] px-[30px] pt-[30px] font-spaceMono md:hidden mt-[10px] ">
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
                <div className="my-[30px]">
                  <Button text="Place Bid"
                  />
                </div>
              </div>
            </div>
            <div className="mt-[20px]">
              <h4 className="leading-[140%] font-spaceMono text-gray-400">
                Created By
              </h4>
              <div className="flex gap-[12px] mt-[10px] ">
                <Link to={"/artistpage"}>
                  <img src={avatar1} className={"w-[24px] h-[24px]"} alt="avatar" />
                </Link>
                <span className="leading-[140%] ">Orbitian</span>
              </div>
            </div>
            <div className="mt-[20px]">
              <h4 className="leading-[140%] font-spaceMono text-gray-400">
                Description
              </h4>
              <div className=" mt-[10px]">
                <p>The Orbitians
                  is a collection of 10,000 unique NFTs on the Ethereum blockchain,
                  <br />
                  <br />
                  There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.
                  <br />
                  <br />
                  They live in a metal space machines, high up in the sky and only have one foot on Earth. <br />
                  These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>

              </div>
            </div>
            <div className="mt-[20px]">
              <h4 className="leading-[140%] font-spaceMono text-gray-400">
                Details
              </h4>
              <div className="flex gap-[12px] mt-[10px]">
                <div to={"/artistpage"}>
                  <img src={Globe} className={"w-[24px] h-[24px]"} alt="avatar" />
                </div>
                <span className="leading-[140%] ">View on Etherscan</span>
              </div>
              <div className="flex gap-[12px] mt-[10px]">
                <div to={"/artistpage"}>
                  <img src={Globe} className={"w-[24px] h-[24px]"} alt="avatar" />
                </div>
                <span className="leading-[140%] ">View Original</span>
              </div>
            </div>
            <div className="mt-[20px]">
              <h4 className="leading-[140%] font-spaceMono text-gray-400">
                Tags
              </h4>
              <div className="flex gap-[12px] flex-col mt-[10px]">
                <div className="uppercase w-fit rounded-[20px] bg-gray px-[30px] h-[46px] flex flex-col justify-center items-center font-semibold ">
                  Animation
                </div>
                <div className="uppercase w-fit rounded-[20px] bg-gray px-[30px] h-[46px] flex flex-col justify-center items-center font-semibold ">
                  Illustration
                </div>
                <div className="uppercase w-fit rounded-[20px] bg-gray px-[30px] h-[46px] flex flex-col justify-center items-center font-semibold ">
                  Moon
                </div>
                <div className="uppercase w-fit rounded-[20px] bg-gray px-[30px] h-[46px] flex flex-col justify-center items-center font-semibold ">
                  Moon
                </div>

              </div>
            </div>

          </div>
          <div className="flex justify-end">
            <div className="bg-[#3b3b3b7f] rounded-[20px] w-[315px] hidden md:block  h-[234px] px-[30px] pt-[30px] font-spaceMono  ">
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
              <div className="my-[30px]">
                <Button text="Place Bid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" md:py-[40px] lg:py-[80px]  py-[40px]">
          <div className="flex flex-col ">
            <div className="flex justify-between"> <h1 className="text-[28px] leading-[140%] lg:text-[38px] font-semibold md:leading-[160%] lg:leading-[120%]">More from this artist</h1>

              <Button
                icon={ArrowRight}
                text="Go to Artist Page"
                class={
                  "font-normal bg-transparent px-[50px] hidden md:flex border-cta border-2"
                }
              />

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]
                mt-[30px]"
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
              <Link to={'/nftpage'}>
                <NFTCard
                  title={"AstroFiction"}
                  artistName={"Spaceone"}
                  avatar={avatar20}

                  image={image24} ssss
                  className={"bg-gray"}
                />
              </Link>
              <Link to={'/nftpage'}>
                <NFTCard
                  title={"AstroFiction"}
                  artistName={"Spaceone"}
                  avatar={avatar20}
                  image={image25}
                  className={"bg-gray"}
                />
              </Link>
              <Link to={'/nftpage'}>
                <NFTCard
                  title={"AstroFiction"}
                  artistName={"Spaceone"}
                  avatar={avatar20}
                  image={image26}
                  className={"bg-gray"}
                />
              </Link>
            </div>

            <div>
              <Button
                text="Go to Artist Page"
                icon={ArrowRight}
                class={
                  "font-normal bg-transparent px-[50px] mt-[40px] w-full  md:hidden flex border-cta border-2"
                }
              />
            </div>
          </div>
        </div>
      </div>


    </div>
    <Footer />
  </section>;
}

export default NFTPage;
