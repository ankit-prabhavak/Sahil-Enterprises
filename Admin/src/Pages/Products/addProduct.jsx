import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = () => {
  const [productCategory, setProductCategory] = React.useState("");
  const [productSubcategory, setProductSubcategory] = React.useState("");
  const [productIsFeatured, setProductIsFeatured] = React.useState("");
  const [productSaleType, setProductSaleType] = React.useState("");
  const [productWeight, setProductWeight] = React.useState("");
  const [productSize, setProductSize] = React.useState("");

  const handleChangeProductCategory = (event) => {
    setProductCategory(event.target.value);
  };
  const handleChangeProductSubcategory = (event) => {
    setProductSubcategory(event.target.value);
  };
  const handleChangeProductIsFeatured = (event) => {
    setProductIsFeatured(event.target.value);
  };
  const handleChangeProductSaleType = (event) => {
    setProductSaleType(event.target.value);
  };

  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8">
        <div className="scroll max-h-[70vh] overflow-y-scroll pr-4">
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Name
            </h3>
            <input
              type="text"
              className="w-full h-10 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Description
            </h3>
            <textarea
              rows={5}
              className="w-full h-40 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mb-3 gap-4">
          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Category
            </h3>
            <Select
              labelId="demo-simple-select-label"
              size="small"
              id="ProductCategoryDropdown"
              className="w-full"
              value={productCategory}
              label="Product Category"
              onChange={handleChangeProductCategory}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={10}>Namkeens</MenuItem>
              <MenuItem value={20}>Biscuits</MenuItem>
              <MenuItem value={30}>Chocolates</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Subcategory
            </h3>
            <Select
              labelId="demo-simple-select-label"
              size="small"
              id="ProductSubcategoryDropdown"
              className="w-full"
              value={productSubcategory}
              label="Product Subcategory"
              onChange={handleChangeProductSubcategory}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={10}>Namkeens</MenuItem>
              <MenuItem value={20}>Biscuits</MenuItem>
              <MenuItem value={30}>Chocolates</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Price
            </h3>
            <input
              type="number"
              className="w-full h-10 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>

          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Old Price
            </h3>
            <input
              type="number"
              className="w-full h-10 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mb-3 gap-4">
          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Is Featured?
            </h3>
            <Select
              labelId="demo-simple-select-label"
              size="small"
              id="ProductFeaturedDropdown"
              className="w-full"
              value={productIsFeatured}
              label="Product Is Featured?"
              onChange={handleChangeProductIsFeatured}
            >
              <MenuItem value={20}>True</MenuItem>
              <MenuItem value={30}>False</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Stock
            </h3>
            <input
              type="text"
              className="w-full h-10 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Brand
            </h3>
            <input
              type="text"
              className="w-full h-10 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Discount
            </h3>
            <input
              type="text"
              className="w-full h-10 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mb-3 gap-4">
          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Sale Type
            </h3>
            <Select
              labelId="demo-simple-select-label"
              size="small"
              id="ProductSaleTypeDropdown"
              className="w-full"
              value={productSaleType}
              label="Product Sale Type"
              onChange={handleChangeProductSaleType}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={10}>Packet</MenuItem>
              <MenuItem value={20}>Box</MenuItem>
              <MenuItem value={30}>Pieces</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Weight
            </h3>
            <Select
              labelId="demo-simple-select-label"
              size="small"
              id="ProductWeightDropdown"
              className="w-full"
              value={productWeight}
              label="Product Weight"
              onChange={handleChangeProductWeight}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={10}>100g</MenuItem>
              <MenuItem value={20}>500g</MenuItem>
              <MenuItem value={30}>1kg</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Size
            </h3>
            <Select
              labelId="demo-simple-select-label"
              size="small"
              id="ProductSizeDropdown"
              className="w-full"
              value={productSize}
              label="Product Size"
              onChange={handleChangeProductSize}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={10}>25x12</MenuItem>
              <MenuItem value={20}>25x25</MenuItem>
              <MenuItem value={30}>5x100</MenuItem>
            </Select>
          </div>
          <div className="col">
            <h3 className="text-[14px] font-medium mb-1 text-black">
              Product Ratings
            </h3>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
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


        <hr className="text-[rgba(0,0,0,0.1)] mt-4"/>
        <br/>

        <Button type="button" className="btn-blue btn-lg w-full flex gap-4"><FaCloudUploadAlt className="text-[25px] text-white" />Publish and View</Button>
      </form>
    </section>
  );
};

export default AddProduct;
