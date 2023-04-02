import React from 'react'
import { avatar1, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18, avatar19, avatar2, avatar20, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9 } from '../assets'

function RankingList() {
    const rankingData = [
        {
            avatar: avatar1,
            artistName: "Jaydon Ekstrom"
        },
        {
            avatar: avatar2,
            artistName: "Ruben Carder"
        },
        {
            avatar: avatar3,
            artistName: "Alfredo Septimus"
        },
        {
            avatar: avatar4,
            artistName: "Davis Franci"
        },
        {
            avatar: avatar5,
            artistName: "Livia Rosser"
        },
        {
            avatar: avatar6,
            artistName: "Kianna Donin"
        },
        {
            avatar: avatar7,
            artistName: "Phillip Lipshutz"
        },
        {
            avatar: avatar8,
            artistName: "Kianna Stanton"
        },
        {
            avatar: avatar9,
            artistName: "Angel Lubin"
        },
        {
            avatar: avatar10,
            artistName: "Maria Rosser"
        },
        {
            avatar: avatar11,
            artistName: "Allison Torff"
        },
        {
            avatar: avatar12,
            artistName: "Davis Workmann"
        },
        {
            avatar: avatar13,
            artistName: "Lindsey Lipshutz"
        },
        {
            avatar: avatar14,
            artistName: "Randy Carder"
        },
        {
            avatar: avatar15,
            artistName: "Lydia Culhane"
        },
        {
            avatar: avatar16,
            artistName: "Rayna Bator"
        },
        {
            avatar: avatar17,
            artistName: "Jocelyn Westervelt"
        },
        {
            avatar: avatar18,
            artistName: "Skylar Levin"
        },
        {
            avatar: avatar19,
            artistName: "Marilyn Torff"
        },
        {
            avatar: avatar20,
            artistName: "Terry Dorwart"
        },
    ]
    return (
        <div className='py-10 '>
            {/* table header */}
            <div className='flex justify-between items-center border lg:px-[20px] lg:py-[12px] py-[12px] px-[10px] rounded-[20px] font-spaceMono text-gray-600 h-[46px]'>
                <div className='flex justify-start lg:w-[430px] pl-4 '>
                    <span >#</span>
                    <span className='ml-5'>Artist</span>
                </div>
                <div className='lg:w-[520px] flex justify-start'>
                    <span className=' lg:w-[160px] w-[100px] hidden md:block'>Change</span>
                    <span className=' lg:w-[160px] w-[100px] hidden lg:block'>NFTs Sold</span>
                    <span className=' lg:w-[160px] w-[100px]'>Volume</span>
                </div>
            </div>
            {/* Table body */}
            <br />
            <div className='flex flex-col gap-5'>
                {
                    rankingData.map((d, i) => (
                        <div className='flex justify-between items-center  lg:px-[20px] lg:py-[12px] py-[12px] px-[10px] rounded-[20px] font-workSans  bg-gray  h-[50px] md:h-[60px] lg:h-[80px]' key={i}>
                            <div className='flex justify-start lg:w-[410px] gap-[10px] md:gap-5 '>
                                <span className="md:w-[20px] md:h-[20px]  md:rounded-2xl md:bg-bgPrimary flex justify-center  items-center  p-4  font-spaceMono ">
                                    {i + 1}
                                </span>
                                <div className='flex justify-center items-center gap-[12px]'>
                                    <img src={d.avatar} className='w-[24px] h-[24px]' alt="" />
                                    <span className='md:text-[22px] text-xs'>{d.artistName}</span>
                                </div>
                            </div>
                            <div className='lg:w-[520px] flex justify-start'>
                                <span className=' lg:w-[160px] w-[100px] hidden md:block font-spaceMono text-green-500'>+1.41%</span>
                                <span className=' lg:w-[160px] w-[100px] hidden lg:block font-spaceMono'>602</span>
                                <span className=' lg:w-[160px] w-[100px] font-spaceMono'>12.4 ETH</span>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default RankingList