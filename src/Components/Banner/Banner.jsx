import React from "react";
import banner from "../../../public/Rectangle 5.png";

const Banner = () => {
  return (
    <>
      <section className="bg-[#F1F2F4] py-8 max-w-7xl mx-auto">
        <div className=" px-4 md:px-8 mx-auto">
          <img src={banner} alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
