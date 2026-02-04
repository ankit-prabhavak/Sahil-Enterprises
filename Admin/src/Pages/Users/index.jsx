import React from "react";

import SearchBox from "../../components/SearchBox";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import { SlCalender } from "react-icons/sl";

import { Link } from "react-router-dom";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

const Users = () => {
  return (
    <>
      <div className="card my-4 p-3 pt-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full px-5  mb-5 justify-between">
          <div className="col1 w-[20%]">
            <h2 className="font-semibold text-[20px] mb-1">Users</h2>
          </div>

          <div className="col2 w-[40%] ml-auto">
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
                  User Image
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 font-semibold whitespace-nowrap"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-semibold whitespace-nowrap"
                >
                  User Since
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
                    <div className="img w-20 h-20 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="http://localhost:5174/pikachu.webp"
                          alt="user img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Ankit Kumar
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead className="text-[20px]" />
                    ankitabcd1718@gmail.com
                  </span>
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <FaPhone className="text-[16px]" />
                    +91 9876543210
                  </span>
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <SlCalender className="text-[16px]" />
                    19 Jan 2023
                  </span>
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
                    <div className="img w-20 h-20 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="http://localhost:5174/dora.webp"
                          alt="user img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Ramesh Kumar
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead className="text-[20px]" />
                    rameshabcd1718@gmail.com
                  </span>
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <FaPhone className="text-[16px]" />
                    +91 9876543210
                  </span>
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <SlCalender className="text-[16px]" />
                    12 Jan 2023
                  </span>
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
                    <div className="img w-20 h-20 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="http://localhost:5174/oggy.webp"
                          alt="user img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Aryan Singh
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead className="text-[20px]" />
                    aryanabcd1718@gmail.com
                  </span>
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <FaPhone className="text-[16px]" />
                    +91 9876543210
                  </span>
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <SlCalender className="text-[16px]" />
                    15 Jan 2023
                  </span>
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
                    <div className="img w-20 h-20 rounded-md overflow-hidden group">
                      <Link to="/product/45">
                        <img
                          src="http://localhost:5174/ninja.webp"
                          alt="user img"
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  Ashish Sharma
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead className="text-[20px]" />
                    ashishabcd1718@gmail.com
                  </span>
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <FaPhone className="text-[16px]" />
                    +91 9876543210
                  </span>
                </td>
                <td className="px-6 py-2 text-[14px] text-[#666] font-medium whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    <SlCalender className="text-[16px]" />
                    01 Jan 2023
                  </span>
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

export default Users;
