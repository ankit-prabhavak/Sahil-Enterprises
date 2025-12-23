import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomecatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../components/ProductsSlider";
import Footer from "../../components/Footer";

// Blog Section imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";

import HomeSliderV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <HomeSlider /> */}

      <section className="py-2.5">
        <div className="container flex gap-5">
          <div className="part1 w-[75%]">
            <HomeSliderV2 />
          </div>

          <div className="part2 w-[25%] flex items-center justify-between flex-col">
            <BannerBoxV2 />
          </div>
        </div>
      </section>

      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-semibold">Popular Products</h2>
              <p className="text-[14px] font-normal">
                Grab the best deals before they’re gone this month!
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="All" />
                <Tab label="Cadbury" />
                <Tab label="Haldirams" />
                <Tab label="Bikaji" />
                <Tab label="Nestle" />
                <Tab label="Biscuits" />
                <Tab label="Bhakti" />
                <Tab label="Energy" />
                <Tab label="Pan Masala" />
                <Tab label="Goldiee Masale" />
              </Tabs>
            </div>
          </div>
          <ProductsSlider
            items={6}
            products={[
              {
                id: 1,
                brand: "Cadbury",
                title: "Dairy Milk Chocolate 100g",
                img: "https://m.media-amazon.com/images/I/51MDI2rJVAL._SY300_SX300_QL70_FMwebp_.jpg",
                img2: "https://m.media-amazon.com/images/I/61qwHjs7mRL._SX679_PIbundle-3,TopRight,0,0_AA679SH20_.jpg",
                description: "Smooth creamy chocolate made from cocoa beans.",
                price: 54,
                oldPrice: 58,
                discount: -10,
              },
              {
                id: 2,
                brand: "Tide Naturals",
                title: "Tide Naturals 3Kg Detergent Powder",
                img: "https://m.media-amazon.com/images/I/61ce1sJdI-L._SX522_.jpg",
                img2: "https://m.media-amazon.com/images/I/71BeNsJftuL._SX522_.jpg",
                description: "Lemon And Chandan",
                price: 250,
                oldPrice: 358,
                discount: -17,
              },
              {
                id: 3,
                brand: "Sunfeast",
                title: "Mom's Magic Rich Cashew Almond Cookies (544 g)",
                img: "https://m.media-amazon.com/images/I/81MN-1kvlSL._SX679_.jpg",
                img2: "https://m.media-amazon.com/images/I/81O4uBJ+mXL._SX679_.jpg",
                description: "Cashew Almond Biscuit",
                price: 70,
                oldPrice: 78,
                discount: -23,
              },
              {
                id: 4,
                brand: "Bikaji",
                title: "Kuch Kuch All In 1",
                img: "https://m.media-amazon.com/images/I/81H3CZgadKL._SL1500_.jpg",
                img2: "https://m.media-amazon.com/images/I/81g70OkKY1L._SX679_.jpg",
                description: "Crunchy & Flavourful | Perfect Tea-time Partner",
                price: 399,
                oldPrice: 480,
                discount: -15,
              },

              {
                id: 5,
                brand: "Nestle",
                title: "MAGGI Double Masala Noodles, 95g",
                img: "https://m.media-amazon.com/images/I/81I5z3v72QL._SL1500_.jpg",
                img2: "https://m.media-amazon.com/images/I/81ZWLpoVisL._SL1500_.jpg",
                description: "2-Minutes Instant Noodles",
                price: 189,
                oldPrice: 225,
                discount: -35,
              },
              {
                id: 6,
                brand: "Goldiee",
                title: "Goldiee Sabji Masala Powder, 100g Pack",
                img: "https://m.media-amazon.com/images/I/51k0OaNYv3L._SX679_.jpg",
                img2: "https://m.media-amazon.com/images/I/61qOKG0rsBL._SX679_.jpg",
                description: "A perfect blend of pure spices",
                price: 60,
                oldPrice: 70,
                discount: -15,
              },
              {
                id: 7,
                brand: "Colgate",
                title: "Colgate Max Fresh Toothpaste",
                img: "https://m.media-amazon.com/images/I/61fFhFnhIvL._SL1080_.jpg",
                img2: "https://m.media-amazon.com/images/I/71fPRsxdbaL._SL1500_.jpg",
                description: "Cavity & Gum Protection",
                price: 44,
                oldPrice: 58,
                discount: -7,
              },
            ]}
          />
        </div>
      </section>

      <section className="py-4 pt-2  bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-semibold uppercase">
                {" "}
                Free Shipping{" "}
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-medium">
                Free Delivery Now On Your First Order and Over ₹5000
              </p>
            </div>

            <p className="font-bold text-[25px]">- Only ₹5000*</p>
          </div>

          <AdsBannerSlider
            items={4}
            banners={[
              { img: "/Banner2.webp", link: "/" },
              { img: "/Banner5.webp", link: "/" },
              { img: "/Banner3.webp", link: "/" },
              { img: "/Banner4.webp", link: "/" },
            ]}
          />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-semibold">Latest Products</h2>
          <ProductsSlider
            items={6}
            products={[
              {
                id: 1,
                brand: "Pepsico",
                title: "Kurkure Namkeen",
                img: "https://m.media-amazon.com/images/I/71uGU7evScL._SX679_.jpg",
                img2: "https://m.media-amazon.com/images/I/71XHF--juqL._SX679_.jpg",
                description: "Masala Munch, 39.5g/41.5g | Ready Snacks",
                price: 10,
                oldPrice: 15,
                discount: -10,
              },
              {
                id: 2,
                brand: "Cadbury",
                title: "5 Star Chocolate Bars  (40 x 35.2 g)",
                img: "https://m.media-amazon.com/images/I/61UW9wqwqeL._SX679_.jpg",
                img2: "https://rukminim1.flixcart.com/image/1664/1664/xif0q/chocolate/b/f/3/-original-imahcrrdnjkg7fng.jpeg?q=90&crop=false",
                description: "Eat 5-Star. Do Nothing!",
                price: 714,
                oldPrice: 858,
                discount: -17,
              },
              {
                id: 3,
                brand: "Lotte",
                title: "Lotte Choco Pie (Pack of 12), 336g",
                img: "https://m.media-amazon.com/images/I/817dgnh61GL._SX679_.jpg",
                img2: "https://m.media-amazon.com/images/I/81oqdp7QC+L._SX679_.jpg",
                description: "Happy Moments",
                price: 144,
                oldPrice: 170,
                discount: -23,
              },
              {
                id: 4,
                brand: "Uncle Chips",
                title: "Uncle Chips Kaxilu Uncle Spicy Potato Chips,50 Gram",
                img: "https://m.media-amazon.com/images/I/61WHJE3SjBL._SX679_.jpg",
                img2: "https://m.media-amazon.com/images/I/61RVyQgSMXL._SX679_.jpg",
                description: "Crunchy & Spicy",
                price: 25,
                oldPrice: 30,
                discount: -15,
              },

              {
                id: 5,
                brand: "Bikaji",
                title: "Bhujia No 1",
                img: "https://m.media-amazon.com/images/I/81It22lJjPL._SX679_.jpg",
                img2: "https://m.media-amazon.com/images/I/814CbZn1ZfL._SX679_.jpg",
                description: "Authentic Indian Snack | 1Kg Pack",
                price: 228,
                oldPrice: 350,
                discount: -35,
              },
              {
                id: 6,
                brand: "Britannia",
                title: "Good Day Biscuit",
                img: "https://m.media-amazon.com/images/I/81Tv0yVJKqL._SX679_.jpg",
                img2: "https://m.media-amazon.com/images/I/716eiDCRqzL._SX679_.jpg",
                description: "Biscuit Cashew, 200gm Pouch (Pack of 1)",
                price: 60,
                oldPrice: 70,
                discount: -15,
              },
              {
                id: 7,
                brand: "Haldirams",
                title: "Nut Cracker (10 g Extra in Pack)  (200 g)",
                img: "https://rukminim2.flixcart.com/image/832/832/xif0q/snack-savourie/z/y/d/-original-imagg3czj8kr8xc7.jpeg?q=70",
                img2: "https://m.media-amazon.com/images/I/81tCX9D-qnL._SX679_.jpg",
                description: "Haldiram's Classic Namkeen",
                price: 44,
                oldPrice: 58,
                discount: -7,
              },
            ]}
          />

          <AdsBannerSlider
            items={3}
            banners={[
              {
                img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg",
                link: "/",
              },
              {
                img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg",
                link: "/",
              },
              {
                img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg",
                link: "/",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-semibold">Best in Personal Care</h2>
          <ProductsSlider
            items={6}
            products={[
              {
                id: 1,
                brand: "Dettol",
                title: "Dettol Original Bathing Soap Bar",
                img: "https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg",
                img2: "https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg",
                description: "Kills 99.99% Germs, 150g",
                price: 301,
                oldPrice: 425,
                discount: -27,
              },
              {
                id: 2,
                brand: "Dove",
                title: "Dove Serum Bar | 1000g (125g x 8)",
                img: "https://m.media-amazon.com/images/I/51ohBg0HOdL._SX679_PIbundle-8,TopRight,0,0_AA679SH20_.jpg",
                img2: "https://m.media-amazon.com/images/I/51YDyJsbNsL._SX679_.jpg",
                description: "Nutrient Serum | Deep Nourish",
                price: 442,
                oldPrice: 549,
                discount: -16,
              },
              {
                id: 3,
                brand: "Bajaj",
                title: "Bajaj Almond Drops Hair Oil, 50ml",
                img: "https://m.media-amazon.com/images/I/51dJ3rRVzhL._SX679_.jpg",
                img2: "https://m.media-amazon.com/images/I/81OEpAJSv4L._SX679_.jpg",
                description: "6X Vitamin E Nourishment",
                price: 70,
                oldPrice: 78,
                discount: -23,
              },
              {
                id: 4,
                brand: "POND'S",
                title: "Ponds Bright Facewash",
                img: "https://m.media-amazon.com/images/I/512dChFNuXL._SX679_.jpg",
                img2: "https://m.media-amazon.com/images/I/61CtoN-rMQL._SX679_.jpg",
                description:
                  "For Glass-Skin Like Shine and with 4X Visibly Brighter Skin, 200gm",
                price: 218,
                oldPrice: 449,
                discount: -38,
              },

              {
                id: 5,
                brand: "Pampers",
                title: "Pampers Baby Diapers",
                img: "https://m.media-amazon.com/images/I/41NBIiCwcjL._SY300_SX300_QL70_FMwebp_.jpg",
                img2: "https://m.media-amazon.com/images/I/714PHBYO2YL._SX679_.jpg",
                description: "Cottony Softness Diapers| 9-14kg",
                price: 54,
                oldPrice: 58,
                discount: -10,
              },
              {
                id: 6,
                brand: "NIVEA",
                title: "NIVEA Body Milk Moisturizer",
                img: "https://m.media-amazon.com/images/I/41OGraWXVsL._SX679_.jpg",
                img2: "https://m.media-amazon.com/images/I/51XE9SjZ5NL._SX679_.jpg",
                description: "Body Lotion with Deep Moisture Serum",
                price: 60,
                oldPrice: 70,
                discount: -15,
              },
            ]}
          />

          <AdsBannerSlider
            items={3}
            banners={[
              {
                img: "https://rukminim2.flixcart.com/fk-p-flap/3240/1580/image/0dbc917a95ad6012.jpg?q=60",
                link: "/",
              },
              {
                img: "https://rukminim2.flixcart.com/fk-p-flap/3240/1580/image/f08303819bbeffc7.jpg?q=60",
                link: "/",
              },
              {
                img: "https://rukminim2.flixcart.com/fk-p-flap/3240/1580/image/b4efa066b7539bcc.jpg?q=60",
                link: "/",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-5 pt-0 pb-8 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-semibold mb-4">Latest Blogs</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={false}
            modules={[Navigation]}
            className="blogSlider"
          >
            {[
              {
                title: "Bake It Bright!",
                src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/56dcb921-58bb-4db9-b6e2-dec4b804b93f._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg",
                description:
                  "Whisk, mix, and let the magic rise! Whether you're a beginner or a pro, every recipe starts with one brave stir. Bake with confidence and create moments that smell like happiness.",
              },
              {
                title: "Glow The Right Way!",
                src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/81a78716-94f9-450b-ba61-7c0df08428c9._CR0,0,1200,628_SX920_CB1169409_QL70_.jpg",
                description:
                  "Your skin deserves gentle care. Cleanse, hydrate, repeat, small rituals make big differences. Glow naturally and let your confidence shine through every day.",
              },
              {
                title: "Clean Home, Clear Mind!",
                src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/13c830c5-0383-47aa-8aea-ac3b79d8b156._CR0,0,4999,2617_SX920_CB1169409_QL70_.jpg",
                description:
                  "A fresh space brings fresh thoughts. With simple daily habits, you can keep your home bright, organized, and full of positive vibes. Clean smart, live peaceful.",
              },
              {
                title: "Sip, Chill & Refresh!",
                src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/07203c73-abcb-47f6-84f0-f7a992f3e216._CR0,0,1200,628_SX920_CB1169409_QL70_.png",
                description:
                  "Take a break and recharge with your favorite drink. Whether it’s a cold shake or a warm cup of comfort, every sip is a little pause your day deserves.",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <BlogItem
                  src={item.src}
                  title={item.title}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      
    </>
  );
};

export default Home;
