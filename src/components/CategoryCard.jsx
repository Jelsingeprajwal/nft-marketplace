import React from "react";

function CategoryCard({ image, title, icon }) {
  return (
    <div className="lg:w-[240px] md:h-[209px] lg:h-[316px] md:w-[150px] w-[147px] h-[209px]  bg-gray  rounded-[20px]">
      <div className="w-[316px] h-full relative   rounded-[20px]">
        <img
          src={image}
          className="blur-sm lg:blur-md lg:w-[240px] md:h-[142px] lg:h-[240px] md:w-[150px] w-[148px] h-[142px] "
          alt=""
        />
        <img
          src={icon}
          alt=""
          className="absolute lg:top-[25%] lg:left-[20%] top-[31px] w-[80px] lg:w-[100px] left-[35px]"
        />
        <p className="mt-[20px] ml-[30px] text-[16px] lg:text-[22px] font-semibold leading-[140%] ">
          {title}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
