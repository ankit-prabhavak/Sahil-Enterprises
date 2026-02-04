import Button from "@mui/material/Button";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";

import OtpBox from "../../components/OtpBox";

const VerifyAccount = () => {
  const [otp, setOtp] = React.useState("");
  const handleChange = (value) => {
    setOtp(value);
  };

  const verifyOtp = (e) => {
    // Add OTP verification logic here
    e.preventDefault();
    alert(`Verifying OTP: ${otp}`);
  };

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
          Please verify your Email
        </h1>

        <br />
         <div className="card w-[400px] m-auto  p-5 px-10">
              <div className="flex items-center flex-col justify-between">

        <p className="text-center text-[#666]">
          OTP sent to{" "}
          <span className="text-[#3872fa] font-medium">user@example.com</span>
          <p>Please enter the OTP below to verify.</p>
        </p>

        <form className="w-full mt-5" onSubmit={verifyOtp}>
          <OtpBox length={6} onChange={handleChange} />

          <div className="form-group w-full mt-8">
            <button className="btn-blue btn-lg w-full py-3 rounded-md cursor-pointer uppercase">
              Verify OTP
            </button>
          </div>

          <p className="text-[#666] mt-4 mb-4">
            Didn't receive the OTP?{" "}
            <a className="link cursor-pointer text-[#3872fa] font-medium">
              Resend OTP
            </a>
          </p>
        </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyAccount;
