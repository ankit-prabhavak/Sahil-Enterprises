import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import Divider from "@mui/material/Divider";
import { MdLogout } from "react-icons/md";
import { PiHeadphones } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { MyContext } from "../../App";

const Sidebar = () => {
  const [submenuIdx, setSubmenuIdx] = React.useState(null);

  const isOpenSubmenu = (index) => {
    if (submenuIdx === index) {
      setSubmenuIdx(null);
    } else {
      setSubmenuIdx(index);
    }
  };

  const context = React.useContext(MyContext);

  return (
    <>
      <div
        className={`sidebar py-2 px-4 fixed top-0 left-0 bg-white ${context.isSidebarOpen === true ? "w-[18%]" : "w-0"} h-full border-r border-[rgba(0,0,0,0.1)]`}
      >
        <div className="py-2 w-full">
          <Link to="/">
            <img src="/Sahil.png" alt="logo" className="w-[140px]" />
          </Link>
        </div>

        <Divider />

        {/* <div className="w-full p-5 flex items-center justify-center flex-col">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-3 relative group">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/027/554/917/small/shinchan-sleepy-face-illustration-free-vector.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover cursor-pointer group-hover:scale-105"
            />
          </div>

          <h4 className="text-[18px] font-semibold leading-4">Ankit Kumar</h4>
          <h6 className="text-[12px] font-medium">username@example.com</h6>
        </div> */}

        <ul className="mt-4">
          <li>
            <Link to="/">
              <Button className="w-full capitalize! justify-start! flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]! font-medium! items-center py-2! hover:bg-[#f1f1f1]!">
                <RxDashboard className="text-[20px]" />
                <span>Dashboard</span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className="w-full capitalize! justify-start! flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]! font-medium! items-center py-2! hover:bg-[#f1f1f1]!"
              onClick={() => isOpenSubmenu(1)}
            >
              <FaRegImages className="text-[20px]" />
              <span>Home Slides</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    submenuIdx === 1 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={submenuIdx === 1 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Link to="/homeSliderBanner/list">
                    <Button className="text-[rgba(0,0,0,0.7)]! w-full! capitalize! justify-start! text-[13px]! font-medium! pl-9! flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Home Banner List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="text-[rgba(0,0,0,0.7)]! w-full! capitalize! justify-start! text-[13px]! font-medium! pl-9! flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add Home Slider Banner",
                      })
                    }
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add Home Banner Slide
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Link to="/users">
              <Button className="w-full capitalize! justify-start! flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]! font-medium! items-center py-2! hover:bg-[#f1f1f1]!">
                <LuUsers className="text-[20px]" />
                <span>Users</span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className="w-full capitalize! justify-start! flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]! font-medium! items-center py-2! hover:bg-[#f1f1f1]!"
              onClick={() => isOpenSubmenu(2)}
            >
              <RiProductHuntLine className="text-[20px]" />
              <span>Products</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    submenuIdx === 2 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={submenuIdx === 2 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Link to="/products">
                    <Button className="text-[rgba(0,0,0,0.7)]! w-full! capitalize! justify-start! text-[13px]! font-medium! pl-9! flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Product List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="text-[rgba(0,0,0,0.7)]! w-full! capitalize! justify-start! text-[13px]! font-medium! pl-9! flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add Product",
                      })
                    }
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Upload Product
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Button
              className="w-full capitalize! justify-start! flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]! font-medium! items-center py-2! hover:bg-[#f1f1f1]!"
              onClick={() => isOpenSubmenu(3)}
            >
              <TbCategory className="text-[20px]" />
              <span>Category</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    submenuIdx === 3 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={submenuIdx === 3 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Link to="/category/list/">
                    <Button className="text-[rgba(0,0,0,0.7)]! w-full! capitalize! justify-start! text-[13px]! font-medium! pl-9! flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Category List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="text-[rgba(0,0,0,0.7)]! w-full! capitalize! justify-start! text-[13px]! font-medium! pl-9! flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add New Category",
                      })
                    }
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add Category
                  </Button>
                </li>
                <li className="w-full">
                  <Link to="/subCategory/list">
                    <Button className="text-[rgba(0,0,0,0.7)]! w-full! capitalize! justify-start! text-[13px]! font-medium! pl-9! flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Sub Category List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="text-[rgba(0,0,0,0.7)]! w-full! capitalize! justify-start! text-[13px]! font-medium! pl-9! flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add New Sub Category",
                      })
                    }
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add Sub Category
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Link to="/orders">
              <Button className="w-full capitalize! justify-start! flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]! font-medium! items-center py-2! hover:bg-[#f1f1f1]!">
                <IoBagCheckOutline className="text-[20px]" />
                <span>Orders</span>
              </Button>
            </Link>
          </li>
          <Divider className="mb-2! mt-2!" />
          <li>
            <Link to="/settings">
              <Button className="w-full capitalize! justify-start! flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]! font-medium! items-center py-2! hover:bg-[#f1f1f1]!">
                <IoSettingsOutline className="text-[20px]" />
                <span>Settings</span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/help">
              <Button className="w-full capitalize! justify-start! flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]! font-medium! items-center py-2! hover:bg-[#f1f1f1]!">
                <PiHeadphones className="text-[20px]" />
                <span>Help & Support</span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/logout">
              <Button className="w-full capitalize! justify-start! flex gap-3 text-[14px] text-[rgba(0,0,0,0.8)]! font-medium! items-center py-2! hover:bg-[#f1f1f1]!">
                <MdLogout className="text-[20px]" />
                <span>Logout</span>
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
