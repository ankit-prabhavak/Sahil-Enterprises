import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./style.css";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utils/api";
import { useState } from "react";

const ForgotPassword = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] =
    React.useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = React.useState({
    newPassword: "",
    confirmPassword: "",
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

    if (!formFields.newPassword || !formFields.confirmPassword) {
      context.openAlertBox("error", "All fields are required!");
      return;
    }

    if (formFields.newPassword !== formFields.confirmPassword) {
      context.openAlertBox("error", "Passwords do not match!");
      return;
    }

    setIsLoading(true);

    const response = await postData("/api/user/reset-password", {
      email: localStorage.getItem("userEmail"),
      newPassword: formFields.newPassword,
      confirmPassword: formFields.confirmPassword,
    });

    setIsLoading(false);

    if (response?.error === false) {
      context.openAlertBox("success", response.message);
      localStorage.removeItem("userEmail");
      localStorage.removeItem("actionType");
      history("/login");
    } else {
      context.openAlertBox("error", response.message);
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
                  src="/forgot.jpg"
                  alt="forgot"
                  className="h-[50%] w-[50%]"
                />

                <h3 className="text-center text-[24px]  text-black font-semibold">
                  Reset Your Password
                </h3>

                <p className="text-center text-[13px] text-gray-600 mt-1 mb-1">
                  Please create a strong new password.
                </p>
              </div>

              <form className="w-full mt-2.5" onSubmit={handleSubmit}>
                <div className="form-group w-full mb-5 relative">
                  <TextField
                    type={isShowPassword === false ? "password" : "text"}
                    id="password"
                    label="New Password"
                    variant="outlined"
                    className="w-full"
                    name="newPassword"
                    value={formFields.newPassword}
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
                <div className="form-group w-full mb-5 relative">
                  <TextField
                    type={isShowConfirmPassword === false ? "password" : "text"}
                    id="confirm_password"
                    label="Confirm Password"
                    variant="outlined"
                    className="w-full"
                    name="confirmPassword"
                    value={formFields.confirmPassword}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                  <Button
                    className="absolute! top-2.5 right-2.5 z-50 w-[35px]! h-[35px]! min-w-[35px]! rounded-full! text-black!"
                    onClick={() =>
                      setIsShowConfirmPassword(!isShowConfirmPassword)
                    }
                  >
                    {isShowConfirmPassword === false ? (
                      <IoMdEye className="text-[20px] opacity-75" />
                    ) : (
                      <IoMdEyeOff className="text-[20px] opacity-75" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center w-full mt-3 mb-1.5">
                  <Button
                    className="btn-org btn-lg w-full"
                    type="submit"
                    disabled={!validateValue}
                  >
                    {isLoading === true ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      "Change Password"
                    )}
                  </Button>
                </div>

                <p className="text-center text-[13px] text-gray-600 mt-2">
                  Remember your password?{" "}
                  <Link to="/login" className="text-[#ff5252] font-medium">
                    Login
                  </Link>
                </p>

                <div className="text-center mt-2">
                  <Link
                    to="/support"
                    className="text-[12px] text-gray-500 underline"
                  >
                    Need help?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
};

export default ForgotPassword;
