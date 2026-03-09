import React, { useContext, useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { deleteData, editData, postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";

const Profile = () => {
  const [showChangePassword, setShowChangePassword] = React.useState(false);
  const [gender, setGender] = React.useState("");
  const [previews, setPreviews] = React.useState([]);
  const [uploading, setUploading] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [formFields, setFormFields] = React.useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  const [passFields, setPassFields] = React.useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();

  // const validateValue = Object.values(formFields).every((el) => el);

  const validateValue =
    formFields.firstName && formFields.mobile && formFields.email;

  const validateValue2 =
    passFields.oldPassword &&
    passFields.newPassword &&
    passFields.confirmPassword;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const onChangeInput2 = (e) => {
    const { name, value } = e.target;
    setPassFields(() => {
      return {
        ...passFields,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!formFields.firstName) {
      context.openAlertBox("error", "Please enter first name!");
      setIsLoading(false);
      return;
    }

    if (!formFields.lastName) {
      context.openAlertBox("error", "Please enter last name!");
      setIsLoading(false);
      return;
    }

    if (!formFields.mobile) {
      context.openAlertBox("error", "Please enter phone number!");
      setIsLoading(false);
      return;
    }

    if (!formFields.email) {
      context.openAlertBox("error", "Please enter email!");
      setIsLoading(false);
      return;
    }

    const payload = {
      name: `${formFields.firstName} ${formFields.lastName}`,
      mobile: formFields.mobile,
      email: formFields.email,
    };

    const response = await editData(
      `/api/user/${context?.userData._id}`,
      payload,
    );

    if (response) {
      // console.log(response);

      if (response?.success == true) {
        setIsLoading(false);
        context.openAlertBox("success", response.message);

        context.setIsLoggedIn(true);
        context.setUserData(response.user);
      } else {
        context.openAlertBox("error", response.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (context?.userData) {
      const nameParts = context.userData.name?.split(" ") || [];

      setFormFields({
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        mobile: context.userData.mobile || "",
        email: context.userData.email || "",
      });

      setGender(context.userData.gender || "");
    }
  }, [context?.userData]);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmitChangePassword = async (e) => {
    e.preventDefault();

    setIsLoading2(true);

    if (!passFields.oldPassword) {
      context.openAlertBox("error", "Please enter old password!");
      setIsLoading2(false);
      return;
    }

    if (!passFields.newPassword) {
      context.openAlertBox("error", "Please enter new password!");
      setIsLoading2(false);
      return;
    }

    if (!passFields.confirmPassword) {
      context.openAlertBox("error", "Please enter confirm password!");
      setIsLoading2(false);
      return;
    }

    if (passFields.newPassword !== passFields.confirmPassword) {
      context.openAlertBox(
        "error",
        "New password and confirm password must match!",
      );
      setIsLoading2(false);
      return;
    }

    try {
      const response = await postData("/api/user/change-password", passFields);

      if (response?.success === true) {
        context.openAlertBox("success", response.message);

        // clear password fields
        setPassFields({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });

        setIsLoading2(false);

        // logout user
        context.setIsLoggedIn(false);

        history("/login");
      } else {
        context.openAlertBox(
          "error",
          response?.message || "Something went wrong",
        );
        setIsLoading2(false);
      }
    } catch (error) {
      context.openAlertBox("error", "Server error");
      setIsLoading2(false);
    }
  };

  const formData = new FormData();

  useEffect(() => {
    setPreviews([context?.userData?.avatar]);
  }, [context?.userData]);

  let selectedImages = [];

  const onChangeFile = async (e, apiEndPoint) => {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUploading(true);

      for (let i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];
          selectedImages.push(file);
          formData.append(`avatar`, file);

          editData("api/user/user-avatar", formData).then((response) => {
            setUploading(false);
            // console.log(response);
            setPreviews([response?.avatar]);
          });
        } else {
          setUploading(false);
          context.openAlertBox(
            "error",
            "Please select a valid file type (JPG, PNG, WEBP).",
          );
          return false;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAddress = async (id) => {
    try {
      const res = await deleteData(`/api/address/delete/${id}`);

      if (res?.success) {
        context.openAlertBox("success", res.message);

        // remove from UI
        context.setAddresses((prev) => prev.filter((addr) => addr._id !== id));
      }
    } catch (error) {
      context.openAlertBox("error", "Failed to delete address");
    }
  };

  const editAddress = (address) => {
    context.setIsOpenFullScreenPanel({
      open: true,
      model: "Edit Address",
      data: address,
    });
  };

  return (
    <>
      <div className="card my-4 p-5 pt-5 shadow-md sm:rounded-lg bg-white">
        <h2 className="font-semibold text-[20px] pb-3">My Profile</h2>
        <Divider className="mb-5!" />

        <form className="flex items-center" onSubmit={handleSubmit}>
          <div className="w-[60%]">
            <div className="flex items-center gap-5">
              <div className="w-[50%]">
                <TextField
                  label="First Name"
                  placeholder="eg. Ankit"
                  variant="outlined"
                  // defaultValue={firstName}
                  fullWidth
                  size="small"
                  name="firstName"
                  value={formFields.firstName}
                  disabled={isLoading === true ? true : false}
                  onChange={onChangeInput}
                />
              </div>
              <div className="w-[50%]">
                <TextField
                  label="Last Name (Optional)"
                  placeholder="eg. Kumar"
                  variant="outlined"
                  // defaultValue={lastName}
                  fullWidth
                  size="small"
                  name="lastName"
                  value={formFields.lastName}
                  disabled={isLoading === true ? true : false}
                  onChange={onChangeInput}
                />
              </div>
            </div>
            <br />
            <div className="flex items-center gap-5">
              <div className="w-[50%]">
                <TextField
                  label="Phone Number"
                  placeholder="eg. 8523697425"
                  variant="outlined"
                  // defaultValue={"9876543210"}
                  fullWidth
                  size="small"
                  name="mobile"
                  value={formFields.mobile}
                  disabled={isLoading === true ? true : false}
                  onChange={onChangeInput}
                />
              </div>
              <div className="w-[50%]">
                <TextField
                  type="email"
                  label="Email"
                  placeholder="eg. user@example.com"
                  variant="outlined"
                  // defaultValue={context?.userData.email}
                  fullWidth
                  size="small"
                  name="email"
                  value={formFields.email}
                  disabled={isLoading === true ? true : false}
                  onChange={onChangeInput}
                />
              </div>
            </div>
            <br />
            <div className="my-6">
              <h3 className="text-[18px] font-semibold mb-4">My Addresses</h3>

              {/* ADDRESS LIST */}
              {context?.addresses.length > 0 ? (
                <div className="space-y-4">
                  {context?.addresses.map((addr) => (
                    <div
                      key={addr._id}
                      className="border border-gray-200 rounded-md p-4 bg-white hover:shadow-sm transition"
                    >
                      <div className="flex justify-between items-start">
                        {/* Address Info */}
                        <div>
                          <p className="text-[15px] font-semibold text-gray-800">
                            {addr.address_line}
                          </p>

                          <p className="text-[14px] text-gray-600 mt-1">
                            {addr.city}, {addr.state} - {addr.pincode}
                          </p>

                          <p className="text-[14px] text-gray-600">
                            {addr.country}
                          </p>

                          <p className="text-[14px] mt-1 font-medium">
                            Mobile: {addr.mobile}
                          </p>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex gap-2">
                          <Button
                            size="small"
                            className="btn-blue px-3 py-1 text-[12px] min-w-[60px]"
                            onClick={() => editAddress(addr)}
                          >
                            Edit
                          </Button>

                          <Button
                            size="small"
                            className="btn-blue btn-border px-3 py-1 text-[12px] min-w-[60px]"
                            onClick={() => deleteAddress(addr._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-gray-300 rounded-md p-6 text-center text-gray-500 text-sm">
                  No address added yet.
                </div>
              )}

              {/* ADD ADDRESS BUTTON */}
              <div
                className="mt-4 flex items-center justify-center p-4 border border-dashed border-blue-300 bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-md transition"
                onClick={() =>
                  context.setIsOpenFullScreenPanel({
                    open: true,
                    model: "Add New Address",
                  })
                }
              >
                <span className="text-[14px] font-semibold text-blue-600">
                  + Add New Address
                </span>
              </div>
            </div>
            <br />
            <div className="flex items-center gap-4">
              <Button
                type="submit"
                disabled={!validateValue}
                className="btn-blue btn-lg w-[100px]"
              >
                {isLoading === true ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Save"
                )}
              </Button>
              {showChangePassword === false && (
                <Button
                  className="btn-blue btn-border btn-lg w-[215px]"
                  onClick={() => {
                    setShowChangePassword(!showChangePassword);

                    setPassFields({
                      oldPassword: "",
                      newPassword: "",
                      confirmPassword: "",
                    });
                  }}
                >
                  Change Password
                </Button>
              )}
            </div>
          </div>

          <div className="w-[40%]">
            <div className="w-full p-5 flex items-center justify-center flex-col">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-3 relative group flex items-center justify-center bg-gray-200">
                {uploading ? (
                  <CircularProgress color="inherit" />
                ) : previews && previews.length > 0 && previews[0] ? (
                  previews.map((img, index) => (
                    <img
                      src={img}
                      key={index}
                      alt="Profile Image"
                      className="w-full h-full object-cover"
                    />
                  ))
                ) : (
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/027/554/917/small/shinchan-sleepy-face-illustration-free-vector.jpg"
                    alt="Profile Image"
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="overlay w-full h-full absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                  <FaCloudUploadAlt className="text-white text-[24px]" />
                  <input
                    type="file"
                    multiple
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*"
                    onChange={(e) => onChangeFile(e, "/api/user/user-avatar")}
                    name="avatar"
                  />
                </div>
              </div>

              <h4 className="text-[18px] font-semibold mb-1">Profile Image</h4>
            </div>
          </div>
        </form>
      </div>

      {showChangePassword === true && (
        <Collapse in={showChangePassword}>
          <div className="w-full mt-4 mb-4">
            <div className="card bg-white p-5 shadow-md rounded-md">
              <h2 className="font-semibold text-[20px] pb-3">
                Change Password
              </h2>
              <Divider className="mb-5!" />

              <form
                className="flex items-center"
                onSubmit={handleSubmitChangePassword}
              >
                <div className="w-full">
                  <div className="flex items-center gap-5">
                    <div className="w-[50%]">
                      <TextField
                        type="password"
                        label="Old Password"
                        // placeholder="eg. Ankit"
                        variant="outlined"
                        // defaultValue={firstName}
                        fullWidth
                        size="small"
                        name="oldPassword"
                        value={passFields.oldPassword}
                        disabled={isLoading2 === true ? true : false}
                        autoComplete="new-password"
                        onChange={onChangeInput2}
                      />
                    </div>
                    <div className="w-[50%]">
                      <TextField
                        type="password"
                        label="New Password"
                        // placeholder="eg. Ankit"
                        variant="outlined"
                        // defaultValue={firstName}
                        fullWidth
                        size="small"
                        name="newPassword"
                        value={passFields.newPassword}
                        disabled={isLoading2 === true ? true : false}
                        autoComplete="new-password"
                        onChange={onChangeInput2}
                      />
                    </div>
                    <div className="w-[50%]">
                      <TextField
                        type="password"
                        label="Confirm Password"
                        // placeholder="eg. Ankit"
                        variant="outlined"
                        // defaultValue={firstName}
                        fullWidth
                        size="small"
                        name="confirmPassword"
                        value={passFields.confirmPassword}
                        disabled={isLoading2 === true ? true : false}
                        autoComplete="new-password"
                        onChange={onChangeInput2}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      disabled={!validateValue2}
                      className="btn-blue btn-lg"
                    >
                      {isLoading2 === true ? (
                        <CircularProgress color="inherit" />
                      ) : (
                        "Change"
                      )}
                    </Button>
                    {
                      <Button
                        className="btn-blue btn-border btn-lg w-[100px]"
                        onClick={() => setShowChangePassword(false)}
                      >
                        Cancel
                      </Button>
                    }
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Collapse>
      )}
    </>
  );
};

export default Profile;
