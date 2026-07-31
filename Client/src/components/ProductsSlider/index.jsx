import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

const ProductsSlider = ({ items = 4, navi = true, products = [] }) => {
  return (
    <div className="productsSlider py-5 w-full">
      <Swiper
        modules={[Navigation]}
        navigation={navi}
        spaceBetween={12}
        slidesPerView={1.2}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 10 },
          480: { slidesPerView: 1.6, spaceBetween: 10 },
          640: { slidesPerView: 2.2, spaceBetween: 12 },
          768: { slidesPerView: 3, spaceBetween: 12 },
          1024: { slidesPerView: items, spaceBetween: 10 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="h-auto">
            <ProductItem {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;