import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const HomeCatSlider = () => {
  const categories = [
    {
      name: "Chocolates & Candies",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419468/choco_go1mmj.png",
      link: "/choco",
    },
    {
      name: "Baby Care & Female Hygiene",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419468/Baby_Care_Female_Hygiene_setsbr.png",
      link: "/baby",
    },
    {
      name: "Snacks & Namkeens",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419468/MENU_1752752288039_tenbrk.png",
      link: "/snacks",
    },
    {
      name: "Tea Coffee & Cold Drinks",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419470/MENU_1752752311246_idf1cp.png",
      link: "/drinking",
    },
    {
      name: "Biscuits & Cookies",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419469/MENU_1752752382721_ispvvk.png",
      link: "/biscuits",
    },
    {
      name: "Cleaning & Laundry",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419470/MENU_1752752398821_jgyn5x.png",
      link: "/cleaning",
    },
    {
      name: "Face & Oral Care",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419469/MENU_1752752457441_gkxfsi.png",
      link: "/care",
    },
    {
      name: "Stationary & Electrical",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419468/MENU_1752752639337_bjiecp.png",
      link: "/copy-pen",
    },
    {
      name: "Foodgrains, Oil & Masala",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419469/MENU_1752752473944_vasx6d.png",
      link: "/grocery",
    },
    {
      name: "Hair & Body Care",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419469/MENU_1752752514120_weocio.png",
      link: "/body-care",
    },
    {
      name: "Health & Wellness",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419469/MENU_1752752532219_lyc7er.png",
      link: "/health",
    },
    {
      name: "Instant Packaged Foods",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419469/MENU_1752752571216_vxskbm.png",
      link: "/instant",
    },
    {
      name: "Paper Goods & Disposables",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419468/MENU_1752752592347_jmaewd.png",
      link: "/paper",
    },
    {
      name: "Sauces, Spreads & Essentials",
      img: "https://res.cloudinary.com/dwmnyuamv/image/upload/v1785419468/MENU_1752752614421_hbzzy3.png",
      link: "/sauces",
    },
  ];

  const bgColors = [
    "bg-[#FFD7A8]",
    "bg-[#B8F2E6]",
    "bg-[#C7DFFF]",
    "bg-[#FFC4D6]",
    "bg-[#E7FF9E]",
    "bg-[#BFD4FF]",
    "bg-[#EAC8FF]",
    "bg-[#CFFFE0]",
  ];

  return (
    <div className="homeCatSlider w-full px-2 sm:px-0 md:w-[97%] lg:w-[96%] mx-auto py-2 mb-3">
      <Swiper
        modules={[Navigation, Autoplay]}
        speed={800}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 5, spaceBetween: 12 },
          1024: { slidesPerView: 7, spaceBetween: 12 },
        }}
        className="mySwiper !items-stretch"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <Link
              to={cat.link}
              className={`item w-full h-full rounded-md text-center flex flex-col items-center justify-start py-3 px-2 transition hover:shadow-lg ${bgColors[index % bgColors.length]}`}
            >
              <div className="w-full h-[78px] sm:h-[95px] md:h-[110px] flex items-center justify-center shrink-0">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="max-w-[78px] max-h-[78px] sm:max-w-[95px] sm:max-h-[95px] md:max-w-[110px] md:max-h-[110px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3 className="w-full text-gray-800 font-medium text-[11px] sm:text-sm leading-tight px-1 mt-2 line-clamp-2 min-h-[2.4em] sm:min-h-[2.6em] flex items-start justify-center">
                {cat.name}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCatSlider;