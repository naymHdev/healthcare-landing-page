import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ backgroundColor, border, text }) => {
  return (
    <>
      <div>
        <button
          className={`py-2 px-4 ${backgroundColor}  rounded-xl ${border} text-black flex items-center gap-1`}
        >
          {text} <GoArrowUpRight />
        </button>
      </div>
    </>
  );
};

export default Button;
