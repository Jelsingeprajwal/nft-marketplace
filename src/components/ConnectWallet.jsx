import React from "react";
import { Footer } from "../components";
import { Coinbase, Metamask, WalletConnect, connectWalletBg } from '../assets/index'
function ConnectWallet() {
    return (
        <section>
            <div className="flex flex-col md:flex-row md:gap-10 lg:gap-[60px] mb-[40px] md:mb-0 md:min-h-[615px]  ">
                <div>
                    <img
                        src={connectWalletBg}
                        alt=""
                        className={" h-[232px] w-full md:w-[397px] lg:w-[50vw] md:h-full object-cover align-super"}
                    />
                </div>
                <div className="mx-[30px] md:mx-0 mt-[30px] lg:my-[100px]  text-white font-workSans w-[325px] md:w-fit lg:w-[460px] flex flex-col gap-[30px] items-center md:items-start">
                    <div className=" flex flex-col gap-[20px]">
                        <h1 className="text-[38px] lg:text-[51px] leading-[120%] lg:leading-[110%] font-semibold">
                            Connect wallet
                        </h1>
                        <p className="leading-[140%] font-normal lg:text-[22px]">
                            Choose a wallet you want to connect. There are several wallet providers.
                        </p>
                    </div>
                    <div className=" flex flex-col items-center  gap-4">
                        <div className="flex flex-col w-[315px]  items-center  gap-4 ">
                            <div className="flex justify-start items-center pl-10 gap-5 w-[315px] h-[60px] border border-cta rounded-[20px] bg-gray">
                                <img src={Metamask} alt="" className="w-[32px] h-[32px]" />
                                <h5 className="text-[22px] font-semibold leading-[140%]">Metamask</h5>
                            </div>
                            <div className="flex justify-start items-center pl-10 gap-5 w-[315px] h-[60px] border border-cta rounded-[20px] bg-gray">
                                <img src={WalletConnect} alt="" className="w-[32px] h-[32px]" />
                                <h5 className="text-[22px] font-semibold leading-[140%]">Wallet Connect</h5>
                            </div>
                            <div className="flex justify-start items-center pl-10 gap-5 w-[315px] h-[60px] border border-cta rounded-[20px] bg-gray">
                                <img src={Coinbase} alt="" className="w-[32px] h-[32px]" />
                                <h5 className="text-[22px] font-semibold leading-[140%]">Coinbase</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default ConnectWallet