import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const HomeSliderV2 = () => {
  const banners = [
    "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785420221/hp_bcd_m_bcd_250923_400_pps0mx.webp",
    "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785420222/hp_m_petstore_250923_400_iqdgss.webp",
    "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785420221/hp_m_health_suppliment_250923_400_ar3han.webp",
    "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419468/cms_1781853541557_oi61ok.webp",
    "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419468/cms_1781853541933_adcepc.webp",
  ];

  return (
    <div className="w-full overflow-hidden rounded-md aspect-[16/9] sm:aspect-[18/8] lg:h-[420px] lg:aspect-auto bg-gray-100">
      <Swiper
        spaceBetween={20}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination]}
        className="homeSlideV2 w-full h-full"
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
              <img
                src={src}
                alt={`banner-${index}`}
                className="w-full h-full object-contain md:object-cover object-center block"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSliderV2;