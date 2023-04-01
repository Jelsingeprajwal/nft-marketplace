import React from "react";
import { Link } from "react-router-dom";
function Button(props) {
  return (
    <Link
      to={props.to}
      className={`flex justify-center gap-2 items-center font-semibold rounded-[20px] h-[60px]  bg-cta min-w-[152px] ${props.class} cursor-pointer`}
    >
      {props.icon ? (
        <img className="w-[20px] h-[20px]" src={props.icon} alt="" />
      ) : (
        ""
      )}
      <span className="text-base">{props.text} </span>
    </Link>
  );
}

export default Button;
