import UserModel from "../models/user.model.js";
import bycrptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFun from "../config/sendEmail.js";
import VerificationEmail from "../utils/verifyEmailTemplate.js";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import generatedRefreshToken from "../utils/generatedRefreshToken.js";

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
         VerificationEmail(name, verifyCode)
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

    if(!user) {
      return response.status(400).json({
        error: true,
        success: false,
        message: "User not found"
      });
    }

    const isCodeValid = user.otp === otp
    const isNotExpired = user.otpExpires > Date.now();

    if (isCodeValid && isNotExpired) {
      user.verify_email = true;
      user.otp = null;
      user.otpExpires = null;
      await user.save();

      return response.status(200).json({
        error: false,
        success: true,
        message: "Email verified successfully"
      });
    }else if(!isCodeValid) {

      return response.status(400).json({
        error: true,
        success: false,
        message: "Invalid OTP"
      });

    }else {
      return response.status(400).json({
        error: true,
        success: false,
        message: "OTP Expired"
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

  const user = await UserModel.findOne({email:email});

  if(!user) {
    return response.status(400).json({
        message: "User not registered",
        error: true,
        success: false,
      });
  }

   if(user.status !== 'Active') {
    return response.status(400).json({
        message: "Please contact to admin",
        error: true,
        success: false,
        
      });
  }

  const checkPassword = await bycrptjs.compare(password, user.password);

  if(!checkPassword) {

    return response.status(400).json({
        message: "Please check your password",
        error: true,
        success: false,
       
      });

  }

  const accessToken = await generatedAccessToken(user._id);
  const refreshToken = await generatedRefreshToken(user._id);

  const updateUser = await UserModel.findByIdAndUpdate(user._id, {
    last_login_date : new Date()
  })

  const cookiesOption = {
    httpOnly : true,
    secure : true,
    sameSite : "None"
  }

  response.cookie('accessToken', accessToken, cookiesOption);
  response.cookie('refreshToken', refreshToken, cookiesOption);

  return response.json({
    message : "Login successful",
    error: false,
    success: true,
    data : {
      accessToken,
      refreshToken,
    }
  })

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


     const cookiesOption = {
    httpOnly : true,
    secure : true,
    sameSite : "None"
  }

  response.clearCookie('accessToken', cookiesOption);
  response.clearCookie('refreshToken', cookiesOption);

  const removeRefreshToken = await UserModel.findByIdAndUpdate(userId, {
    refresh_token : ""
  })

  return response.json({
    message : "Logout successful",
    error: false,
    success: true,
  })


  } catch (error) {

     return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });

  }

}
