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
        spaceBetween={7}
        slidesPerView={items}
        navigation={true}
        className="mySwiper"
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
