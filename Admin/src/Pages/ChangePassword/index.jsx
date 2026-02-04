import Button from "@mui/material/Button";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const ChangePassword = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [isShowPassword2, setIsShowPassword2] = React.useState(false);

  return (
    <section className="bg-[#ffffff] w-full min-h-screen">
      <header className="w-full fixed top-0 left-0  px-4 py-2 flex items-center justify-between">
        <Link to="/">
          <img
            src="sante.png"
            alt="logo"
            className="w-50 block"
            style={{
              backgroundColor: "transparent",
              filter: "drop-shadow(0 0 0 transparent)",
            }}
          />
        </Link>

        <div className="flex items-center gap-2">
          <NavLink to="/login" activeClassName="isActive">
            <Button className="rounded-full! text-[rgba(0,0,0,0.8)]! px-5! gap-2">
              <CgLogIn className="text-[18px]" /> Login
            </Button>
          </NavLink>
          <NavLink to="/signUp" activeClassName="isActive">
            <Button className="rounded-full! text-[rgba(0,0,0,0.8)]! px-5! gap-1">
              <FaRegUser className="text-[15px]" /> Sign Up
            </Button>
          </NavLink>
        </div>
      </header>

      <div className="loginBox card w-[42%] h-auto pb-20 mx-auto pt-25">
        <div className="text-center">
          <img
            src="https://isomorphic-furyroad.vercel.app/_next/static/media/logo-short.18ca02a8.svg"
            alt="logo"
            className="m-auto"
            style={{
              backgroundColor: "transparent",
              filter: "drop-shadow(0 0 0 transparent)",
            }}
          />
        </div>

        <h1 className="text-center text-[35px] font-bold mt-4">
          Welcome Back!,
          <br />
          Please Change Your Password
        </h1>

        <br />
        <br />
          <div className="w-full flex items-center justify-center gap-3">
            <span className="flex items-center w-25 h-px bg-[rgba(0,0,0,0.2)]"></span>
            <span className="text-[14px] font-medium">
              Make a strong and secure password.
            </span>
            <span className="flex items-center w-25 h-px bg-[rgba(0,0,0,0.2)]"></span>
          </div>
          <br />

        <form className="w-full px-20 mt-3">
          <div className="form-group mb-2 w-full">
            <h4 className="text-[14px] font-medium mb-1">New Password</h4>
            <div className="w-full relative">
              <input
                type={isShowPassword === false ? "password" : "text"}
                className="w-full h-12.5 border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              />

              <Button
                className="absolute! top-2 right-2.5 z-50 w-8.75! h-8.75! min-w-8.75! rounded-full! text-black!"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === false ? (
                  <IoMdEye className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>
          </div>

          <div className="form-group mb-2 w-full">
            <h4 className="text-[14px] font-medium mb-1">
              Confirm New Password
            </h4>
            <div className="w-full relative">
              <input
                type={isShowPassword2 === false ? "password" : "text"}
                className="w-full h-12.5 border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              />

              <Button
                className="absolute! top-2 right-2.5 z-50 w-8.75! h-8.75! min-w-8.75! rounded-full! text-black!"
                onClick={() => setIsShowPassword2(!isShowPassword2)}
              >
                {isShowPassword2 === false ? (
                  <IoMdEye className="text-[20px] opacity-75" />
                ) : (
                  <IoMdEyeOff className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>
          </div>
          <br />
          <Button className="btn-blue btn-lg w-full">Change Password</Button>
          <br />
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
