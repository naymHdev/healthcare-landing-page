import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { testimonialInfo } from "../data/data";

const Testimonial = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {testimonialInfo?.map(
        ({ title, review, id, profession, name, profileImage }) => (
          <SwiperSlide key={id}>
            <div>
              <div className="bg-[#FFFFF5]">
                <h3>{title}</h3>
                <p>{review}</p>
                <div className=" flex items-center gap-1">
                  <div>
                    <img src={profileImage} alt="Profile Image" />
                  </div>
                  <div>
                    <h4>
                      {name} <span>{profession}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Testimonial;
