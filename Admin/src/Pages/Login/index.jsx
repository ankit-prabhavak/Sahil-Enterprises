import Button from "@mui/material/Button";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [loadingGoogle, setLoadingGoogle] = React.useState(false);
  const [isShowPassword, setIsShowPassword] = React.useState(false);

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

        <form className="w-full px-20 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-medium mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-12.5 border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
            />
          </div>

          <div className="form-group mb-2 w-full">
            <h4 className="text-[14px] font-medium mb-1">Password</h4>
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

          <div className="form-group mb-4 p-1  w-full flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked size="small" />}
              label="Remember Me"
            />

            <Link
              to="/forgot-password"
              className="text-[#3872fa] font-semibold text-[14px] hover:underline hover:text-[#666]"
            >
              Forgot Password?
            </Link>
          </div>

          <Button className="btn-blue btn-lg w-full">Sign In</Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
