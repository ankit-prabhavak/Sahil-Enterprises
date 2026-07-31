import React from "react";
import BannerBox from "../BannerBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../AdsBannerSlider/style.css";

const AdsBannerSlider = ({ items = 3, banners = [] }) => {
  return (
    <div className="py-5 w-full overflow-hidden">
      <Swiper
        modules={[Navigation]}
        spaceBetween={7}
        slidesPerView={items}
        navigation={true}
        className="mySwiper w-full"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 8 },
          480: { slidesPerView: 1.5, spaceBetween: 8 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 2.5, spaceBetween: 10 },
          1024: { slidesPerView: items, spaceBetween: 12 },
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="!h-auto flex">
            <div className="w-full h-full">
              <BannerBox img={banner.img} link={banner.link} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;