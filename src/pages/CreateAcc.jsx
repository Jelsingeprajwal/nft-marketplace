import React from "react";
import { signUpBg } from "../assets/index";
import { Button, Footer } from "../components";
function CreateAcc() {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:gap-10 lg:gap-[60px] mb-[40px] md:mb-0 md:min-h-[615px]  ">
        <div>
          <img
            src={signUpBg}
            alt=""
            className={" h-[232px] w-full md:w-[397px] lg:w-[50vw] md:h-full object-cover align-super"}
          />
        </div>
        <div className="mx-[30px] md:mx-0 mt-[30px] lg:my-[100px]  text-white font-workSans w-[325px] md:w-fit lg:w-[460px] flex flex-col gap-[30px] items-center lg:items-start">
          <div className=" flex flex-col gap-[20px]">
            <h1 className="text-[38px] lg:text-[51px] leading-[120%] lg:leading-[110%] font-semibold">
              Create account
            </h1>
            <p className="leading-[140%] font-normal lg:text-[22px]">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>
          <div className=" flex flex-col items-center  gap-4">
            <div className="flex flex-col w-[315px] items-center  gap-4 ">
              <input
                type="text"
                className="rounded-[20px] h-[46px] w-[315px] p-5"
                value={""}
                placeholder="Username"
              />
              <input
                type="text"
                className="rounded-[20px] h-[46px] w-[315px] p-5"
                value={""}
                placeholder="Email Address"
              />
              <input
                type="text"
                className="rounded-[20px] h-[46px] w-[315px] p-5"
                value={""}
                placeholder="Password"
              />
              <input
                type="text"
                className="rounded-[20px] h-[46px] w-[315px] p-5"
                value={""}
                placeholder="Confirm Password"
              />
            </div>

            <Button
              text="Create account"
              class="rounded-[20px] h-[46px] w-[315px] p-5"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default CreateAcc;
