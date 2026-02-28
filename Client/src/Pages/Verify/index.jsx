import React, { useContext, useState } from "react";
import "./style.css";
import OtpBox from "../../components/OtpBox";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [otp, setOtp] = React.useState("");
  const handleChange = (value) => {
    setOtp(value);
  };

  const context = useContext(MyContext);
  const history = useNavigate();

  const verifyOtp = (e) => {
    // Add OTP verification logic here
    e.preventDefault();

    const action = localStorage.getItem("actionType");

    if (action !== "forgot-password") {
      // alert(`Verifying OTP: ${otp}`);
      postData("/api/user/verifyEmail", {
        email: localStorage.getItem("userEmail"),
        otp: otp,
      }).then((response) => {
        if (response?.error === false) {
          context.openAlertBox("success", response.message);
          localStorage.removeItem("userEmail");
          history("/login");
        } else {
          context.openAlertBox("error", response.message);
        }
      });
    } else {
      // alert(`Verifying OTP: ${otp}`);
      postData("/api/user/verify-forgot-password-otp", {
        email: localStorage.getItem("userEmail"),
        otp: otp,
      }).then((response) => {
        if (response?.error === false) {
          context.openAlertBox("success", response.message);
          // localStorage.removeItem("userEmail");
          history("/forgot-password");
        } else {
          context.openAlertBox("error", response.message);
        }
      });
    }
  };

  return (
    <section className="section bg-white">
      <div className="auth-bg">
        <div className="bg-wave"></div>

        <section className="section py-10  relative z-10">
          <div className="container">
            <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
              <div className="flex items-center flex-col justify-between">
                <img
                  src="/shield.png"
                  alt="shield"
                  className="w-20 h-20 mb-4"
                />

                <h3 className="text-center text-[24px]  text-black font-semibold mt-4 mb-5">
                  Verify OTP
                </h3>
              </div>

              <p className="text-center text-[#666]">
                OTP sent to{" "}
                <span className="text-[#ff5252] font-medium">
                  {localStorage.getItem("userEmail")}
                </span>
                <p>Please enter the OTP below to verify.</p>
              </p>

              <form className="w-full mt-5" onSubmit={verifyOtp}>
                <OtpBox length={6} onChange={handleChange} />

                <div className="form-group w-full mt-8">
                  <button className="btn-org w-full py-3 rounded-md cursor-pointer">
                    Verify OTP
                  </button>
                </div>

                <p className="text-[#666] mt-4 mb-4">
                  Didn't receive the OTP?{" "}
                  <a className="link cursor-pointer text-[#ff5252] font-medium">
                    Resend OTP
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* <br />
      <br />
      <br /> */}
    </section>
  );
};

export default Verify;
