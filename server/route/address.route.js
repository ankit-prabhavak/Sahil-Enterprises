import express from "express";
import {
  addAddress,
  getAddress,
  updateAddress,
  deleteAddress
} from "../controllers/address.controller.js";

import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/add-address", auth, addAddress);

router.get("/get-address", auth, getAddress);

router.put("/update-address/:addressId", auth, updateAddress);

router.delete("/delete-address/:addressId", auth, deleteAddress);

export default router;