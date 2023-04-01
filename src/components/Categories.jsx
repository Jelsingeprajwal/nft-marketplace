import React from "react";
import {
  Basketball,
  Camera,
  image1,
  image19,
  image2,
  image20,
  image21,
  image22,
  image23,
  image3,
  MagicWand,
  MusicNotes,
  PaintBrush,
  Planet,
  Swatches,
  VideoCamera,
} from "../assets";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <section className="md:px-[72px] lg:px-[115px] md:py-[40px] lg:py-[80px] px-[30px] py-[40px] bg-bgPrimary text-white font-workSans max-w-[1280px] lg:mx-auto">
      <div className="">
        <div>
          <h1 className="text-[28px] md:text-[22px] lg:text-[38px] font-semibold leading-[45px]">
            Browse Categories
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-[30px] mt-[40px] md:mt-[60px]">
          <CategoryCard image={image3} title={"Art"} icon={PaintBrush} />
          <CategoryCard
            image={image23}
            title={"Collectibles"}
            icon={Swatches}
          />
          <CategoryCard image={image20} title={"Music"} icon={Camera} />
          <CategoryCard
            image={image19}
            title={"Photography"}
            icon={MusicNotes}
          />
          <CategoryCard image={image21} title={"Video"} icon={VideoCamera} />
          <CategoryCard image={image22} title={"Utility"} icon={MagicWand} />
          <CategoryCard image={image1} title={"Sport"} icon={Basketball} />
          <CategoryCard image={image2} title={"Visual Worlds"} icon={Planet} />
        </div>
      </div>
    </section>
  );
}

export default Categories;
