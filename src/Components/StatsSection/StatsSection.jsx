import React from "react";
import stats from "../../../public/v-stats.png";
import certificate from "../../../public/certificate-icon.png";
import coin from "../../../public/coin-icon.png";
import video from "../../../public/video-chat-icon.png";

const StatsSection = () => {
  return (
    <>
      <div className=" p-4 md:p-8 mx-auto max-w-7xl mt-5">
        <section className=" grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Stats card */}
          <div className="h-[312px] w-[216px] bg-[#FBFBFB] shadow-sm border rounded-3xl p-8">
            <h2 className=" text-4xl font-semibold">90%</h2>
            <p className=" text-sm mt-3">
              Patient satisfaction rate, reflecting our commitment.
            </p>
            <div className="">
              <img
                className=" w-[130px] h-[130px] mx-auto mt-7"
                src={stats}
                alt=" Stats"
              />
            </div>
          </div>
          {/* certificate card */}
          <div className="h-[190px] relative w-[216px] bg-[#FFFFF5] shadow-sm border rounded-3xl p-8 mt-[122px]">
            <h2 className=" text-4xl font-semibold">90%</h2>
            <p className=" text-sm mt-1">
              Patient satisfaction rate, reflecting our commitment.
            </p>
            <div className=" absolute bottom-2 right-3">
              <img className=" w-[70px]" src={certificate} alt=" Stats" />
            </div>
          </div>
          {/* Patient card */}
          <div className="h-[162px] relative w-[216px] bg-[#FBFBFB] shadow-sm border rounded-3xl p-8 mt-[150px]">
            <h2 className=" text-4xl font-semibold">4.8</h2>
            <p className=" text-sm mt-1">Over 20,000 Patient</p>
            <div className=" absolute bottom-1 left-3">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-10">
                    <img src="/public/p1.jpeg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10">
                    <img src="/public/p2.jpeg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10">
                    <img src="/public/p3.jpeg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10">
                    <img src="/public/p2.jpeg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Coin card */}
          <div className="h-[190px] relative w-[216px] bg-[#FFFFF5] shadow-sm border rounded-3xl p-8 mt-[122px]">
            <h2 className=" text-4xl font-semibold">$5000</h2>
            <p className=" text-sm mt-1">Money spend for poor patient</p>
            <div className=" absolute bottom-3 right-4">
              <img className=" w-[77px]" src={coin} alt=" coin" />
            </div>
          </div>
          {/* Video card */}
          <div className="bg-[#FBFBFB] h-[312px] w-[216px] shadow-sm border rounded-3xl p-8">
            <h2 className=" text-4xl font-semibold">50+</h2>
            <p className=" text-sm mt-3">Free lession video for patient</p>
            <div className="">
              <img
                className=" w-[132px] h-[127px] mx-auto mt-7"
                src={video}
                alt="Video chat"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StatsSection;
