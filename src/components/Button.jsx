import React from "react";
function Button(props) {
  return (
    <button
      className={`flex justify-center gap-2 items-center font-semibold rounded-[20px] h-[60px]  bg-cta min-w-[152px] ${props.class} cursor-pointer`}
    >
      <img className="w-[20px] h-[20px]" src={props.icon} alt="" />
      <span className="text-base">{props.text} </span>
    </button>
  );
}

export default Button;
