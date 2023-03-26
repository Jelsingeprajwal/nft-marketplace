import React from "react";

function CategoryCard({ image, title, icon }) {
  return (
    <div className="lg:w-[240px] md:h-[209px] lg:h-[316px] md:w-[150px] bg-gray  rounded-[20px]">
      <div className="w-[316px] h-full relative   rounded-[20px]">
        <img
          src={image}
          className="md:blur-sm lg:blur-md lg:w-[240px] md:h-[142px] lg:h-[240px] md:w-[150px] "
          alt=""
        />
        <img
          src={icon}
          alt=""
          className="absolute lg:top-[25%] lg:left-[20%] md:top-[31px] md:w-[80px] lg:w-[100px] md:left-[35px]"
        />
        <p className="mt-[20px] ml-[30px] md:text-[16px] lg:text-[22px] font-semibold leading-[140%]">
          {title}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
