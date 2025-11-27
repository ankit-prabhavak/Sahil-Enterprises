import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  const banners = [
    "https://rajnigandha.com/cdn/shop/files/RG_Blue_BG_Website_Banner.jpg?v=1754998145",
    "https://www.anmolindustries.com/wp-content/uploads/2024/11/Homepage-banner-3-1.jpg",
    "https://www.lays.com/sites/lays.com/files//2025-10/Homepage%20Banner%201920x715%201.0%20EN.png",
    "https://www.anmolindustries.com/wp-content/uploads/2024/11/Homepage-banner-1.jpg",
    "https://m.media-amazon.com/images/S/aplus-media/sota/ef3baac6-6c75-4ad4-9b33-6f63d5d2ed61.__CR0,0,970,300_PT0_SX970_V1___.png",
    "https://m.media-amazon.com/images/S/aplus-media/vc/340e5111-ccc8-4150-85dc-3a4cc40b97b4.__CR0,0,970,300_PT0_SX970_V1___.jpg",
    "https://www.horlicks.in/cdn/shop/files/Rectangle_48_1_fa125ca4-009d-46e9-90d2-4eda97bde827.png?v=1722230363&width=3840",
    "https://m.media-amazon.com/images/S/aplus-media/vc/74e516db-38d6-4ab3-8a69-970d95b6b7bc.__CR0,0,970,300_PT0_SX970_V1___.jpg",
    "https://www.bikaji.com/pub/media/imagegallery/images/Bikaji-Web-banner-Snacking-Partner.jpg",
  ];

  return (
    <div className="homeSlider w-[98%] md:w-[92%] lg:w-[90%] mx-auto py-4 mb-3">
      <Swiper
        slidesPerView={1} // Shows one slide at a time
        spaceBetween={10}
        navigation
        loop={true}
        autoplay={{
          delay: 2500, // ⏱ Slightly faster than category
          disableOnInteraction: false,
        }}
        speed={800} // Smooth transition
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="item rounded-2xl overflow-hidden">
              <img
                src={src}
                alt={`banner-${index}`}
                className="w-full h-[45vh] md:h-[55vh] lg:h-[58vh] object-cover rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
