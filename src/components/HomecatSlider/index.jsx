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
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752254522.png",
      link: "/choco",
    },
    {
      name: "Baby Care & Female Hygiene",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752271752.png",
      link: "/baby",
    },
    {
      name: "Snacks & Namkeens",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752288039.png",
      link: "/snacks",
    },
    {
      name: "Tea Coffee & Cold Drinks",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752311246.png",
      link: "/drinking",
    },
    {
      name: "Biscuits & Cookies",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752382721.png",
      link: "/biscuits",
    },
    {
      name: "Cleaning & Laundry",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752398821.png",
      link: "/cleaning",
    },
    {
      name: "Face & Oral Care",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752457441.png",
      link: "/care",
    },

    {
      name: "Stationary & Electrical",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752639337.png",
      link: "/copy-pen",
    },
    {
      name: "Foodgrains, Oil & Masala",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752473944.png",
      link: "/grocery",
    },
    {
      name: "Hair & Body Care",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752514120.png",
      link: "/body-care",
    },
    {
      name: "Health & Wellness",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752532219.png",
      link: "/health",
    },
    {
      name: "Instant Packaged Foods",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752571216.png",
      link: "/instant",
    },
    {
      name: "Paper Goods & Disposables",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752592347.png",
      link: "/paper",
    },

    {
      name: "Sauces, Spreads & Essentials",
      img: "https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752614421.png",
      link: "/sauces",
    },
  ];
const bgColors = [
  "bg-[#FFD7A8]", // warm orange
  "bg-[#B8F2E6]", // teal mint
  "bg-[#C7DFFF]", // soft denim blue
  "bg-[#FFC4D6]", // rose pink
  "bg-[#E7FF9E]", // lime pastel
  "bg-[#BFD4FF]", // sky blue
  "bg-[#EAC8FF]", // lavender purple
  "bg-[#CFFFE0]", // fresh green
];

  return (
    <div className="homeCatSlider w-full md:w-[97%] lg:w-[96%] mx-auto py-1 pt-1 mb-3">
      <Swiper
        modules={[Navigation, Autoplay]}
        speed={800}
        spaceBetween={10}
        slidesPerView={8}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 7 },
        }}
        className="mySwiper"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <Link
              to={cat.link}
              className={`item h-[145px] w-full rounded-md text-center flex flex-col items-center justify-between py-2 px-1 transition hover:shadow-lg ${
                bgColors[index % bgColors.length]
              }`}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-[110px] h-[115px] object-contain mb-2 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-gray-800 font-medium text-sm mb-1">
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
