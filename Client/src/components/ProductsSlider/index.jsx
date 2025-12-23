import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

const ProductsSlider = ({ items = 4, navi = true, products = [] }) => {
  return (
    <div className="productsSlider py-5">
      <Swiper
        modules={[Navigation]}
        navigation = {navi}
        spaceBetween={10}
        slidesPerView={items}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;