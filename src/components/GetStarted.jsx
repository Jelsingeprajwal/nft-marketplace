import React from "react";
import { createCollection, setupWallet, startEarning } from "../assets";

function GetStarted() {
  return (
    <section className=" md:px-[72px] lg:px-[115px] md:py-[40px] lg:py-[80px] px-[30px] py-[40px] bg-bgPrimary text-white font-workSans max-w-[1280px] lg:mx-auto">
      <div className="flex flex-col gap-[10px] w-full ">
        <h4 className="text-[28px] leading-[140%]  md:text-[28px] lg:text-[38px] font-semibold md:leading-[140%] lg:leading-[120%]">
          How it works
        </h4>
        <p className="md:text-[16px] lg:text-[22px] leading-[140%] lg:leading-[160%]">
          Find out how to get started{" "}
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-[30px]
          mt-[48px]"
      >
        <div
          className="md:w-[210px] lg:w-[330px] md:h-[320px] lg:h-[439px]
           bg-gray text-center px-[30px] pb-[30px] rounded-[20px]
           
           "
        >
          <div>
            <img src={setupWallet} alt="setupWallet" />
          </div>
          <div className="flex flex-col gap-[10px] leading-[140%] mt-[20px]">
            <h1 className="md:text-[16px] lg:text-[22px] font-semibold">
              Setup Your wallet
            </h1>
            <p className="md:text-[12px] leading-[140%]">
              Set up your wallet of choice. Connect it to the Animarket by
              clicking the wallet icon in the top right corner.
            </p>
          </div>
        </div>

        <div>
          <div className="md:w-[210px] lg:w-[330px] md:h-[320px] lg:h-[439px] bg-gray text-center px-[30px] pb-[30px] rounded-[20px] ">
            <div>
              <img src={createCollection} alt="setupWallet" />
            </div>
            <div className="flex flex-col gap-[10px] leading-[140%] mt-[20px]">
              <h1 className="md:text-[16px] lg:text-[22px] font-semibold">
                Create Collection
              </h1>
              <p className="md:text-[12px] leading-[140%]">
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-[210px] lg:w-[330px] md:h-[320px] lg:h-[439px] bg-gray text-center px-[30px] pb-[30px] rounded-[20px] ">
            <div>
              <img src={startEarning} alt="setupWallet" />
            </div>
            <div className="flex flex-col gap-[10px] leading-[140%] mt-[20px]">
              <h1 className="md:text-[16px] lg:text-[22px] font-semibold">
                Start Earning
              </h1>
              <p className="md:text-[12px] leading-[140%] ">
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
