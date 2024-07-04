import React from "react";
import bgImage from "../../../public/Rectangle 32.png";
import Button from "../Button/Button";
import logo from "../../../public/logo light (1).png";

const Appointment = () => {
  return (
    <div className="p-4 md:p-8 mx-auto max-w-7xl">
      <div
        className="relative h-[70vh] rounded-[32px] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[32px] md:flex justify-between text-white">
          <div className=" md:order-last p-10">
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-gradient-to-r from-[#070546] via-[#1D1B56] via-30% rounded-[32px]">
            <div className="mt-8 md:mt-[80px] p-10">
              <div className="text-3xl md:text-5xl font-semibold space-y-2">
                <p>Get Your</p>
                <p>First Appointment</p>
                <p>at 50% Off!</p>
              </div>
              <div className="md:flex gap-4 mt-5 md:mt-8 space-y-3 md:space-y-0">
                <Button
                  text="Appointment"
                  backgroundColor="bg-yellow-500 hover:bg-yellow-600"
                />
                <Button
                  text="Learn More"
                  backgroundColor="hover:bg-white hover:text-black transition"
                  border="border"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
