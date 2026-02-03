import React from "react";
import { Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import SearchBox from "../../components/SearchBox";

import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import { AiOutlineExport } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

import { Link } from "react-router-dom";
import Progress from "../../Components/Progress";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { MyContext } from "../../App";

const Products = () => {

  const [category, setCategory] = React.useState("");
  const [openCategory, setOpenCategory] = React.useState(false);

  const context  = React.useContext(MyContext);

  const handleChangeFilter = (event) => {
    setCategory(event.target.value);
  };

  const handleCloseCategory = () => {
    setOpenCategory(false);
  };

  const handleOpenCategory = () => {
    setOpenCategory(true);
  };

  return (
    <>

      <div className="flex items-center justify-between px-2 py-0 mt-3">
          <h2 className="text-[20px] font-semibold ">Products</h2>

          <div className="col2 w-[25%] ml-auto flex items-center justify-end gap-2">
            <Button className="btn-green btn-sm capitalize!">
              <AiOutlineExport className="text-[16px]" />
              <span className="pl-2">Export</span>{" "}
            </Button>
            <Button className="btn-blue btn-sm capitalize!" onClick={() => context.setIsOpenFullScreenPanel({open: true, model: 'Add Product'})}>
              <IoMdAdd className="text-[16px]" />
              <span className="pl-2">Add New</span>
            </Button>
          </div>
        </div>
      
      <div className="card my-4 p-3 pt-5 shadow-md sm:rounded-lg bg-white">
        

        <div className="flex items-center w-full px-5  mb-5 justify-between">
          <div className="col1 w-[20%]">
            <h4 className="font-semibold text-[14px] mb-1">Category By</h4>

            <Select
              className="w-full"
              size="small"
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={openCategory}
              onClose={handleCloseCategory}
              onOpen={handleOpenCategory}
              value={category}
              label="Category"
              onChange={handleChangeFilter}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Namkeens</MenuItem>
              <MenuItem value={20}>Biscuits</MenuItem>
              <MenuItem value={30}>Chocolates</MenuItem>
            </Select>
          </div>

          <div className="col2 w-[20%] ml-auto">
            {/* Search Box Component */}
              <SearchBox />
          </div>

          
        </div>

        <div className="relative overflow-x-auto mt-2 rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-heading bg-[#f1f1f1]">
              <tr>
                <th scope="col" className="px-2 py-3 font-semibold width-[10%]">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-1 py-3 font-semibold whitespace-nowrap"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 font-semibold whitespace-nowrap"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Sub Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 font-semibold whitespace-nowrap"
                >
                  Sales
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-neutral-primary  border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-2 py-2">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-1 py-2">
                  <div className="flex items-center gap-4 w-[325px]">
                    <div className="img w-17 h-17 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://m.media-amazon.com/images/I/81lSbNqyg3L._SX679_.jpg"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/45">
                        <h3 className="text-[12px] text-[#666] font-medium leading-3 hover:text-[#ff5252]">
                          Bikaji Tana Tan - Aloo bhujia | 400g Pack | Crunchy &
                          Flavourful | Perfect Tea-time Partner
                        </h3>
                      </Link>

                      <span className="text-[10px] text-[#666] font-bold">
                        Bikaji
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Grocery & Gourmet Foods
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Namkeen
                </td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-medium">
                      $58.00
                    </span>
                    <span className="price text-[#ff5252] font-semibold">
                      $45.00
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <p className="text-[14px] text-[#666] w-30">
                    <span className="font-semibold">234</span>
                    <span className="font-medium pl-1">sale</span>
                  </p>

                  <Progress value={70} type={"success"} />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[22px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Details" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[16px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <tr className="bg-neutral-primary  border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-2 py-2">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-1 py-2">
                  <div className="flex items-center gap-4 w-[325px]">
                    <div className="img w-17 h-17 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://m.media-amazon.com/images/I/81lSbNqyg3L._SX679_.jpg"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/45">
                        <h3 className="text-[12px] text-[#666] font-medium leading-3 hover:text-[#ff5252]">
                          Bikaji Tana Tan - Aloo bhujia | 400g Pack | Crunchy &
                          Flavourful | Perfect Tea-time Partner
                        </h3>
                      </Link>

                      <span className="text-[10px] text-[#666] font-bold">
                        Bikaji
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Grocery & Gourmet Foods
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Namkeen
                </td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-medium">
                      $58.00
                    </span>
                    <span className="price text-[#ff5252] font-semibold">
                      $45.00
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <p className="text-[14px] text-[#666] w-30">
                    <span className="font-semibold">234</span>
                    <span className="font-medium pl-1">sale</span>
                  </p>

                  <Progress value={70} type={"error"} />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[22px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Details" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[16px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <tr className="bg-neutral-primary  border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-2 py-2">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-1 py-2">
                  <div className="flex items-center gap-4 w-[325px]">
                    <div className="img w-17 h-17 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://m.media-amazon.com/images/I/81lSbNqyg3L._SX679_.jpg"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/45">
                        <h3 className="text-[12px] text-[#666] font-medium leading-3 hover:text-[#ff5252]">
                          Bikaji Tana Tan - Aloo bhujia | 400g Pack | Crunchy &
                          Flavourful | Perfect Tea-time Partner
                        </h3>
                      </Link>

                      <span className="text-[10px] text-[#666] font-bold">
                        Bikaji
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Grocery & Gourmet Foods
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Namkeen
                </td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-medium">
                      $58.00
                    </span>
                    <span className="price text-[#ff5252] font-semibold">
                      $45.00
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <p className="text-[14px] text-[#666] w-30">
                    <span className="font-semibold">234</span>
                    <span className="font-medium pl-1">sale</span>
                  </p>

                  <Progress value={70} type={"success"} />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[22px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Details" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[16px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <tr className="bg-neutral-primary  border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-2 py-2">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-1 py-2">
                  <div className="flex items-center gap-4 w-[325px]">
                    <div className="img w-17 h-17 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://m.media-amazon.com/images/I/81lSbNqyg3L._SX679_.jpg"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/45">
                        <h3 className="text-[12px] text-[#666] font-medium leading-3 hover:text-[#ff5252]">
                          Bikaji Tana Tan - Aloo bhujia | 400g Pack | Crunchy &
                          Flavourful | Perfect Tea-time Partner
                        </h3>
                      </Link>

                      <span className="text-[10px] text-[#666] font-bold">
                        Bikaji
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Grocery & Gourmet Foods
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Namkeen
                </td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-medium">
                      $58.00
                    </span>
                    <span className="price text-[#ff5252] font-semibold">
                      $45.00
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <p className="text-[14px] text-[#666] w-30">
                    <span className="font-semibold">234</span>
                    <span className="font-medium pl-1">sale</span>
                  </p>

                  <Progress value={70} type={"warning"} />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[22px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Details" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[16px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <tr className="bg-neutral-primary  border-b border-[rgba(0,0,0,0.1)]">
                <td className="px-2 py-2">
                  <div className="w-15">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>

                <td className="px-1 py-2">
                  <div className="flex items-center gap-4 w-[325px]">
                    <div className="img w-17 h-17 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://m.media-amazon.com/images/I/81lSbNqyg3L._SX679_.jpg"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/45">
                        <h3 className="text-[12px] text-[#666] font-medium leading-3 hover:text-[#ff5252]">
                          Bikaji Tana Tan - Aloo bhujia | 400g Pack | Crunchy &
                          Flavourful | Perfect Tea-time Partner
                        </h3>
                      </Link>

                      <span className="text-[10px] text-[#666] font-bold">
                        Bikaji
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Grocery & Gourmet Foods
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Namkeen
                </td>
                <td className="px-6 py-2">
                  <div className="flex gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-medium">
                      $58.00
                    </span>
                    <span className="price text-[#ff5252] font-semibold">
                      $45.00
                    </span>
                  </div>
                </td>
                <td className="px-2 py-2">
                  <p className="text-[14px] text-[#666] w-30">
                    <span className="font-semibold">234</span>
                    <span className="font-medium pl-1">sale</span>
                  </p>

                  <Progress value={70} type={"success"} />
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-2">
                    <Tooltip title="Edit Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[22px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="View Details" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <IoEyeOutline className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Remove Product" placement="top">
                      <Button
                        className="w-[35px]! h-[35px]! min-w-[35px]! rounded-full! hover:bg-[#f1f1f1]!"
                        style={{ minWidth: "35px" }}
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[16px]" />
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>

              <div className="mb-2"></div>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end pt-5 pb-5 px-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </>
  );
};

export default Products;
