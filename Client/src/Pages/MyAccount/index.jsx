import React, { useContext, useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MyAccountSideBar from "../../components/MyAccountSideBar";
import { MyContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";
import { editData, postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";

const MyAccount = () => {
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

  const validateValue = formFields.firstName && formFields.mobile && formFields.email;

  const validateValue2 =
    passFields.oldPassword &&
    passFields.newPassword &&
    passFields.confirmPassword;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const onChangeInput2 = (e) => {
    const { name, value } = e.target;
    setPassFields({
      ...passFields,
      [name]: value,
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

    const response = await editData(`/api/user/${context?.userData._id}`, payload);

    if (response) {
      if (response?.success === true) {
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
      context.openAlertBox("error", "New password and confirm password must match!");
      setIsLoading2(false);
      return;
    }

    try {
      const response = await postData("/api/user/change-password", passFields);

      if (response?.success === true) {
        context.openAlertBox("success", response.message);
        setPassFields({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setIsLoading2(false);
        context.setIsLoggedIn(false);
        history("/login");
      } else {
        context.openAlertBox("error", response?.message || "Something went wrong");
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
          formData.append("avatar", file);

          editData("api/user/user-avatar", formData).then((response) => {
            setUploading(false);
            setPreviews([response?.avatar]);
          });
        } else {
          setUploading(false);
          context.openAlertBox("error", "Please select a valid file type (JPG, PNG, WEBP).");
          return false;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full py-5 bg-[#f9f9f9] min-h-[80vh]">
      <div className="container mx-auto px-3 sm:px-4 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[20%]">
          <MyAccountSideBar />
        </div>

        <div className="w-full lg:w-[80%]">
          <div className="card bg-white p-4 sm:p-5 shadow-md rounded-md">
            <h2 className="font-semibold text-[18px] sm:text-[20px] pb-3">My Profile</h2>
            <Divider className="mb-5!" />

            <form className="flex flex-col xl:flex-row gap-6" onSubmit={handleSubmit}>
              <div className="w-full xl:w-[60%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <TextField
                    label="First Name"
                    placeholder="eg. Ankit"
                    variant="outlined"
                    fullWidth
                    size="small"
                    name="firstName"
                    value={formFields.firstName}
                    disabled={isLoading}
                    onChange={onChangeInput}
                  />

                  <TextField
                    label="Last Name (Optional)"
                    placeholder="eg. Kumar"
                    variant="outlined"
                    fullWidth
                    size="small"
                    name="lastName"
                    value={formFields.lastName}
                    disabled={isLoading}
                    onChange={onChangeInput}
                  />

                  <TextField
                    label="Phone Number"
                    placeholder="eg. 8523697425"
                    variant="outlined"
                    fullWidth
                    size="small"
                    name="mobile"
                    value={formFields.mobile}
                    disabled={isLoading}
                    onChange={onChangeInput}
                  />

                  <TextField
                    type="email"
                    label="Email"
                    placeholder="eg. user@example.com"
                    variant="outlined"
                    fullWidth
                    size="small"
                    name="email"
                    value={formFields.email}
                    disabled={isLoading}
                    onChange={onChangeInput}
                  />

                  <TextField
                    label="GSTIN Number (Optional)"
                    placeholder="Enter GST number for invoices"
                    variant="outlined"
                    defaultValue={"98AXWPG8963D"}
                    fullWidth
                    size="small"
                  />

                  <FormControl fullWidth size="small">
                    <InputLabel id="my-account-gender">Gender</InputLabel>
                    <Select
                      labelId="my-account-gender"
                      id="my-account-gender"
                      value={gender}
                      label="Gender"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6">
                  <Button
                    type="submit"
                    disabled={!validateValue}
                    className="btn-org btn-lg w-full sm:w-[100px]"
                  >
                    {isLoading ? <CircularProgress color="inherit" /> : "Save"}
                  </Button>

                  {!showChangePassword && (
                    <Button
                      className="btn-org btn-border btn-lg w-full sm:w-[215px]"
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

              <div className="w-full xl:w-[40%]">
                <div className="w-full p-5 flex items-center justify-center flex-col">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-3 relative group flex items-center justify-center bg-gray-200">
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

                  <h4 className="text-[16px] sm:text-[18px] font-semibold mb-1">
                    Profile Image
                  </h4>
                </div>
              </div>
            </form>
          </div>

          {showChangePassword && (
            <Collapse in={showChangePassword}>
              <div className="w-full mt-6 mb-6">
                <div className="card bg-white p-4 sm:p-5 shadow-md rounded-md">
                  <h2 className="font-semibold text-[18px] sm:text-[20px] pb-3">
                    Change Password
                  </h2>
                  <Divider className="mb-5!" />

                  <form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmitChangePassword}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                      <TextField
                        type="password"
                        label="Old Password"
                        variant="outlined"
                        fullWidth
                        size="small"
                        name="oldPassword"
                        value={passFields.oldPassword}
                        disabled={isLoading2}
                        autoComplete="new-password"
                        onChange={onChangeInput2}
                      />
                      <TextField
                        type="password"
                        label="New Password"
                        variant="outlined"
                        fullWidth
                        size="small"
                        name="newPassword"
                        value={passFields.newPassword}
                        disabled={isLoading2}
                        autoComplete="new-password"
                        onChange={onChangeInput2}
                      />
                      <TextField
                        type="password"
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                        size="small"
                        name="confirmPassword"
                        value={passFields.confirmPassword}
                        disabled={isLoading2}
                        autoComplete="new-password"
                        onChange={onChangeInput2}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <Button
                        type="submit"
                        disabled={!validateValue2}
                        className="btn-org btn-lg w-full sm:w-[120px]"
                      >
                        {isLoading2 ? <CircularProgress color="inherit" /> : "Change"}
                      </Button>

                      <Button
                        className="btn-org btn-border btn-lg w-full sm:w-[100px]"
                        onClick={() => setShowChangePassword(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </Collapse>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyAccount;