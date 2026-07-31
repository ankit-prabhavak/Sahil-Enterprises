import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PiChats } from "react-icons/pi";
import Button from "@mui/material/Button";

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-6 md:py-10 text-center">
            <div className="col flex items-center justify-center flex-col group">
              <LiaShippingFastSolid className="text-[38px] md:text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1" />
              <h3 className="text-[14px] md:text-[16px] font-semibold mt-3">
                Free Shipping
              </h3>
              <p className="text-[11px] md:text-[12px] font-normal">
                For all Orders Over ₹5000
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group">
              <PiKeyReturn className="text-[38px] md:text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1" />
              <h3 className="text-[14px] md:text-[16px] font-semibold mt-3">
                30 Days Returns
              </h3>
              <p className="text-[11px] md:text-[12px] font-normal">
                For an Exchange Product
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group">
              <RiSecurePaymentFill className="text-[38px] md:text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1" />
              <h3 className="text-[14px] md:text-[16px] font-semibold mt-3">
                Secured Payment
              </h3>
              <p className="text-[11px] md:text-[12px] font-normal">
                Payments Cards Accepted
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group">
              <LiaGiftSolid className="text-[38px] md:text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1" />
              <h3 className="text-[14px] md:text-[16px] font-semibold mt-3">
                Special Gifts
              </h3>
              <p className="text-[11px] md:text-[12px] font-normal">
                On First Product Order
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group col-span-2 md:col-span-3 lg:col-span-1">
              <BiSupport className="text-[38px] md:text-[50px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:translate-y-1" />
              <h3 className="text-[14px] md:text-[16px] font-semibold mt-3">
                Support 24/7
              </h3>
              <p className="text-[11px] md:text-[12px] font-normal">
                Contact Us Anytime
              </p>
            </div>
          </div>

          <hr className="border border-gray-200" />

          <div className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[25%_40%_35%] gap-8 py-8">
            <div className="part1 w-full lg:border-r lg:border-[rgba(0,0,0,0.1)] lg:pr-8">
              <h2 className="text-[18px] font-semibold mb-4">Contact Us</h2>
              <p className="text-[14px] text-gray-500 font-medium pb-4">
                Sahil Enterprises, Thawe
                <br />
                Gopalganj - 841440
                <br />
                Bihar
              </p>

              <Link
                className="link text-[14px] text-gray-500 font-medium pb-4 block"
                to="mailto:support@sahilenterprises.in"
              >
                support@sahilenterprises.in
              </Link>

              <span className="text-[16px] md:text-[18px] font-bold block w-full mt-3 mb-4 text-[#ff5252]">
                (+91) 9876-543-210
              </span>

              <div className="flex items-center gap-2">
                <PiChats className="text-[40px] md:text-[50px] text-[#ff5252]" />
                <span className="text-[16px] md:text-[18px] font-semibold">
                  Online Chat
                  <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-full flex flex-col sm:flex-row gap-8 lg:pl-8">
              <div className="part2_col1 w-full sm:w-1/2">
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

              <div className="part2_col2 w-full sm:w-1/2">
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

            <div className="part3 w-full flex flex-col lg:pl-8 lg:pr-16">
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
                  className="w-full h-[45px] border border-[rgba(0,0,0,0.1)] outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org w-full sm:w-auto">SUBSCRIBE</Button>

                <div className="mt-3">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to the terms and conditions and the privacy policy"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
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

          <p className="text-[13px] text-center text-[rgba(0,0,0,0.4)]">
            © 2025 - Sahil Enterprises, Thawe
          </p>

          <div className="flex items-center justify-center md:justify-end w-full lg:w-auto">
            <img
              src="/visa.svg"
              alt="visa"
              className="w-[180px] sm:w-[160px] md:w-[170px] lg:w-[220px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
