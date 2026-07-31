import React from "react";
import BannerBox from "../BannerBox";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const AdsBannerSlider = ({ items = 3, banners = [] }) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        navigation={true}
        className="mySwiper"
        slidesPerView={1.1}
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 8 },
          480: { slidesPerView: 1.5, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 2.5, spaceBetween: 10 },
          1024: { slidesPerView: items, spaceBetween: 7 },
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <BannerBox img={banner.img} link={banner.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;