import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";

const Checkout = () => {
  return (
    <section className="py-10 bg-[#f9f9f9]">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1 className="text-xl font-semibold">Billing Details</h1>

            <form className="w-full mt-4">
              <div className="flex items-center gap-5 mb-4">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="First Name"
                    placeholder="e.g. Ankit"
                    required
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Last Name (Optional)"
                    placeholder="e.g. Prabhavak"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-medium mb-3">Full Address</h6>

              <div className="flex items-center gap-5 mb-4">
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="Street Address"
                    placeholder="House number and street name"
                    required
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 mb-4">
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="Apartment, Suite, Unit (Optional)"
                    placeholder="Apartment, suite, unit, building, floor, etc."
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 mb-4">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="City"
                    placeholder="e.g. Gopalganj"
                    required
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="State"
                    placeholder="e.g. Bihar"
                    required
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 mb-4">
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="Nearby Landmark (Optional)"
                    placeholder="e.g. Near City Bank"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-medium mb-3">
                Contact & Location Details
              </h6>

              <div className="flex items-center gap-5 mb-4">
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="ZIP Code"
                    placeholder="e.g. 841440"
                    required
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 mb-4">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Phone Number"
                    placeholder="e.g. +91 9876543210"
                    required
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    type="email"
                    label="Email Address"
                    placeholder="e.g. example@gmail.com"
                    required
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center pr-5 mb-4">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="GST Number (Optional)"
                    placeholder="e.g. 29ABCDE1234F2Z5"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h6 className="text-[14px] font-medium mb-3">
                Delivery Instructions (Optional)
              </h6>

              <div className="flex items-center gap-5 mb-4">
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="Delivery Instructions"
                    placeholder="e.g. Call before delivery, leave at security desk"
                    variant="outlined"
                    size="small"
                    multiline
                    rows={2}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rightCol w-[30%]">
          <div className="card shadow-md bg-white p-2.5 rounded-md">
            <h1 className="text-xl font-semibold mb-4">Your Order</h1>

            <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-semibold">Product</span>
              <span className="text-[14px] pr-5 font-semibold">Subtotal</span>
            </div>

            <div className="mb-2 scroll max-h-[250px] mt-2 overflow-y-scroll overflow-x-hidden pr-2 -mr-1">
              <div className="w-full flex items-start py-3 gap-2 border-b border-[rgba(0,0,0,0.1)] pb-2">
                <div className="img w-[30%] overflow-hidden h-[100px] rounded-md">
                  <Link to="/product/58" className="block group">
                    <img
                      src="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                      alt="product"
                      className="w-full group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="info w-[50%] relative">
                  <h4 className="text-[14px] font-medium mt-1">
                    <Link to="/product/58" className="link transition-all">
                      Dettol Original Bathing Soap Bar with 12hr Germ protection
                      (900gm) | Kills 99.99% Germs, 150g (Pack of 6)
                    </Link>
                  </h4>
                  <p className="text-[#666] text-[14px] font-medium mt-1 mb-1">
                    Buy As : {"Pack of 6"}
                  </p>
                  <p className="flex items-center gap-5 mt-1 mb-2">
                    <span className="text-[#666] text-[14px] font-medium">
                      Qty : <span>2</span>
                    </span>
                    <span className="text-[#666] text-[14px] font-medium">
                      Price :
                      {
                        <span className="text-[#ff5252] text-[14px] font-bold">
                          {" \u20B9"} 326
                        </span>
                      }
                    </span>
                  </p>
                </div>
                <div className="price w-[20%] flex items-center flex-col self-start font-semibold">
                  {" \u20B9"} 652.00
                </div>
              </div>
              <div className="w-full flex items-start py-3 gap-2 border-b border-[rgba(0,0,0,0.1)] pb-2">
                <div className="img w-[30%] overflow-hidden h-[100px] rounded-md">
                  <Link to="/product/58" className="block group">
                    <img
                      src="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                      alt="product"
                      className="w-full group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="info w-[50%] relative">
                  <h4 className="text-[14px] font-medium mt-1">
                    <Link to="/product/58" className="link transition-all">
                      Dettol Original Bathing Soap Bar with 12hr Germ protection
                      (900gm) | Kills 99.99% Germs, 150g (Pack of 6)
                    </Link>
                  </h4>
                  <p className="text-[#666] text-[14px] font-medium mt-1 mb-1">
                    Buy As : {"Pack of 6"}
                  </p>
                  <p className="flex items-center gap-5 mt-1 mb-2">
                    <span className="text-[#666] text-[14px] font-medium">
                      Qty : <span>2</span>
                    </span>
                    <span className="text-[#666] text-[14px] font-medium">
                      Price :
                      {
                        <span className="text-[#ff5252] text-[14px] font-bold">
                          {" \u20B9"} 326
                        </span>
                      }
                    </span>
                  </p>
                </div>
                <div className="price w-[20%] flex items-center flex-col self-start font-semibold">
                  {" \u20B9"} 652.00
                </div>
              </div>
              <div className="w-full flex items-start py-3 gap-2 border-b border-[rgba(0,0,0,0.1)] pb-2">
                <div className="img w-[30%] overflow-hidden h-[100px] rounded-md">
                  <Link to="/product/58" className="block group">
                    <img
                      src="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                      alt="product"
                      className="w-full group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="info w-[50%] relative">
                  <h4 className="text-[14px] font-medium mt-1">
                    <Link to="/product/58" className="link transition-all">
                      Dettol Original Bathing Soap Bar with 12hr Germ protection
                      (900gm) | Kills 99.99% Germs, 150g (Pack of 6)
                    </Link>
                  </h4>
                  <p className="text-[#666] text-[14px] font-medium mt-1 mb-1">
                    Buy As : {"Pack of 6"}
                  </p>
                  <p className="flex items-center gap-5 mt-1 mb-2">
                    <span className="text-[#666] text-[14px] font-medium">
                      Qty : <span>2</span>
                    </span>
                    <span className="text-[#666] text-[14px] font-medium">
                      Price :
                      {
                        <span className="text-[#ff5252] text-[14px] font-bold">
                          {" \u20B9"} 326
                        </span>
                      }
                    </span>
                  </p>
                </div>
                <div className="price w-[20%] flex items-center flex-col self-start font-semibold">
                  {" \u20B9"} 652.00
                </div>
              </div>
            </div>

            {/* PRICE SUMMARY */}
            <div className="mt-3 rounded-md bg-[#fafafa] p-3 border border-[rgba(0,0,0,0.08)] mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[14px] text-[#555]">Total (3 items)</span>
                <span className="text-[14px] font-medium">₹ 1956.00</span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-[14px] text-[#555]">
                  Delivery Charges
                </span>
                <span className="text-[14px] text-green-600 font-medium">
                  FREE
                </span>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-[14px] text-[#555]">Tax (GST)</span>
                <span className="text-[14px] font-medium">₹ 0.00</span>
              </div>

              <div className="border-t border-dashed border-[rgba(0,0,0,0.2)] my-2"></div>

              <div className="flex items-center justify-between">
                <span className="text-[16px] font-semibold">Grand Total</span>
                <span className="text-[16px] font-bold text-[#ff5252]">
                  ₹ 1956.00
                </span>
              </div>
            </div>

            <Button className="btn-org btn-lg w-full flex gap-2">
              <BsFillBagCheckFill className="text-[18px]" />
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
