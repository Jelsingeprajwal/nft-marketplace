import React from "react";
import CollectionCard from "./CollectionCard";
import {
  avatar12,
  avatar6,
  avatar7,
  image10,
  image11,
  image12,
  image13,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../assets";

function Trending() {
  return (
    <section className="md:px-[72px] lg:px-[115px] md:py-[40px] lg:py-[80px] px-[30px] py-[40px] bg-bgPrimary text-white font-workSans max-w-[1280px] lg:mx-auto">
      <div className="md:min-w-[690px]">
        <div>
          <div className="flex flex-col gap-[10px] w-full ">
            <h4 className="text-[28px] leading-[140%] lg:text-[38px] font-semibold md:leading-[160%] lg:leading-[120%]">
              Trending Collection
            </h4>
            <p className=" md:text-[22px] md:leading-[140%] lg:leading-[160%]">
              Checkout our weekly updated trending collection.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]
           mt-[40px] md:mt-[60px]
          "
          >
            <CollectionCard
              avatar={avatar6}
              image1={image5}
              image2={image8}
              image3={image9}
            />
            <CollectionCard
              avatar={avatar7}
              image1={image6}
              image2={image10}
              image3={image11}
            />
            <div>
              <CollectionCard
                avatar={avatar12}
                image1={image7}
                image2={image12}
                image3={image13}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
