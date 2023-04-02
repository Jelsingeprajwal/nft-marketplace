import React from 'react'
import { MagnifyingGlass, avatar1, avatar10, avatar11, avatar12, avatar16, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, image1, image10, image12, image16, image18, image20, image23, image24, image25, image27, image28, image29, image30, image31, image32, image33, image9 } from '../assets'
import { Link } from 'react-router-dom'
import { Footer, NFTCard } from '../components'
function MarketPlace() {
    const nftData = [
        {
            title: "Magic Mushroom 0325",
            artistName: "Shroomie",
            avatar: avatar1,
            image: image30,
        },
        {
            title: "Happy Robot 032",
            artistName: "BeKind2Robots",
            avatar: avatar3,
            image: image29,
        },
        {
            title: "Happy Robot 024",
            artistName: "BeKind2Robots",
            avatar: avatar4,
            image: image28,
        },
        {
            title: "Designer Bear",
            artistName: "Mr Fox",
            avatar: avatar5,
            image: image31,
        },
        {
            title: "Colorful Dog 0356",
            artistName: "Keepitreal",
            avatar: avatar6,
            image: image25,
        },
        {
            title: "Dancing Robot 0312",
            artistName: "Robotica",
            avatar: avatar7,
            image: image32,
        },
        {
            title: "Cherry Blossom Girl 035",
            artistName: "MoonDancer",
            avatar: avatar8,
            image: image27,
        },
        {
            title: "Space Travel",
            artistName: "NebulaKid",
            avatar: avatar9,
            image: image24,
        },
        {
            title: "Sunset Dimension",
            artistName: "Animakid",
            avatar: avatar10,
            image: image33,
        },
        {
            title: "Desert Walk",
            artistName: "Keepitreal",
            avatar: avatar11,
            image: image20,
        },
        {
            title: "IceCream Ape 0324",
            artistName: "Ice Ape Club",
            avatar: avatar12,
            image: image23,
        },
        {
            title: "Colorful Dog 0346",
            artistName: "PuppyPower",
            avatar: avatar2,
            image: image25,
        }
    ]
    return (
        <section className=' bg-bgPrimary text-white  font-workSans'>


            <div className='w-full flex flex-col h-[263px] md:h-[288px] lg:h-[351px] gap-[30px] py-[40px] px-[30px] md:py-[60px] md:px-[77px] lg:py-[80px] lg:px-[115px] max-w-[1280px] lg:mx-auto'>
                <div className='flex flex-col gap-[10px]'>
                    <h2 className='capitalize text-[28px] md:text-[38px] lg:text-[51px]  leading-[140%] md:leading-[120%]  font-semibold'>Browse Marketplace</h2>
                    <p className='leading-[140%] lg:leading-[160%] font-normal lg:text-[22px]'>Browse through more than 50k NFTs on the NFT Marketplace.</p>
                </div>
                <div className='flex w-full border bottom-1 border-gray-400  justify-center items-center rounded-[20px] '>
                    <input type="text" name="" id="" className='grow bg-bgPrimary h-[60px] p-[20px] rounded-l-[20px]' placeholder='Search your favourite NFTs' />
                    <label className='mr-[20px]' > <img src={MagnifyingGlass} alt="" /></label>
                </div>
            </div>
            {/* Marketplace section */}
            <div className='border-b-[1px] border-gray-600'>
                <div className=" w-full font-semibold border-t  border-t-gray-600 px-[30px] md:px-[77px] lg:px-[115px]" >
                    <div className="h-[60px] flex flex-row justify-between items-center  max-w-[1280px] lg:mx-auto">
                        <div className="relative  w-[157px] md:w-[340px] lg:w-[525px] flex justify-center link">
                            <a href="#" className=" px-[21px] py-[19px] " >Created</a>
                        </div><div className="relative  w-[157px] md:w-[340px] lg:w-[525px] flex justify-center">
                            <a href="#" className=" px-[21px] py-[19px] opacity-60" >Collection</a>
                        </div>
                    </div>
                </div>
                <div className=' py-[40px] px-[30px] md:py-[60px] md:px-[77px] lg:py-[80px] lg:px-[115px] w-full bg-gray'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1280px] lg:mx-auto'>
                        {
                            nftData.map((data, i) => (
                                <Link to={'/nftpage'} key={i}>
                                    <NFTCard
                                        title={data.title}
                                        artistName={data.artistName}
                                        avatar={data.avatar}
                                        image={data.image}
                                        className={"bg-bgPrimary "}
                                    />
                                </Link>
                            ))
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default MarketPlace