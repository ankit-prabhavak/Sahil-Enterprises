import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./style.css";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <section className="section bg-white">
      <div className="auth-bg">
        <div className="bg-wave"></div>

        <section className="section py-10 relative z-10">
          <div className="container">
            <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10 relative z-75">
              <div className="flex items-center justify-between">
                <h3 className="text-center text-[24px]  text-black font-semibold">
                  Sign Up
                </h3>
                <img src="/Sahil.png" alt="logo" className="h-[50%] w-[50%]" />
              </div>

              <form className="w-full mt-5">
                <div className="form-group w-full mb-5">
                  <TextField
                    type="text"
                    id="full name"
                    label="Full Name"
                    variant="outlined"
                    className="w-full"
                  />
                </div>
                <div className="form-group w-full mb-5">
                  <TextField
                    type="email"
                    id="email"
                    label="Email Id *"
                    variant="outlined"
                    className="w-full"
                  />
                </div>
                <div className="form-group w-full mb-5 relative">
                  <TextField
                    type={isShowPassword === false ? "password" : "text"}
                    id="password"
                    label="Password"
                    variant="outlined"
                    className="w-full"
                  />
                  <Button
                    className="absolute! top-2.5 right-2.5 z-50 w-[35px]! h-[35px]! min-w-[35px]! rounded-full! text-black!"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    {isShowPassword === false ? (
                      <IoMdEye className="text-[20px] opacity-75" />
                    ) : (
                      <IoMdEyeOff className="text-[20px] opacity-75" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center w-full mt-3 mb-3">
                  <Button className="btn-org btn-lg w-full">Register</Button>
                </div>

                <p className="text-center text-[14px] text-[#666] font-medium mt-6 mb-6 leading-2.5">
                  Already Registered?{" "}
                  <Link
                    className="link text-[14px] font-semibold text-[#ff5252]"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </p>

                <p className="text-center text-[14px] text-[#666] font-light mb-6 leading-2.5">
                  Or continue with social account
                </p>

                <Button className="flex gap-3 w-full mb-6 bg-[#f1f1f1]! btn-lg text-black!">
                  <FcGoogle className="text-[20px]" />
                  Sign Up with Google
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <br/>
      <br/>
      <br/>
    </section>
  );
};

export default Register;
