import React from "react";
import { Link } from "react-router-dom";
import "../BannerBoxV2/style.css";

const BannerBoxV2 = () => {
  return (
    <div className="bannerBoxV2 flex items-center gap-2 flex-col overflow-hidden rounded-md">
      <div className="rounded-md overflow-hidden">
      <Link to="/">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/3240/1580/image/0dbc917a95ad6012.jpg?q=60"
          alt="banner"
          className="w-full h-44 cursor-pointer hover:scale-105 transition-all"
        />
      </Link>
      </div>
      <div className="rounded-md overflow-hidden">
      <Link to="/">
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/3240/1580/image/a958133f816aa4ea.jpg?q=60"
          alt="banner"
          className="w-full h-44 cursor-pointer hover:scale-105 transition-all"
        />
      </Link>
      </div>
    </div>
  );
};

export default BannerBoxV2;
