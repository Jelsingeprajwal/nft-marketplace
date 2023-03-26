import React from "react";
import {
  DiscordLogo,
  InstagramLogo,
  Logo,
  TwitterLogo,
  YoutubeLogo,
} from "../assets";

function Footer() {
  return (
    <div className="md:px-[72px] lg:px-[115px] md:py-[50px] lg:py-[40px] bg-gray text-white font-workSans md:h-full lg:h-[334px] ">
      <div className="flex gap-8 md:flex-col lg:flex-row ">
        <div className="w-[327px]">
          <div className="flex w-[238px] flex-col gap-[30px]">
            <img src={Logo} alt="" />
            <div className="w-[238px] opacity-80">
              <p className="leading-[140%] ">
                NFT marketplace UI created with Anima for Figma.
              </p>
              <div className="flex flex-col mt-[20px]">
                <p>Join our community</p>
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

        <div className="w-[240px] flex flex-col gap-6 ">
          <h1 className="text-[22px] leading-[160%] font-bold">Explore</h1>
          <div className="flex flex-col gap-5 opacity-80">
            <span>Marketplace</span>
            <span>Ranking</span>
            <span>Connect a wallet</span>
          </div>
        </div>
        <div className="w-[420px] flex flex-col gap-6">
          <h1 className="text-[22px] leading-[160%] font-bold capitalize">
            Join our weekly digest
          </h1>
          <div className=" flex flex-col gap-5">
            <p className="leading-[140%] w-[330px] ">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="flex relative w-[420px] h-[60px]">
              <input
                type="text"
                placeholder="enter your email here"
                className="w-full p-5 rounded-[20px]"
              />
              <button
                type="button"
                className="absolute z-10 h-[60px] bg-cta rounded-[20px] w-[221px] right-0"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 opacity-80 flex flex-col md:mt-12 lg:mt-4  gap-5">
        <hr />
        <span className="text-xs ">
          &copy; NFT Market. Template by{" "}
          <a
            href="https://www.figma.com/@anima"
            className="font-semibold"
            target={"_blank"}
          >
            Anima
          </a>
          .
        </span>
      </div>
    </div>
  );
}

export default Footer;
