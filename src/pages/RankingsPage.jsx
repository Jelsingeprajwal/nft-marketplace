import React from 'react'
import { MagnifyingGlass } from '../assets'
import { Footer, RankingList } from '../components'

function RankingsPage() {
    return (
        <section>
            <div className='py-[40px] px-[30px] md:py-[60px] md:px-[77px] lg:py-[80px] lg:px-[115px] max-w-[1280px] lg:mx-auto text-white font-workSans'>
                <div className=' mb-[30px] md:mb-[40px] lg:mb-[80px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <h2 className='capitalize text-[28px] md:text-[38px] lg:text-[51px]  leading-[140%] md:leading-[120%]  font-semibold'>Top Creators</h2>
                        <p className='leading-[140%] lg:leading-[160%] font-normal lg:text-[22px]'>Check out top ranking NFT artists on the NFT Marketplace.</p>
                    </div>
                </div>
                <div className=" w-full font-semibold border-t  border-t-gray-600 px-[30px] md:px-[77px] lg:px-[115px]" >
                    <div className="h-[60px] flex flex-row justify-between items-center  max-w-[1280px] lg:mx-auto">
                        <div className="relative  w-[157px] md:w-[340px] lg:w-[525px] flex justify-center link">
                            <a href="#" className=" px-[21px] py-[19px]  text-[12px] md:text-base" >Today</a>
                        </div><div className="relative  w-[157px] md:w-[340px] lg:w-[525px] flex justify-center">
                            <a href="#" className=" px-[21px] py-[19px] opacity-60 text-[12px] md:text-base" >This Week</a>
                        </div>
                        <div className="relative  w-[157px] md:w-[340px] lg:w-[525px] flex justify-center ">
                            <a href="#" className=" px-[21px] py-[19px] opacity-60 text-[12px] md:text-base" >This Month</a>
                        </div><div className="relative  w-[157px] md:w-[340px] lg:w-[525px] flex justify-center">
                            <a href="#" className=" px-[21px] py-[19px] opacity-60 text-[12px] md:text-base" >All Time</a>
                        </div>
                    </div>
                </div>
                <RankingList />
            </div>
            <Footer />
        </section>
    )
}

export default RankingsPage