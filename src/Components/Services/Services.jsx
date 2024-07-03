import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import image1 from "../../../public/Rectangle 27-2.png";
import image2 from "../../../public/Rectangle 27-1.png";
import image3 from "../../../public/Rectangle 27.png";

const Services = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 md:px-8 mt-20 mb-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <button className=" px-5 py-2 rounded-full text-[#4D4C7B] border border-[#4D4C7B] ">
              Service
            </button>
            <h3 className=" text-4xl leading-[54px] mt-5">
              We Help To Get Soultions
            </h3>
            <p className="text-[16px] mt-5">
              We are proud to be a trusted healthcare provider in our community,
              and we look forward to serving you and your family with
              excellence, integrity, and compassion. Your health is our
              priority, and we are here for you every step of the way. We
              believe in treating each patient with dignity, respect, and
              empathy, ensuring that they receive the attention and care they
              deserve.
            </p>
            <div className=" mt-10">
              <Button backgroundColor="bg-[#FDC636]" border="border-none" />
            </div>
          </div>
          <div>
            <Card
              image={image1}
              title="Advanced Technology"
              description="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
            />
          </div>
          <div>
            <Card
              image={image2}
              title="Online Doctor Meet"
              description="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
            />
          </div>
          <div>
            <Card
              image={image3}
              title="Consultancy your health"
              description="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
