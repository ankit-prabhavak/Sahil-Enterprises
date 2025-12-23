import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MyAccountSideBar from "../../components/MyAccountSideBar";

const MyAccount = () => {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <section className="w-full py-5 bg-[#f9f9f9] min-h-[80vh]">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <MyAccountSideBar />
        </div>

        <div className="col2 w-[80%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <Divider className="mb-5!" />

            <form className="flex items-center">
              <div className="w-[60%]">
                <div className="flex items-center gap-5">
                  <div className="w-[50%]">
                    <TextField
                      label="First Name"
                      placeholder="eg. Ankit"
                      variant="outlined"
                      defaultValue={"Ankit"}
                      fullWidth
                      size="small"
                    />
                  </div>
                  <div className="w-[50%]">
                    <TextField
                      label="Last Name (Optional)"
                      placeholder="eg. Kumar"
                      variant="outlined"
                      defaultValue={"Kumar"}
                      fullWidth
                      size="small"
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
                      defaultValue={"9876543210"}
                      fullWidth
                      size="small"
                    />
                  </div>
                  <div className="w-[50%]">
                    <TextField
                      type="email"
                      label="Email"
                      placeholder="eg. ankit@example.com"
                      variant="outlined"
                      defaultValue={"username@example.com"}
                      fullWidth
                      size="small"
                    />
                  </div>
                </div>
                <br />
                <div className="flex items-center gap-5">
                  <div className="w-[50%]">
                    <TextField
                      label="GSTIN Number (Optional)"
                      placeholder="Enter GST number for invoices"
                      variant="outlined"
                      defaultValue={"98AXWPG8963D"}
                      fullWidth
                      size="small"
                    />
                  </div>
                  <div className="w-[50%]">
                    <FormControl className="w-[50%]" size="small">
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
                </div>
                <br />
                <div className="flex items-center gap-5">
                  <div className="w-[50%] pr-2">
                    <TextField
                      label="Address"
                      placeholder="eg. 123, Main Street, City"
                      variant="outlined"
                      defaultValue={"Ward-17, Thawe, Gopalganj-841440, Bihar"}
                      multiline
                      rows={2}
                      fullWidth
                      size="small"
                    />
                  </div>
                </div>
                <br />
                <div className="flex items-center gap-4">
                  <Button className="btn-org btn-lg w-[100px]">Save</Button>
                  <Button className="btn-org btn-border btn-lg w-[100px]">
                    Delete
                  </Button>
                </div>
              </div>

              <div className="w-[40%]">
                <div className="w-full p-5 flex items-center justify-center flex-col">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-3 relative group">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/027/554/917/small/shinchan-sleepy-face-illustration-free-vector.jpg"
                      alt="Profile Image"
                      className="w-full h-full object-cover"
                    />

                    <div className="overlay w-full h-full absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                      <FaCloudUploadAlt className="text-white text-[24px]" />
                      <input
                        type="file"
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  <h4 className="text-[18px] font-semibold mb-1">
                    Profile Image
                  </h4>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
