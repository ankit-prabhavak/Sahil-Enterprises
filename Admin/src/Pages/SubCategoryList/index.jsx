import React from "react";
import { Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import Chip from "@mui/material/Chip";
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import { AiOutlineExport } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

import { Link } from "react-router-dom";

import { MyContext } from "../../App";

const CategoryList = () => {
  const context = React.useContext(MyContext);

  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[20px] font-semibold ">Sub Category List</h2>

        <div className="col2 w-[30%] ml-auto flex items-center justify-end gap-2">
          <Button className="btn-green btn-sm capitalize!">
            <AiOutlineExport className="text-[16px]" />
            <span className="pl-2">Export</span>{" "}
          </Button>
          <Button
            className="btn-blue btn-sm capitalize!"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add New Sub Category",
              })
            }
          >
            <IoMdAdd className="text-[16px]" />
            <span className="pl-2">Add Sub Category</span>
          </Button>
        </div>
      </div>

      <div className="card my-4 p-2 shadow-md sm:rounded-lg bg-white">
        <div className="relative overflow-x-auto rounded-md">
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
                  Image
                </th>
                <th
                  scope="col"
                  className="px-1 py-3 font-semibold whitespace-nowrap"
                >
                  Category Name
                </th>
                <th
                  scope="col"
                  className="px-1 py-3 font-semibold whitespace-nowrap"
                >
                  Sub Category Name
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
                  <div className="flex items-center gap-4 w-[125px]">
                    <div className="img w-full h-auto rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752398821.png"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <Chip label="Cleaning & Laundry" />
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <Chip label="Detergent Powder" color="primary" />
                    <Chip label="Dishwash Liquid / Bar" color="primary" />
                  </span>
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
                  <div className="flex items-center gap-4 w-[125px]">
                    <div className="img w-full h-auto rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752639337.png"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <Chip label="Stationary & Electrical" />
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <Chip label="Pens & Pencils" color="primary" />
                    <Chip label="Notebooks & Files" color="primary" />
                  </span>
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
                  <div className="flex items-center gap-4 w-[125px]">
                    <div className="img w-full h-auto rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752514120.png"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <Chip label="Hair & Body Care" />
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <Chip label="Shampoo" color="primary" />
                    <Chip label="Conditioner" color="primary" />
                    <Chip label="Body Wash" color="primary" />
                  </span>
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
                  <div className="flex items-center gap-4 w-[125px]">
                    <div className="img w-full h-auto rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://tbn-prod-assets.s3.ap-south-1.amazonaws.com/MENU_1752752571216.png"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <Chip label="Instant Packaged Food" />
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <Chip label="Packets" color="primary" />
                    <Chip label="Canned Food" color="primary" />
                    <Chip label="Ready to Eat" color="primary" />
                  </span>
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

              <div className="mb"></div>
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

export default CategoryList;
