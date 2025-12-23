import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProductsSlider from "../../components/ProductsSlider";
import ProductDetailComponent from "../../components/ProductDetailComponent";


const ProductDetail = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition text-[14px]!"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition text-[14px]!"
            >
              Personal Care
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className="link transition text-[14px]!"
            >
              Dettol Soap Bar
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[40%] h-[70vh] overflow-hidden">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-10">
            <ProductDetailComponent />
          </div>
        </div>

        <div className="container">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[16px] cursor-pointer font-medium ${
                activeTab === 0 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[16px] cursor-pointer font-medium ${
                activeTab === 1 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[16px] cursor-pointer font-medium ${
                activeTab === 2 && "text-[#ff5252]"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="w-full py-3 px-6">
              <p className="text-[#666] text-[14px] font-medium leading-[25px] mt-2.5 mb-2.5">
                Dettol Original Soap delivers trusted germ protection while
                keeping your skin clean, fresh, and healthy every day. Its
                classic Dettol fragrance provides a refreshing bathing
                experience and supports your skin’s natural defense.
              </p>

              <h4 className="text-black font-semibold">
                Powerful Germ Protection
              </h4>
              <p className="text-[#666] text-[14px] font-medium leading-[25px] mt-2.5 mb-2.5">
                Dettol Original Soap is formulated to protect against a wide
                range of unseen germs and bacteria that can cause illness and
                infections. With every wash, it not only cleanses your skin but
                also helps maintain a strong barrier, reducing the chances of
                skin issues such as irritation, infections, or unpleasant odors.
              </p>
              <h4 className="text-black font-semibold">
                Supports Skin Health & Hygiene
              </h4>
              <p className="text-[#666] text-[14px] font-medium leading-[25px] mt-2.5 mb-2.5">
                Good personal hygiene plays a vital role in preventing the
                spread of diseases. Dettol’s trusted formula helps keep your
                skin clean, moisturised, and healthy. By maintaining the skin’s
                natural barrier, it improves both the appearance and overall
                health of your skin. From classic Dettol protection to
                refreshing and skincare variations, the full range is designed
                to meet your daily hygiene needs.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-heading">
                  <tr>
                    <th scope="col" class="px-6 py-3 font-semibold">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3 font-semibold">
                      Color
                    </th>
                    <th scope="col" class="px-6 py-3 font-semibold">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3 font-semibold">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-neutral-primary">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4 text-[#666] font-medium">Silver</td>
                    <td class="px-6 py-4 text-[#666] font-medium">Laptop</td>
                    <td class="px-6 py-4 text-[#666] font-medium">$2999</td>
                  </tr>
                  <tr class="bg-neutral-primary">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4 text-[#666] font-medium">White</td>
                    <td class="px-6 py-4 text-[#666] font-medium">Laptop PC</td>
                    <td class="px-6 py-4 text-[#666] font-medium">$1999</td>
                  </tr>
                  <tr class="bg-neutral-primary">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4 text-[#666] font-medium">Black</td>
                    <td class="px-6 py-4 text-[#666] font-medium">
                      Accessories
                    </td>
                    <td class="px-6 py-4 text-[#666] font-medium">$99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 2 && (
            <div className="w-[80%] py-3 px-6">
              <div className="w-full productReviewContainer">
                <h2 className="text-[18px] mb-2 font-medium">
                  Customer questions & answers
                </h2>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-items-end">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 overflow-hidden rounded-full">
                        <img
                          src="/pikachu.webp"
                          alt="profile"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-black font-semibold text-[16px]">
                          Ankit Kumar
                        </h4>
                        <h5 className="text-black font-semibold text-[14px]">
                          2024-12-01
                        </h5>
                        <p className="text-[#666] text-[14px] font-medium leading-[25px]">
                          Nice Product, Stay Germs Free! Excellent product! Skin feels soft and germ-free after every bath. The classic Dettol smell is just perfect.
                        </p>
                      </div>
                    </div>

                    <Rating value={4} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-items-end">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 overflow-hidden rounded-full">
                        <img
                          src="/dora.webp"
                          alt="profile"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-black font-semibold text-[16px]">
                          Riya Sharma
                        </h4>
                        <h5 className="text-black font-semibold text-[14px]">
                          2024-12-03
                        </h5>
                        <p className="text-[#666] text-[14px] font-medium leading-[25px]">
                          Loved it! The fragrance is refreshing and the soap
                          feels very gentle on the skin. Perfect for daily
                          use—keeps me feeling clean all day.
                        </p>
                      </div>
                    </div>

                    <Rating value={3} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-items-end">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 overflow-hidden rounded-full">
                        <img
                          src="/oggy.webp"
                          alt="profile"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-black font-semibold text-[16px]">
                          Mohit Verma
                        </h4>
                        <h5 className="text-black font-semibold text-[14px]">
                          2024-11-28
                        </h5>
                        <p className="text-[#666] text-[14px] font-medium leading-[25px]">
                          Great quality and fast local delivery! The soap
                          lathers well and gives a fresh, hygienic feel.
                          Definitely worth buying again.
                        </p>
                      </div>
                    </div>

                    <Rating value={5} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-items-end">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 overflow-hidden rounded-full">
                        <img
                          src="/ninja.webp"
                          alt="profile"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-black font-semibold text-[16px]">
                          Arjun Patel
                        </h4>
                        <h5 className="text-black font-semibold text-[14px]">
                          2024-11-01
                        </h5>
                        <p className="text-[#666] text-[14px] font-medium leading-[25px]">
                          Totally satisfied. The pack is affordable and lasts
                          long. Clean, refreshing, and trustworthy—Dettol never
                          disappoints.
                        </p>
                      </div>
                    </div>

                    <Rating value={2} readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-items-end">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 overflow-hidden rounded-full">
                        <img
                          src="/jack.webp"
                          alt="profile"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-black font-semibold text-[16px]">
                          Sneha Kumari
                        </h4>
                        <h5 className="text-black font-semibold text-[14px]">
                          2024-12-15
                        </h5>
                        <p className="text-[#666] text-[14px] font-medium leading-[25px]">
                          Amazing freshness! Helps maintain hygiene and gives a
                          very clean feel. Delivery was super quick too.
                        </p>
                      </div>
                    </div>

                    <Rating value={4} readOnly />
                  </div>
                </div>
                <br />
                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px] mb-2 font-medium">Add a review</h2>
                  <form className="w-full mt-5">
                    <TextField
                      id="jai-hai"
                      label="Write a review here..."
                      multiline
                      className="w-full mb-5"
                      rows={4}
                    />
                    <br />
                    <br />
                    <Rating value={4} />

                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container py-8">
          <h2 className="text-[20px] font-semibold">Related Products</h2>
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
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
