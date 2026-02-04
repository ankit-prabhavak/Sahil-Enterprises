import Button from "@mui/material/Button";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";


const ForgotPassword = () => {


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
          Having Trouble Logging In?
          <br />
          Reset Your Password
        </h1>


        <br />

        <form className="w- px-20 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-medium mb-1">Email</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12.5 border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
            />
          </div>


          <Button className="btn-blue btn-lg w-full capitalize!">Reset Password</Button>

          <br />
          <br />

          <div className="text-center flex items-center justify-center gap-4">
            <span className="text-[15px] font-medium">Don't want to reset?</span>
            <Link to="/login" className="text-[#3872fa] text-[15px] font-bold hover:underline hover:text-gray-700">
              Sign In
            </Link>
          </div>


        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
