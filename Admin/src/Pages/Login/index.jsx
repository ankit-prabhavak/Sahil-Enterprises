import Button from "@mui/material/Button";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchDataFromAPI, postData } from "../../utils/api";
import { useState } from "react";

const Login = () => {
  const [loadingGoogle, setLoadingGoogle] = React.useState(false);
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = React.useState({
    email: "",
    password: "",
  });

  const context = React.useContext(MyContext);
  const history = useNavigate();

  const validateValue = Object.values(formFields).every((el) => el);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!formFields.email) {
      context.openAlertBox("error", "Please Enter Email!");
      return;
    }

    if (!formFields.password) {
      context.openAlertBox("error", "Please Enter Password!");
      return;
    }

    const response = await postData("/api/user/login", formFields);

    if (response) {
      // console.log(response);

      if (response?.success == true) {
        setIsLoading(false);
        context.openAlertBox("success", response.message);

        setFormFields({
          email: "",
          password: "",
        });
        // localStorage.setItem("accessToken", response?.data?.accessToken);
        // localStorage.setItem("refreshToken", response?.data?.refreshToken);
        context.setIsLoggedIn(true);
        context.setUserData(response.data.userDetails);

        // Navigate immediately
        history("/");

        // Fetch addresses in background
        fetchDataFromAPI("/api/address/get-address").then((res) => {
          if (res?.success) {
            context.setAddresses(res.data);
          }
        });
      } else {
        context.openAlertBox("error", response.message);
        setIsLoading(false);
      }
    }
  };

  const forgotPassword = () => {
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter your email address");
      return false;
    } else {
      localStorage.setItem("userEmail", formFields.email);
      localStorage.setItem("actionType", "forgot-password");
      // context.openAlertBox("success", `OTP sent to ${formFields.email}`);
      // alert(`Verifying OTP: ${otp}`);
      postData("/api/user/forgot-password", {
        email: formFields.email,
      }).then((response) => {
        if (response?.error === false) {
          context.openAlertBox("success", response.message);
          // localStorage.removeItem("userEmail");
          // show only one message
          // context.openAlertBox("success", `OTP sent to ${formFields.email}`);
          history("/verify-account");
        } else {
          context.openAlertBox("error", response.message);
        }
      });
    }
  };

  function handleClickGoogle() {
    setLoadingGoogle(true);
  }

  const [loadingFb, setLoadingFb] = React.useState(false);

  function handleClickFb() {
    setLoadingFb(true);
  }

  return (
    <section className="bg-[#ffffff] w-full ">
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
          Sign in with your credentials.
        </h1>

        <div className="flex items-center justify-center w-full mt-5 gap-4">
          <Button
            size="small"
            onClick={handleClickGoogle}
            loading={loadingGoogle}
            loadingPosition="end"
            endIcon={<FcGoogle />}
            variant="outlined"
            className="bg-none! py-2! text-[15px]! capitalize! px-5! text-[rgba(0,0,0,0.7)]!"
          >
            Sign In with Google
          </Button>
          <Button
            size="small"
            onClick={handleClickFb}
            loading={loadingFb}
            loadingPosition="end"
            endIcon={<BsFacebook />}
            variant="outlined"
            className="bg-none! py-2! text-[15px]! capitalize! px-5! text-[rgba(0,0,0,0.7)]!"
          >
            Sign In with Facebook
          </Button>
        </div>

        <br />

        <div className="w-full flex items-center justify-center gap-3">
          <span className="flex items-center w-32 h-px bg-[rgba(0,0,0,0.2)]"></span>
          <span className="text-[14px] font-medium">
            Or, Sign in with your email
          </span>
          <span className="flex items-center w-32 h-px bg-[rgba(0,0,0,0.2)]"></span>
        </div>

        <br />

        <form className="w-full px-20 mt-3" onSubmit={handleSubmit}>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-medium mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-12.5 border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              name="email"
              value={formFields.email}
              disabled={isLoading === true ? true : false}
              onChange={onChangeInput}
            />
          </div>

          <div className="form-group mb-2 w-full">
            <h4 className="text-[14px] font-medium mb-1">Password</h4>
            <div className="w-full relative">
              <input
                type={isShowPassword === false ? "password" : "text"}
                className="w-full h-12.5 border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                name="password"
                value={formFields.password}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
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

          <div className="form-group mb-4 p-1  w-full flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Remember Me"
            />

            <a
              onClick={forgotPassword}
              className="text-[#3872fa] cursor-pointer font-semibold text-[14px] hover:underline hover:text-[#666]"
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            disabled={!validateValue}
            className="btn-blue btn-lg w-full"
          >
            {isLoading === true ? (
              <CircularProgress color="inherit" />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
