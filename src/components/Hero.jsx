import React from "react";
import { avatar14, RocketLaunch, heroImageBg } from "../assets/index";
import Button from "./Button";

function Hero() {
  return (
    <section className=" md:px-[72px] lg:px-[115px] md:py-[80px] py-[40px] px-[30px] bg-bgPrimary text-white max-w-[1280px] lg:mx-auto">
      <div className="grid md:grid-cols-2   gap-[30px] leading-[74px] ">
        {/* Left Section */}
        <div className="md:w-[330px] lg:w-[510px]  font-workSans">
          <h1 className="md:text-[38px] md:leading-[120%] lg:text-[67px] text-[28px] leading-[140%] capitalize font-semibold">
            Discover <br className="hidden md:hidden " />
            digital art & Collect NFTs
          </h1>
          {/* <br /> */}
          <p className=" leading-[22px] md:leading-[35px]  text-[16px] md:text-[16px] lg:text-[22px] text-gray-200">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          {/* Mobile View Right Section */}
          <div className=" md:hidden mt-[40px] w-[315px] h-[315px] bg-gray  rounded-[20px] ">
            <div className="">
              <img
                className="h-[206px] w-full object-cover rounded-t-[20px]"
                src={heroImageBg}
                alt="hero Image"
              />
            </div>
            <div className="flex flex-col items-start justify-center leading-[31px] gap-[10px] bg-gray rounded-b-[20px] pb-5 text-white px-[20px] font-workSans">
              <span className="font-bold text-[22px] mt-[22px]">
                Space Walking
              </span>
              <span className="flex gap-[12px] justify-center items-center">
                <img
                  src={avatar14}
                  className={"w-[24px] h-[24px]"}
                  alt="avatar14"
                />
                <span className="">Animakid</span>
              </span>
            </div>
          </div>
          {/*  */}
          <Button
            icon={RocketLaunch}
            class={"md:w-[224px] w-[315px] mt-[40px] md:mt-[30px] "}
            text="Get Started"
            to={"create-account"}
          />
          <div className=" md:w-[330px] w-[315px] lg:w-[510px] md:h-[57px] lg:h-[77px] mt-[30px]">
            <ul className="flex  justify-between items-start font-spaceMono ">
              <li className="lg:leading-[39px] md:leading-[35px] leading-[35px] ">
                <p className="md:text-[22px] lg:text-[28px] font-bold">240k+</p>
                <span>Total sale</span>
              </li>
              <li className="lg:leading-[39px] md:leading-[35px] leading-[35px] ">
                <p className="md:text-[22px] lg:text-[28px] font-bold">100k+</p>
                <span>Auctions</span>
              </li>
              <li className="lg:leading-[39px] md:leading-[35px] leading-[35px]">
                <p className="md:text-[22px] lg:text-[28px] font-bold">240+</p>
                <span>Artists</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:block md:w-[330px] lg:w-[510px]  md:h-[330px] lg:h-[330px] bg-gray  rounded-[20px] ">
          <div className="">
            <img
              className="md:h-[221px] lg:h-[401px] md:w-[330px] lg:w-[510px] rounded-t-[20px]"
              src={heroImageBg}
              alt="hero Image"
            />
          </div>
          <div className="flex flex-col items-start justify-center leading-[31px] gap-[10px] bg-gray rounded-b-[20px] pb-5 text-white px-[20px] font-workSans">
            <span className="font-bold text-[22px] mt-[22px]">
              Space Walking
            </span>
            <span className="flex gap-[12px] justify-center items-center">
              <img
                src={avatar14}
                className={"w-[24px] h-[24px]"}
                alt="avatar14"
              />
              <span className="">Animakid</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
