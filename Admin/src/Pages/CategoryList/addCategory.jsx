import React from "react";
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddCategory = () => {
  return (
    <section className="p-5 bg-gray-50 w-full h-full">
      <form className="form py-3 p-8">
        <div className="scrollHome max-h-[70vh] overflow-y-scroll pr-4">
          <div className="w-100 mb-3">
            <div className="col">
              <h3 className="text-[14px] font-medium mb-1 text-black font-medium">
                Category Name
              </h3>
              <input
                type="text"
                className="w-full h-10 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <div className="col w-full p-5 px-0">
            <h3 className="font-semibold text-[18px] mb-3">Media & Images</h3>

            <div className="grid grid-cols-7 gap-4">
              <div className="uploadBoxWrapper relative">
                <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden  bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div className="uploadBox relative p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col">
                  <LazyLoadImage
                    alt="Product Image"
                    className="h-full w-full object-cover"
                    effect="blur"
                    wrapperProps={{
                      // If you need to, you can tweak the effect transution using the wrapper style.
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://rukminim2.flixcart.com/image/420/420/xif0q/chocolate/2/6/i/-original-imahk53eyz8fthgt.jpeg?q=60"
                    } // use normal <img> attributes as props
                  />
                </div>
              </div>

              <UploadBox multiple={true} />
            </div>
          </div>
        </div>

        <br />

        <div className="w-[250px]">
          <Button type="button" className="btn-blue btn-lg w-full flex gap-4">
            <FaCloudUploadAlt className="text-[25px] text-white" />
            Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddCategory;
