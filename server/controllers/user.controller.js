import UserModel from "../models/user.model.js";
import bycrptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFun from "../config/sendEmail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import generatedRefreshToken from "../utils/generatedRefreshToken.js";

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { url } from "inspector";
import bcrypt from "bcryptjs";
import { error } from "console";

// Configuration
cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret, // Click 'View API Keys' above to copy your API secret
  secure: true,
});

export async function registerUserController(request, response) {
  try {
    let user;

    const { name, email, password } = request.body;
    if (!name || !email || !password) {
      return response.status(400).json({
        message: "provide email, name, password",
        error: true,
        success: false,
      });
    }

    user = await UserModel.findOne({ email: email });
    if (user) {
      return response.json({
        message: "User already Registered with this email",
        error: true,
        success: false,
      });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    const salt = await bycrptjs.genSalt(10);
    const hashPassword = await bycrptjs.hash(password, salt);

    user = new UserModel({
      email: email,
      password: hashPassword,
      name: name,
      otp: verifyCode,
      otpExpires: Date.now() + 600000,
    });

    await user.save();

    // send verification email
    await sendEmailFun(
      email,
      "Email Verification For Sahil Enterprises",
      "",
      VerificationEmail(user.name, verifyCode),
    );

    // create a jwt token for verification purposes
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY,
    );

    return response.status(200).json({
      success: true,
      error: false,
      message: "User registered successfully! Please verify your email.",
      token: token, // Optional: include this if needed for verification
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function registerAdminController(request, response) {
  try {
    let user;

    const { name, email, password } = request.body;
    if (!name || !email || !password) {
      return response.status(400).json({
        message: "provide email, name, password",
        error: true,
        success: false,
      });
    }

    user = await UserModel.findOne({ email: email });
    if (user) {
      return response.json({
        message: "User already Registered with this email",
        error: true,
        success: false,
      });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    const salt = await bycrptjs.genSalt(10);
    const hashPassword = await bycrptjs.hash(password, salt);

    user = new UserModel({
      email: email,
      password: hashPassword,
      name: name,
      otp: verifyCode,
      otpExpires: Date.now() + 600000,
      role: "ADMIN",
    });

    await user.save();

    // send verification email
    await sendEmailFun(
      email,
      "Email Verification For Sahil Enterprises",
      "",
      VerificationEmail(user.name, verifyCode),
    );

    // create a jwt token for verification purposes
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY,
    );

    return response.status(200).json({
      success: true,
      error: false,
      message: "User registered successfully! Please verify your email.",
      token: token, // Optional: include this if needed for verification
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function verifyEmailController(request, response) {
  try {
    const { email, otp } = request.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "User not found",
      });
    }

    const isCodeValid = user.otp === otp;
    const isNotExpired = user.otpExpires > Date.now();

    if (isCodeValid && isNotExpired) {
      user.verify_email = true;
      user.otp = null;
      user.otpExpires = null;
      await user.save();

      return response.status(200).json({
        error: false,
        success: true,
        message: "Email verified successfully",
      });
    } else if (!isCodeValid) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "Invalid OTP",
      });
    } else {
      return response.status(400).json({
        error: true,
        success: false,
        message: "OTP Expired",
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function loginUserController(request, response) {
  try {
    const { email, password } = request.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        message: "User not registered",
        error: true,
        success: false,
      });
    }

    if (user.status !== "Active") {
      return response.status(400).json({
        message: "Please contact to admin",
        error: true,
        success: false,
      });
    }

    if (user.verify_email !== true) {
      return response.status(400).json({
        message: "Your email not verified. Please verify your email first",
        error: true,
        success: false,
      });
    }

    const checkPassword = await bycrptjs.compare(password, user.password);

    if (!checkPassword) {
      return response.status(400).json({
        message: "Please check your password",
        error: true,
        success: false,
      });
    }

    const accessToken = await generatedAccessToken(user._id);
    const refreshToken = await generatedRefreshToken(user._id);

    const updateUser = await UserModel.findByIdAndUpdate(user._id, {
      last_login_date: new Date(),
    });

   // only for development, need to change for production
    const cookiesOption = {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 30 * 60 * 1000 // 30 minutes
    };

    response.cookie("accessToken", accessToken, cookiesOption);
    response.cookie("refreshToken", refreshToken, cookiesOption);

    const userDetails = await UserModel.findById(user._id).select("-password -refresh_token").populate("address_details");

    return response.json({
      message: "Login successful",
      error: false,
      success: true,
      data: {
        accessToken,
        refreshToken,
        userDetails
      },
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function logoutController(request, response) {
  try {
    const userId = request.userId; //middleware
    
    // only for development, need to change for production
    const cookiesOption = {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
    };

    response.clearCookie("accessToken", cookiesOption);
    response.clearCookie("refreshToken", cookiesOption);

    const removeRefreshToken = await UserModel.findByIdAndUpdate(userId, {
      refresh_token: "",
    });

    return response.json({
      message: "Logout successful",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// image upload
var imagesArr = [];
export async function userAvatarController(request, response) {
  try {
    imagesArr = [];

    const userId = request.userId;
    const image = request.files;

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return response.status(404).json({
        message: "User Not Found",
        error: true,
        success: false,
      });
    }

    const imgUrl = user.avatar;

    const urlArr = imgUrl.split("/");
    const image_avatar = urlArr[urlArr.length - 1];

    const imageName = image_avatar.split(".")[0];

    if (imageName) {
      const res = await cloudinary.uploader.destroy(
        imageName,
        (error, result) => {
          console.log(error, result);
        },
      );
    }

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    for (let i = 0; i < image?.length; i++) {
      const img = await cloudinary.uploader.upload(
        image[i].path,
        options,
        function (error, result) {
          imagesArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${request.files[i].filename}`);
          console.log(request.files[i].filename);
        },
      );
    }

    user.avatar = imagesArr[0];
    await user.save();

    return response.status(200).json({
      _id: userId,
      avatar: imagesArr[0],
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function removeImageFromCloudinary(request, response) {
  try {
    const userId = request.userId; // from middleware

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return response.status(404).json({
        message: "User Not Found",
        error: true,
        success: false,
      });
    }

    if (!user.avatar) {
      return response.status(400).json({
        message: "No avatar to remove",
        error: true,
        success: false,
      });
    }

    const imgUrl = request.query.img;

    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];

    if (imageName) {
      const res = await cloudinary.uploader.destroy(
        imageName,
        (error, result) => {
          console.log(error, result);
        },
      );

      // Clear avatar in DB
      user.avatar = "";
      await user.save();

      if (res) {
        return response.status(200).json({
          message: "Avatar removed successfully",
          result: res,
        });
      }
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// update user details
export async function updateUserDetails(request, response) {
  try {
    const userId = request.userId; // auth middleware
    const { name, email, mobile, password } = request.body;

    const userExist = await UserModel.findById(userId);

    if (!userExist) {
      return response.status(400).send("The user cannot be updated!");
    }

    let verifyCode = "";

    if (email !== userExist.email) {
      verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    }

    let hashPassword = "";

    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashPassword = await bcrypt.hash(password, salt);
    } else {
      hashPassword = userExist.password;
    }

    const updateUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        name: name,
        mobile: mobile,
        email: email,
        verify_email: email !== userExist.email ? false : true,
        password: hashPassword,
        otp: verifyCode !== "" ? verifyCode : null,
        otpExpires: verifyCode !== "" ? Date.now() + 600000 : "",
      },
      { new: true },
    );

    if (email !== userExist.email) {
      await sendEmailFun(
        email,
        "Email Verification For Sahil Enterprises",
        "",
        VerificationEmail(userExist.name, verifyCode),
      );
    }

    const user = await UserModel.findById(userId).select(
      "-password -refresh_token",
    );

    return response.json({
      message: "User Updated Successfully",
      error: false,
      success: true,
      user: user,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// forgot password
export async function forgotPasswordController(request, response) {
  try {
    const { email } = request.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        message: "Email not registered",
        error: true,
        success: false,
      });
    }

    let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    let otpExpiry = Date.now() + 600000;

    user.otp = verifyCode;
    user.otpExpires = otpExpiry;

    await user.save();

    await sendEmailFun(
      email,
      "OTP For Password Reset",
      "",
      VerificationEmail(user.name, verifyCode),
    );

    return response.json({
      message: "check your email",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// verify otp for forgot password
export async function verifyForgotPassword(request, response) {
  try {
    const { email, otp } = request.body;

    if (!email || otp === undefined) {
      return response.status(400).json({
        message: "Please provide email and otp",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        message: "Email not registered",
        error: true,
        success: false,
      });
    }

    const now = new Date();

    if (!user.otpExpires || new Date(user.otpExpires) < now) {
      return response.status(400).json({
        message: "Expired OTP",
        error: true,
        success: false,
      });
    }

    if (otp !== user.otp) {
      return response.status(400).json({
        message: "Invalid OTP",
        error: true,
        success: false,
      });
    }

    user.otp = "";
    user.otpExpires = "";

    await user.save();

    return response.status(200).json({
      message: "OTP verified!",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// reset password controller
export async function resetPassword(request, response) {
  try {
    const { email, newPassword, confirmPassword } = request.body;

    if (!email || !newPassword || !confirmPassword) {
      return response.status(400).json({
        message: "provide required fields email, newPassword, confirmPassword",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return response.status(400).json({
        message: "Email not registered",
        error: true,
        success: false,
      });
    }

    if (newPassword !== confirmPassword) {
      return response.status(400).json({
        message: "new and confirm passwords must be same",
        error: true,
        success: false,
      });
    }

    const salt = await bycrptjs.genSalt(10);
    const hashPassword = await bycrptjs.hash(confirmPassword, salt);

    user.password = hashPassword;
    await user.save();

    return response.status(200).json({
      message: "Password reset successful!",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// refresh token controller
export async function refreshToken(request, response) {
  try {
    const refreshToken =
      request.cookies.refreshToken ||
      request?.headers?.authorization?.split(" ")[1]; // [bearer token]

    if (!refreshToken) {
      return response.status(400).json({
        message: "Invalid Token",
        error: true,
        success: false,
      });
    }

    const verifyToken = await jwt.verify(
      refreshToken,
      process.env.SECRET_KEY_REFRESH_TOKEN,
    );

    if (!verifyToken) {
      return response.status(400).json({
        message: "Token is expired!",
        error: true,
        success: false,
      });
    }

    const userId = verifyToken?._id;

    const newAccessToken = await generatedAccessToken(userId);

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    response.cookie("accessToken", newAccessToken, cookiesOption);

    return response.json({
      message: "New Access token generated",
      error: false,
      success: true,
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get login user details
// export async function userDetails(request, response) {
//   try {
//     const userId = request.userId;

//     const user = await UserModel.findById(userId).select(
//       "-password -refresh_token",
//     );

//     return response.json({
//       message: "user details",
//       data: user,
//       error: false,
//       success: true,
//     });
//   } catch (error) {
//     return response.status(500).json({
//       message: error.message || error,
//       error: true,
//       success: false,
//     });
//   }
// }
export async function userDetails(request, response) {
  try {
    const userId = request.userId;

    const user = await UserModel.findById(userId)
      .select("-password -refresh_token")
      .populate("address_details");
    
    
    return response.json({
      message: "user details",
      data: user,
      error: false,
      success: true,
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// change password controller
export async function changePassword(request, response) {
  try {
    const userId = request.userId; // coming from auth middleware
    const { oldPassword, newPassword, confirmPassword } = request.body;

    if (!oldPassword || !newPassword || !confirmPassword) {
      return response.status(400).json({
        message: "provide required fields oldPassword, newPassword, confirmPassword",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findById(userId);

    if (!user) {
      return response.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    // check old password
    const isPasswordMatch = await bycrptjs.compare(oldPassword, user.password);

    if (!isPasswordMatch) {
      return response.status(400).json({
        message: "Old password is incorrect",
        error: true,
        success: false,
      });
    }

    // check new password match
    if (newPassword !== confirmPassword) {
      return response.status(400).json({
        message: "New password and confirm password must be same",
        error: true,
        success: false,
      });
    }

    const salt = await bycrptjs.genSalt(10);
    const hashPassword = await bycrptjs.hash(newPassword, salt);

    user.password = hashPassword;
    await user.save();

    return response.status(200).json({
      message: "Password changed successfully",
      error: false,
      success: true,
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// The End
