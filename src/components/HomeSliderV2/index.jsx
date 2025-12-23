import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const HomeSliderV2 = () => {
  const banners = [
    "https://tbn-prod-assets.s3.dualstack.ap-south-1.amazonaws.com/UI_Enhancement/Winter%20Banner%201200-400%20Web%20GIF/Personal%20care.gif",
    "https://tbn-prod-assets.s3.dualstack.ap-south-1.amazonaws.com/UI_Enhancement/Winter%20Banner%201200-400%20Web%20GIF/Beverages.gif",
  ];

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="homeSlideV2"
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="item w-full rounded-md overflow-hidden">
              <img src={src} alt={`banner-${index}`} className="w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSliderV2;
