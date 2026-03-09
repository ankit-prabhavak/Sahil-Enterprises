import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { FaCloudUploadAlt } from "react-icons/fa";

import { fetchDataFromAPI, editData } from "../../utils/api";
import { MyContext } from "../../App";

const EditAddress = () => {
  const context = useContext(MyContext);

  const addressData = context?.isOpenFullScreenPanel?.data;

  const [isLoading, setIsLoading] = useState(false);

  const [formFields, setFormFields] = useState({
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    mobile: "",
  });

  // Prefill form when component loads
  useEffect(() => {
    if (addressData) {
      setFormFields({
        address_line: addressData.address_line || "",
        city: addressData.city || "",
        state: addressData.state || "",
        pincode: addressData.pincode || "",
        country: addressData.country || "",
        mobile: addressData.mobile || "",
      });
    }
  }, [addressData]);

  const validInput =
    formFields.address_line &&
    formFields.city &&
    formFields.state &&
    formFields.pincode &&
    formFields.country &&
    formFields.mobile;

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formFields.address_line ||
      !formFields.city ||
      !formFields.state ||
      !formFields.pincode ||
      !formFields.country ||
      !formFields.mobile
    ) {
      context.openAlertBox("error", "Please fill all fields");
      return;
    }

    try {
      setIsLoading(true);

      const res = await editData(
        `/api/address/update/${addressData._id}`,
        formFields,
      );

      if (res.success) {
        context.openAlertBox("success", res.message);

        // refresh user data
        const refreshedData = await fetchDataFromAPI("/api/user/user-details");
        const refreshedAddresses = await fetchDataFromAPI(
          "/api/address/get-address",
        );

        context.setUserData(refreshedData?.data);
        context.setAddresses(refreshedAddresses?.data);

        // close panel
        context.setIsOpenFullScreenPanel((prev) => ({
          ...prev,
          open: false,
          model: "",
          data: null,
        }));
      } else {
        context.openAlertBox("error", res.message);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <section className="p-5 bg-gray-50 w-full h-full">
      <form className="form w-[60%] py-3 p-8" onSubmit={handleSubmit}>
        <div className="scrollHome max-h-[70vh] overflow-y-scroll pr-4">
          <h2 className="text-[14px] font-semibold mb-6">
            Update your delivery address
          </h2>

          <div className="w-full mb-4">
            <TextField
              label="Address Line"
              placeholder="House no, street, area"
              variant="outlined"
              fullWidth
              size="small"
              name="address_line"
              value={formFields.address_line}
              onChange={onChangeInput}
            />
          </div>

          <div className="flex gap-5 mb-4">
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              size="small"
              name="city"
              value={formFields.city}
              onChange={onChangeInput}
            />

            <TextField
              label="State"
              variant="outlined"
              fullWidth
              size="small"
              name="state"
              value={formFields.state}
              onChange={onChangeInput}
            />
          </div>

          <div className="flex gap-5 mb-4">
            <TextField
              label="Pincode"
              variant="outlined"
              fullWidth
              size="small"
              name="pincode"
              value={formFields.pincode}
              onChange={onChangeInput}
            />

            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              size="small"
              name="mobile"
              value={formFields.mobile}
              onChange={onChangeInput}
            />
          </div>

          <div className="w-full mb-4">
            <TextField
              label="Country"
              placeholder="eg. India"
              variant="outlined"
              fullWidth
              size="small"
              name="country"
              value={formFields.country}
              onChange={onChangeInput}
            />
          </div>
        </div>

        <br />

        <div className="w-[250px]">
          <Button
            type="submit"
            disabled={!validInput}
            className="btn-blue btn-lg w-full flex gap-3"
          >
            {isLoading ? (
              <CircularProgress color="inherit" size={22} />
            ) : (
              <>
                <FaCloudUploadAlt className="text-[20px]" />
                Update Address
              </>
            )}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default EditAddress;
