import React from "react";
import { Link } from "react-router-dom";
import { List, Logo, User } from "../assets/index";
import { Button } from "../components/index";
function Navbar() {
  return (
    <>
      <nav className="flex flex-1 w-full justify-between px-[30px]  md:pr-[50px] md:pl-[50px]  bg-bgPrimary  text-white   pt-5 pb-5 max-w-[1280px] lg:mx-auto">
        <Link
          to={"/"}
          className="font-spaceMono flex justify-center items-center w-[200px] "
        >
          <img src={Logo} alt="Logo" className="" />
        </Link>
        <div className="font-workSans font-[600]  hidden lg:flex  justify-between items-center">
          <ul className=" text-base list-none flex justify-center items-center">
            <li className="flex pr-[30px] pl-[30px] ">
              {" "}
              <Link to={"/marketplace"}>Marketplace</Link>{" "}
            </li>
            <li className="flex pr-[30px] pl-[30px] ">
              <Link to={"/rankings"}>Rankings</Link>
            </li>
            <li className="flex pr-[30px] pl-[30px]">
              <Link to="/connectwallet">Connect a wallet</Link>
            </li>
          </ul>
          <Button
            class={"w-[90%] md:w-[152px]  "}
            icon={User}
            text="Sign Up"
            to={"create-account"}
          />
        </div>
        <img src={List} alt="" className="lg:hidden cursor-pointer " />
      </nav>

      {/* <nav
        className="font-workSans font-[600] h-screen fixed bg-bgPrimary md:hidden w-full  text-white right-0 top-0
        flex flex-col items-end
        
        "
      >
        <div className="h-[64px]">
          <img
            src={List}
            alt=""
            className="md:hidden w-[32px]  cursor-pointer m-4"
          />
        </div>
        <ul
          className=" text-base flex flex-col  list-none h-screen  
        items-center w-full
        "
        >
          <li className=" pr-[30px] pl-[30px] mb-10 mt-4 ">
            {" "}
            <Link to={"marketplace"}>Marketplace</Link>{" "}
          </li>
          <li className=" pr-[30px] pl-[30px] mb-10 ">
            <Link to={"/rankings"}>Rankings</Link>
          </li>
          <li className=" pr-[30px] pl-[30px] mb-10">
            <Link to="/createwallet">Connect a wallet</Link>
          </li>
          <Button
            class={"w-[90%] md:w-[152px] min-w-[152px] "}
            icon={User}
            text="Sign Up"
          />
        </ul>
      </nav> */}
    </>
  );
}

export default Navbar;
