import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "./style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const images = [
    "https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg",
    "https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/61X5q16CCYL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/51Y7VOjqCdL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/61NTekCA6gL._SX679_.jpg",
  ];

  const [selectedImg, setSelectedImg] = useState(images[0]);

  const handleHover = (img) => setSelectedImg(img);

  return (
    <div className="flex gap-2 items-start">
      {/* Smaller Side Thumbnails */}
      <div className="w-[15%] border border-gray-200 rounded">
        <Swiper
          direction="vertical"
          spaceBetween={8}
          slidesPerView={4} // show only 4 images at a time
          slidesPerGroup={4} // move 4 images when navigating
          modules={[Navigation]}
          className="zoomProductSliderThumbs h-[444px]"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="item p-1 cursor-pointer"
                onMouseEnter={() => setSelectedImg(img)}
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img}
                  alt="thumbnail"
                  className={`thumbImg ${
                    selectedImg === img ? "activeThumb" : ""
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Zoom Image */}
      <div className="w-[85%] h-[478px] p-1 flex justify-center items-center border border-gray-200 rounded">
        <InnerImageZoom
          zoomType="hover"
          zoomScale={1}
          src={selectedImg}
          zoomSrc={selectedImg}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductZoom;
