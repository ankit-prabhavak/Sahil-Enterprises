import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { RiHandbagLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import { LiaGiftSolid } from "react-icons/lia";
import { TfiWallet } from "react-icons/tfi";
import { LiaHeadphonesSolid } from "react-icons/lia";
import { MyContext } from "../../App";
import { LuMapPin } from "react-icons/lu";


const MyAccountSideBar = () => {
  const context = React.useContext(MyContext)

  return (
    <div className="card bg-white shadow-md rounded-md">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-3 relative group">
          {context?.userData.avatar !== "" ? (
            <img
              src={context?.userData.avatar}
              alt="Profile Image"
              className="w-full h-full object-cover cursor-pointer group-hover:scale-105"
            />
          ) : (
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/027/554/917/small/shinchan-sleepy-face-illustration-free-vector.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover cursor-pointer group-hover:scale-105"
            />
          )}
        </div>

        <h4 className="text-[18px] font-semibold mb-1">
          {context?.userData.name}
        </h4>
        <h6 className="text-[12px] font-medium">{context?.userData.email}</h6>
      </div>
      <Divider className="mb-0!" />
      <ul className="list-none pb-5 myAccountTabs">
        <li className="w-full">
          <NavLink to="/my-account" exact={true} activeClassName="active">
            <Button className="w-full text-left! py-2! px-5! justify-start! capitalize! text-[rgba(0,0,0,0.8)]! rounded-none! flex items-center gap-2">
              <FaRegUser className="text-[18px]" />
              My Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/address" exact={true} activeClassName="active">
            <Button className="w-full text-left! py-2! px-5! justify-start! capitalize! text-[rgba(0,0,0,0.8)]! rounded-none! flex items-center gap-2">
              <LuMapPin className="text-[18px]" />
              Address
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-list" exact={true} activeClassName="active">
            <Button className="w-full text-left! py-2! px-5! justify-start! capitalize! text-[rgba(0,0,0,0.8)]! rounded-none! flex items-center gap-2">
              <IoMdHeartEmpty className="text-[18px]" />
              My List
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-orders" exact={true} activeClassName="active">
            <Button className="w-full text-left! py-2! px-5! justify-start! capitalize! text-[rgba(0,0,0,0.8)]! rounded-none! flex items-center gap-2">
              <RiHandbagLine className="text-[18px]" />
              My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-payments" exact={true} activeClassName="active">
            <Button className="w-full text-left! py-2! px-5! justify-start! capitalize! text-[rgba(0,0,0,0.8)]! rounded-none! flex items-center gap-2">
              <TfiWallet className="text-[18px]" />
              Payments
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-help" exact={true} activeClassName="active">
            <Button className="w-full text-left! py-2! px-5! justify-start! capitalize! text-[rgba(0,0,0,0.8)]! rounded-none! flex items-center gap-2">
              <LiaHeadphonesSolid className="text-[18px]" />
              Help Center
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/logout" exact={true} activeClassName="active">
            <Button className="w-full text-left! py-2! px-5! justify-start! capitalize! text-[rgba(0,0,0,0.8)]! rounded-none! flex items-center gap-2">
              <IoIosLogOut className="text-[18px]" />
              Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MyAccountSideBar;
