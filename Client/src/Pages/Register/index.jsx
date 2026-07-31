import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CircularProgress from "@mui/material/CircularProgress";
import "./style.css";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();

  const validateValue = Object.values(formFields).every((el) => el);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formFields.name) {
      context.openAlertBox("error", "Please Enter Full Name!");
      setIsLoading(false);
      return;
    }

    if (!formFields.email) {
      context.openAlertBox("error", "Please Enter Email!");
      setIsLoading(false);
      return;
    }

    if (!formFields.password) {
      context.openAlertBox("error", "Please Enter Password!");
      setIsLoading(false);
      return;
    }

    const response = await postData("/api/user/register", formFields);

    if (response) {
      if (response?.error !== true) {
        setIsLoading(false);
        context.openAlertBox("success", response.message);
        localStorage.setItem("userEmail", formFields.email);
        setFormFields({
          name: "",
          email: "",
          password: "",
        });
        history("/verify");
      } else {
        context.openAlertBox("error", response.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="section bg-white min-h-screen">
      <div className="auth-bg min-h-screen">
        <div className="bg-wave"></div>

        <section className="section py-6 sm:py-10 relative z-10 min-h-screen flex items-center justify-center">
          <div className="container px-3 sm:px-4 w-full">
            <div className="card shadow-md w-full max-w-[400px] m-auto rounded-md bg-white p-4 sm:p-5 sm:px-10 relative z-75">
              <div className="flex items-center justify-between gap-3 mb-4">
                <Button
                  onClick={() => history(-1)}
                  className="!min-w-[40px] !w-[40px] !h-[40px] !rounded-full !bg-[#f1f1f1] !text-black"
                >
                  <ArrowBackIosNewIcon className="!text-[16px]" />
                </Button>

                <h3 className="text-center text-[20px] sm:text-[24px] text-black font-semibold flex-1">
                  Sign Up
                </h3>

                <img
                  src="/Sahil.png"
                  alt="logo"
                  className="h-[40px] sm:h-[50px] w-auto"
                />
              </div>

              <form className="w-full mt-5" onSubmit={handleSubmit}>
                <div className="form-group w-full mb-5">
                  <TextField
                    type="text"
                    id="full name"
                    name="name"
                    label="Full Name"
                    variant="outlined"
                    className="w-full"
                    value={formFields.name}
                    disabled={isLoading}
                    onChange={onChangeInput}
                    fullWidth
                  />
                </div>

                <div className="form-group w-full mb-5">
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    label="Email Id *"
                    variant="outlined"
                    className="w-full"
                    value={formFields.email}
                    disabled={isLoading}
                    onChange={onChangeInput}
                    fullWidth
                  />
                </div>

                <div className="form-group w-full mb-5 relative">
                  <TextField
                    type={isShowPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    className="w-full"
                    value={formFields.password}
                    disabled={isLoading}
                    onChange={onChangeInput}
                    fullWidth
                  />
                  <Button
                    type="button"
                    className="absolute! top-2.5 right-2.5 z-50 w-[35px]! h-[35px]! min-w-[35px]! rounded-full! text-black!"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    {isShowPassword ? (
                      <IoMdEyeOff className="text-[20px] opacity-75" />
                    ) : (
                      <IoMdEye className="text-[20px] opacity-75" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center w-full mt-3 mb-3">
                  <Button
                    type="submit"
                    disabled={!validateValue}
                    className="btn-org btn-lg w-full flex gap-3"
                  >
                    {isLoading ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      "Register"
                    )}
                  </Button>
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

      <style>{`
        @media (max-width: 640px) {
          .auth-bg {
            background: none !important;
            min-height: 100vh !important;
          }

          .bg-wave {
            display: none !important;
          }

          .section.bg-white {
            background: #fff !important;
          }

          .section.py-6,
          .section.py-10 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          .section.relative.z-10 {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-height: 100vh !important;
          }

          .container {
            width: 100% !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .card {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            border-radius: 16px !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Register;