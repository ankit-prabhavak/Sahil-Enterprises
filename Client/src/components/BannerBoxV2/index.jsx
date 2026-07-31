import React from "react";
import { Link } from "react-router-dom";
import "../BannerBoxV2/style.css";

const BannerBoxV2 = () => {
  const banners = [
    "https://rukminim1.flixcart.com/fk-p-flap/3240/1580/image/0dbc917a95ad6012.jpg?q=60",
    "https://rukminim1.flixcart.com/fk-p-flap/3240/1580/image/a958133f816aa4ea.jpg?q=60",
  ];

  return (
    <div className="bannerBoxV2 w-full h-full flex flex-col gap-2 lg:gap-3">
      {banners.map((src, i) => (
        <Link
          key={i}
          to="/"
          className="block w-full flex-1 min-h-0 overflow-hidden rounded-md"
        >
          <img
            src={src}
            alt="banner"
            className="w-full h-full object-cover object-center cursor-pointer hover:scale-105 transition-all duration-300 block"
          />
        </Link>
      ))}
    </div>
  );
};

export default BannerBoxV2;