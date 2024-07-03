import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { testimonialInfo } from "../data/data";
import ReactStars from "react-rating-stars-component";

const Testimonial = () => {
  return (
    <>
      <div className=" p-4 md:p-8 max-w-7xl mx-auto">
        <div>
          <button className=" px-5 py-2 rounded-full text-[#4D4C7B] border border-[#4D4C7B] ">
            Testimonial
          </button>
          <h3 className=" text-4xl leading-[54px] mt-5">
            What they say about us
          </h3>
        </div>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper mt-10"
        >
          {testimonialInfo?.map(
            ({ title, review, id, profession, name, profileImage }) => (
              <SwiperSlide key={id}>
                <div>
                  <div className="bg-[#FFFFF5] p-5 rounded-xl">
                    <h3>{title}</h3>
                    <p>{review.slice(0, 200)}</p>
                    <div className="mt-8 flex items-center gap-2">
                      <div>
                        <img
                          className="w-11 h-11 rounded-full"
                          src={profileImage}
                          alt="Profile Image"
                        />
                      </div>
                      <div>
                        <h4 className=" font-semibold">
                          {name}
                          <span className=" font-medium text-sm">
                            {profession}
                          </span>
                        </h4>
                        <ReactStars value={5} size={24} activeColor="#ffd700" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
