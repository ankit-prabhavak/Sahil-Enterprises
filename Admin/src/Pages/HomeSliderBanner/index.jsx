import React from "react";
import { Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";

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

const HomeSliderBanner = () => {
  const context = React.useContext(MyContext);

  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[20px] font-semibold ">Home Slider Banners</h2>

        <div className="col2 w-[25%] ml-auto flex items-center justify-end gap-2">
          <Button className="btn-green btn-sm capitalize!">
            <AiOutlineExport className="text-[16px]" />
            <span className="pl-2">Export</span>{" "}
          </Button>
          <Button
            className="btn-blue btn-sm capitalize!"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Home Slider Banner",
              })
            }
          >
            <IoMdAdd className="text-[16px]" />
            <span className="pl-2">Add Home Slide</span>
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
                    <div className="img w-full h-auto rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://tbn-prod-assets.s3.dualstack.ap-south-1.amazonaws.com/UI_Enhancement/Winter%20Banner%201200-400%20Web%20GIF/Personal%20care.gif"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
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
                    <div className="img w-full h-auto rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://tbn-prod-assets.s3.dualstack.ap-south-1.amazonaws.com/UI_Enhancement/Winter%20Banner%201200-400%20Web%20GIF/Beverages.gif"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
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
                    <div className="img w-full h-auto rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://tbn-prod-assets.s3.dualstack.ap-south-1.amazonaws.com/UI_Enhancement/Winter%20Banner%201200-400%20Web%20GIF/Personal%20care.gif"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
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
                    <div className="img w-full h-auto rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="https://tbn-prod-assets.s3.dualstack.ap-south-1.amazonaws.com/UI_Enhancement/Winter%20Banner%201200-400%20Web%20GIF/Personal%20care.gif"
                          alt="product img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
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

export default HomeSliderBanner;
