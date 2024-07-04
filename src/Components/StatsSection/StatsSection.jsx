import React from "react";
import stats from "../../../public/v-stats.png";
import certificate from "../../../public/certificate-icon.png";
import coin from "../../../public/coin-icon.png";
import video from "../../../public/video-chat-icon.png";
import p1 from "../../../public/p1.jpeg";
import p2 from "../../../public/p2.jpeg";
import p3 from "../../../public/p3.jpeg";

const StatsSection = () => {
  return (
    <div className="p-4 md:p-8 mx-auto max-w-7xl mt-5 relative">
      <div className="mb-8 md:w-5/12 mx-auto md:absolute md:right-[350px]">
        <h2 className="text-3xl md:text-5xl md:text-center font-medium leading-tight md:leading-10">
          Comprehensive Care for Every Patient
        </h2>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Stats card */}
        <div className="h-auto bg-[#FBFBFB] shadow-sm border rounded-3xl p-8 flex flex-col ">
          <h2 className="text-4xl font-semibold">90%</h2>
          <p className="text-sm mt-3 ">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <div className="w-[130px] h-[130px] mt-7">
            <img src={stats} alt="Stats" className="w-full h-full" />
          </div>
        </div>
        {/* Certificate card */}
        <div className="h-auto bg-[#FFFFF5] shadow-sm border rounded-3xl p-8 flex flex-col  justify-between mt-0 lg:mt-[122px]">
          <h2 className="text-4xl font-semibold">90%</h2>
          <p className="text-sm mt-1 ">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <div className="w-[70px] md:ml-[85px]">
            <img
              src={certificate}
              alt="Certificate"
              className="w-full h-full"
            />
          </div>
        </div>
        {/* Patient card */}
        <div className="h-auto bg-[#FBFBFB] shadow-sm border rounded-3xl p-8 flex flex-col  justify-between mt-0 lg:mt-[150px]">
          <h2 className="text-4xl font-semibold">4.8</h2>
          <p className="text-sm mt-1 ">Over 20,000 Patient</p>
          <div className="flex -space-x-3 mt-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img src={p1} alt="Patient 1" className="w-full h-full" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img src={p2} alt="Patient 2" className="w-full h-full" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img src={p3} alt="Patient 3" className="w-full h-full" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img src={p2} alt="Patient 4" className="w-full h-full" />
            </div>
          </div>
        </div>
        {/* Coin card */}
        <div className="h-auto bg-[#FFFFF5] shadow-sm border rounded-3xl p-8 flex flex-col  justify-between mt-0 lg:mt-[122px]">
          <h2 className="text-4xl font-semibold">$5000</h2>
          <p className="text-sm mt-1 ">Money spent for poor patients</p>
          <div className="w-[77px] md:ml-[85px]">
            <img src={coin} alt="Coin" className="w-full h-full" />
          </div>
        </div>
        {/* Video card */}
        <div className="h-auto bg-[#FBFBFB] shadow-sm border rounded-3xl p-8 flex flex-col ">
          <h2 className="text-4xl font-semibold">50+</h2>
          <p className="text-sm mt-3 ">Free lesson videos for patients</p>
          <div className="w-[132px] h-[127px] mt-12">
            <img src={video} alt="Video chat" className="w-full h-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
