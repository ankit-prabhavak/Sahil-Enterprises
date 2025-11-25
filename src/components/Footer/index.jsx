import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PiChats } from "react-icons/pi";
import Button from "@mui/material/Button";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-6">
        <div className="container">
          <div className="flex items-center justify-center gap-2 py-10 pb-10">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1" />
              <h3 className="text-[16px] font-semibold mt-3">Free Shipping</h3>
              <p className="text-[12px] font-normal">
                For all Orders Over ₹5000
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <PiKeyReturn className="text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1" />
              <h3 className="text-[16px] font-semibold mt-3">
                30 Days Returns
              </h3>
              <p className="text-[12px] font-normal">For an Exchange Product</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <RiSecurePaymentFill className="text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1" />
              <h3 className="text-[16px] font-semibold mt-3">
                Secured Payment
              </h3>
              <p className="text-[12px] font-normal">Payments Cards Accepted</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaGiftSolid className="text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1" />
              <h3 className="text-[16px] font-semibold mt-3">Special Gifts</h3>
              <p className="text-[12px] font-normal">On First Product Order</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1" />
              <h3 className="text-[16px] font-semibold mt-3">Support 24/7</h3>
              <p className="text-[12px] font-normal">Contact Us Anytime</p>
            </div>
          </div>

          <br />

          <hr className="border border-gray-200" />

          <div className="footer flex py-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)] pl-8">
              <h2 className="text-[18px] font-semibold mb-4">Contact Us</h2>
              <p className="text-[14px] text-gray-500 font-medium pb-4">
                Sahil Enterprises, Thawe
                <br />
                Gopalganj - 841440
                <br />
                Bihar
              </p>

              <Link
                className="link text-[14px] text-gray-500 font-medium pb-4"
                to="mailto:support@sethawe.in"
              >
                support@sahilenterprises.in
              </Link>

              <span className="text-[18px] font-bold block w-full mt-3 mb-4 text-[#ff5252]">
                (+91) 9876-543-210
              </span>

              <div className="flex items-center gap-2">
                <PiChats className="text-[50px] text-[#ff5252]" />
                <span className="text-[18px] font-semibold pl">
                  Online Chat
                  <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-semibold mb-4">Products</h2>

                <ul className="list">
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Price Drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      New Products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      SiteMap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Enquiry
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-semibold mb-4">
                  Our Enterprise
                </h2>

                <ul className="list">
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Delivery Policy
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Terms And Conditions
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      About Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Secure Payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] text-gray-500 font-medium w-full mb-2">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part3 w-[35%] flex pl-8 flex-col pr-16">
              <h2 className="text-[18px] font-semibold mb-4">
                Subscribe to Newsletter
              </h2>
              <p className="text-[14px] text-gray-500 font-medium">
                Get notified about new stock, wholesale deals, and special
                discounts.
              </p>
              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border  border-[rgba(0,0,0,0.1)] outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org">SUBSCRIBE</Button>

                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
              >
                <CiYoutube className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
              >
                <FaInstagram className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
              >
                <FaXTwitter className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all"
              >
                <BsWhatsapp className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p className="text-[13px] text-center text-[rgba(0,0,0,0.4)]">© 2025 - Sahil Enterprises, Thawe</p>

          <div className="flex items-center">
            <img src="visa.svg" alt="visa" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
