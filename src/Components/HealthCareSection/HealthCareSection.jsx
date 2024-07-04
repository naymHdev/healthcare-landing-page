import React from "react";
import Button from "../Button/Button";
import mission from "../../../public/Rectangle 24.png";

const HealthCareSection = () => {
  return (
    <>
      <section className=" px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 mt-24">
        <div className=" relative">
          <button className="bg-[#FFFFF5] px-5 py-2 rounded-full text-[#4D4C7B] border border-[#4D4C7B] ">
            Who we are
          </button>
          <h3 className=" text-4xl leading-[54px] mt-5">
            We Help To Get Soultions
          </h3>
          <p className="text-[16px] mt-5">
            We are proud to be a trusted healthcare provider in our community,
            and we look forward to serving you and your family with excellence,
            integrity, and compassion. Your health is our priority, and we are
            here for you every step of the way. We believe in treating each
            patient with dignity, respect, and empathy, ensuring that they
            receive the attention and care they deserve.
          </p>
          <div className="absolute md;bottom-0 -bottom-14">
            <Button
              text="Learn more"
              backgroundColor="bg-[#FDC636]"
              border="border-none"
            />
          </div>
        </div>
        <div className=" relative">
          <img
            className=" w-full object-cover object-center"
            src={mission}
            alt=""
          />
          <div className="bg-[#343268] text-white absolute rounded-[30px] p-4 md:py-12 md:px-8 md:w-8/12 -bottom-8 md:-bottom-5 md:-left-[70px]">
            <h2>Our mission is simple</h2>
            <p className=" leading-6">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthCareSection;
