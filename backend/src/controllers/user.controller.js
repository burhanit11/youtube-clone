import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudniary.js";

// Register User
export const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;

    if (!firstName || !lastName || !email || !username || !password) {
        throw new ApiError(400, "All fields are Required!.");
    }

    const userExist = await User.findOne({
        $or: [{ email }, { username }],
    });
    if (userExist) {
        throw new ApiError(409, "User Already exsit.");
    }

    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    // upload to cloudinary
    const avatar = avatarLocalPath
        ? await uploadOnCloudinary(avatarLocalPath)
        : null;

    console.log(avatar, "avatar");
    const coverImage = coverImageLocalPath
        ? await uploadOnCloudinary(coverImageLocalPath)
        : null;

    if (!avatar) {
        throw new ApiError(400, "Avatar is required");
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        username,
        password,
        avatar,
        coverImage: coverImage || "",
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    res.status(200).json(
        new ApiResponse(200, createdUser, "Registeration successfully.")
    );
});

// login User
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
        throw new ApiError(402, "Invalid User");
    }

    const matchPassword = await userExist.isCorrectPassword(password);

    if (!matchPassword) {
        throw new ApiError(402, "Invalid Cridential");
    }

    res.status(200).json(userExist, "Login Successfully.");
});
