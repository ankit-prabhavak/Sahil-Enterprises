import React from "react";
import BannerBox from "../BannerBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const AdsBannerSlider = ({ items = 3, banners = [] }) => {
  return (
    <div className="py-5 w-full overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={8}
        slidesPerView={1}
        className="mySwiper w-full"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 8 },
          480: { slidesPerView: 1.2, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 2.5, spaceBetween: 10 },
          1024: { slidesPerView: items, spaceBetween: 12 },
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="h-auto">
            <BannerBox img={banner.img} link={banner.link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;