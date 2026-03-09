import React, { useState, useContext } from "react";
import { Divider } from "@mui/material";
import MyAccountSideBar from "../../components/MyAccountSideBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { fetchDataFromAPI, postData } from "../../utils/api";
import { MyContext } from "../../App";
import { deleteData, editData } from "../../utils/api";

const Address = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleClose = () => {
    setIsOpenPanel(false);
  };

  const context = useContext(MyContext);

  const [isLoading, setIsLoading] = useState(false);

  const [formFields, setFormFields] = useState({
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    mobile: "",
  });

  const validInput =
    formFields.address_line &&
    formFields.city &&
    formFields.state &&
    formFields.pincode &&
    formFields.country &&
    formFields.mobile;

  // handle input change
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

      let res;

      if (editId) {
        res = await editData(`/api/address/update/${editId}`, formFields);
      } else {
        res = await postData("/api/address/add-address", formFields);
      }

      if (res?.success) {
        context.openAlertBox("success", res.message);

        const refreshedAddresses = await fetchDataFromAPI(
          "/api/address/get-address",
        );

        context.setAddresses(refreshedAddresses?.data);

        setIsOpenPanel(false);
        setEditId(null);

        setFormFields({
          address_line: "",
          city: "",
          state: "",
          pincode: "",
          country: "",
          mobile: "",
        });
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
    setEditId(address._id);

    setFormFields({
      address_line: address.address_line,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      country: address.country,
      mobile: address.mobile,
    });

    setIsOpenPanel(true);
  };

  return (
    <>
      <section className="w-full py-5 bg-[#f9f9f9] min-h-[80vh]">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <MyAccountSideBar />
          </div>

          <div className="col2 w-[80%]">
            <div className="card bg-white p-5 shadow-md rounded-md">
              <h2 className="font-semibold text-[20px] pb-3">My Addresses</h2>
              <Divider className="mb-5!" />
              <div className="my-6">
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
                              className="btn-org px-3 py-1 text-[12px] min-w-[60px]"
                              onClick={() => editAddress(addr)}
                            >
                              Edit
                            </Button>

                            <Button
                              size="small"
                              className="btn-org btn-border px-3 py-1 text-[12px] min-w-[60px]"
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
                  onClick={() => {
                    setEditId(null);
                    setFormFields({
                      address_line: "",
                      city: "",
                      state: "",
                      pincode: "",
                      country: "",
                      mobile: "",
                    });
                    setIsOpenPanel(true);
                  }}
                >
                  <span className="text-[14px] font-semibold text-blue-600">
                    + Add New Address
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog
        open={isOpenPanel}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: "800px",
            maxWidth: "90%",
          },
        }}
      >
        <DialogTitle>{editId ? "Edit Address" : "Add Address"}</DialogTitle>

        <form className="form w-full py-3 p-8" onSubmit={handleSubmit}>
          <div className="scrollHome max-h-[70vh] overflow-y-scroll pr-4">
            <h2 className="text-[14px] font-semibold mb-6">
              {" "}
              {editId ? "Update your delivery address" : "Enter your delivery address"}
            </h2>

            {/* Address Line */}
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

            {/* City + State */}
            <div className="flex gap-5 mb-4">
              <TextField
                label="City"
                placeholder="eg. Patna"
                variant="outlined"
                fullWidth
                size="small"
                name="city"
                value={formFields.city}
                onChange={onChangeInput}
              />

              <TextField
                label="State"
                placeholder="eg. Bihar"
                variant="outlined"
                fullWidth
                size="small"
                name="state"
                value={formFields.state}
                onChange={onChangeInput}
              />
            </div>

            {/* Pincode + Country */}
            <div className="flex gap-5 mb-4">
              <TextField
                label="Pincode"
                placeholder="eg. 800020"
                variant="outlined"
                fullWidth
                size="small"
                name="pincode"
                value={formFields.pincode}
                onChange={onChangeInput}
              />

              <TextField
                label="Mobile Number"
                placeholder="eg. 9876543210"
                variant="outlined"
                fullWidth
                size="small"
                name="mobile"
                value={formFields.mobile}
                onChange={onChangeInput}
              />
            </div>

            {/* Mobile */}
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

          <div className="flex items-center justify-between max-w-[350px] gap-5">
            <Button
              type="submit"
              disabled={!validInput}
              className="btn-org btn-lg w-full"
            >
              {isLoading ? (
                <CircularProgress color="inherit" size={22} />
              ) : (
                <>Save Address</>
              )}
            </Button>

            <Button
              type="button"
              className="btn-org btn-border btn-lg w-full"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default Address;
