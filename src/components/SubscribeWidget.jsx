import React, { useState } from "react";
import { astronaut } from "../assets";

function SubscribeWidget() {
  const [email, setEmail] = useState("");
  return (
    <section className="md:px-[72px] lg:px-[115px] md:py-[40px] lg:py-[80px] px-[30px] py-[40px] bg-bgPrimary text-white font-workSans max-w-[1280px] lg:mx-auto">
      <div className="lg:w-[1050px] lg:h-[430px] md:w-[690px] md:h-[360px] lg:p-[60px] md:py-[40px] md:pl-[30px] md:bg-gray rounded-[20px] flex flex-col md:flex-row  gap-[30px] lg:gap-[80px] ">
        <div>
          <img
            src={astronaut}
            alt="astronaut"
            className="lg:w-[425px] lg:h-[310px] md:w-[395px] md:h-[280px]"
          />
        </div>
        <div className="flex flex-col gap-[10px] w-[425px] ">
          <h1 className="text-[28px] lg:text-[38px] leading-[140%] md:leading-[120%] font-semibold capitalize">
            Join our weekly <br /> digest
          </h1>
          <p className=" text-[16px] lg:text-[22px] leading-[140%] md:leading-[160%] ">
            {" "}
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex lg:flex-row flex-col relative  w-[315px] md:w-[300px] lg:w-[425px] lg:h-[60px] gap-4">
            <input
              type="email"
              placeholder="enter your email here"
              className="w-full p-5 rounded-[20px] h-[46px] md:h-[46px] lg:h-[60px]"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button
              type="button"
              className="lg:absolute  md:w-[300px] md:py-6 md:flex md:justify-center 
              md:items-center  z-10 h-[46px] md:h-[46px] lg:h-[60px] bg-cta rounded-[20px] lg:w-[221px] right-0 "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeWidget;
