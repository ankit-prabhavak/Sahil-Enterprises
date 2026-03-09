import AddressModel from "../models/address.model.js";
import UserModel from "../models/user.model.js";

export async function addAddress(request, response) {
  try {
    const userId = request.userId;

    const {
      address_line,
      city,
      state,
      pincode,
      country,
      mobile
    } = request.body;

    const newAddress = new AddressModel({
      address_line,
      city,
      state,
      pincode,
      country,
      mobile,
      userId
    });

    const saveAddress = await newAddress.save();

    await UserModel.findByIdAndUpdate(userId, {
      $push: { address_details: saveAddress._id }
    });

    return response.json({
      message: "Address added successfully",
      error: false,
      success: true,
      data: saveAddress
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
}

export async function getAddress(request, response) {
  try {

    const userId = request.userId;

    const addressList = await AddressModel.find({
      userId,
      status: true
    });

    return response.json({
      message: "Address list",
      data: addressList,
      error: false,
      success: true
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
}

export async function updateAddress(request, response) {
  try {

    const { addressId } = request.params;

    const update = await AddressModel.findByIdAndUpdate(
      addressId,
      request.body,
      { new: true }
    );
    
    return response.json({
      message: "Address updated",
      data: update,
      error: false,
      success: true
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
}

export async function deleteAddress(request, response) {
  try {

    const { addressId } = request.params;

    await AddressModel.findByIdAndUpdate(addressId, {
      status: false
    });

    return response.json({
      message: "Address deleted",
      error: false,
      success: true
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
}