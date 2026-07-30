import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const HomeSliderV2 = () => {
  const banners = [
    "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419468/cms_1781853541557_oi61ok.webp",
    "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419468/cms_1781853541933_adcepc.webp",
    "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785420221/hp_bcd_m_bcd_250923_400_pps0mx.webp",
    "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785420222/hp_m_petstore_250923_400_iqdgss.webp",
    "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785420221/hp_m_health_suppliment_250923_400_ar3han.webp",
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
