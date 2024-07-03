import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ backgroundColor, border }) => {
  return (
    <>
      <div className="hidden md:block">
        <button
          className={`py-2 px-4 ${backgroundColor}  rounded-xl ${border} text-black flex items-center gap-1`}
        >
          Appointment <GoArrowUpRight />
        </button>
      </div>
    </>
  );
};

export default Button;
