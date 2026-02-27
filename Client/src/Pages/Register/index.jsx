import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./style.css";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(MyContext);
  const history = useNavigate();

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

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

    if (!formFields.name) {
      context.openAlertBox("error", "Please Enter Full Name!");
      return;
    }

    if (!formFields.email) {
      context.openAlertBox("error", "Please Enter Email!");
      return;
    }

    if (!formFields.password) {
      context.openAlertBox("error", "Please Enter Password!");
      return;
    }

    const response = await postData("/api/user/register", formFields);

    if (response) {
      // console.log(response);
      
      if (response?.error !== true) {
        setIsLoading(false);
        context.openAlertBox("success", response.message);
        localStorage.setItem("userEmail", formFields.email)
        setFormFields({
          name: "",
          email: "",
          password: "",
        });
        
        history("/verify")
      } else {
        context.openAlertBox("success", response.message);
        setIsLoading(false);
      }
    }
  };

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
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
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
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="form-group w-full mb-5 relative">
                  <TextField
                    type={isShowPassword === false ? "password" : "text"}
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    className="w-full"
                    value={formFields.password}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
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
                  <Button
                    type="submit"
                    disabled={!validateValue}
                    className="btn-org btn-lg w-full flex gap-3"
                  >
                    {isLoading === true ? (
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

      {/* <br />
      <br />
      <br /> */}
    </section>
  );
};

export default Register;
