import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";

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
    <section className="p-5">
      <form className="form py-3 p-8">
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
              rows={4}
              className="w-full h-35 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
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
      </form>
    </section>
  );
};

export default AddProduct;
