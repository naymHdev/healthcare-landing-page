import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Card = ({ image, title, description }) => {
  return (
    <>
      <div className=" relative">
        <div>
          <img
            className=" rounded-[30px] w-full mx-auto object-cover object-center"
            src={image}
            alt=""
          />
        </div>
        <div className="rounded-[30px] md:rounded-[20px] bg-[#1E4E82] bg-opacity-70 text-white p-2 md:p-5 md:w-7/12 absolute bottom-0 md:bottom-6 md:left-6">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <button className="bg-[#FDC636] rounded-full p-1 border-none focus:outline-none absolute bottom-1 right-1 md:bottom-8 md:right-[220px]">
          <GoArrowUpRight className=" text-white text-3xl" />
        </button>
      </div>
    </>
  );
};

export default Card;
