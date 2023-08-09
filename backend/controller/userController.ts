import { Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  deleteValidator,
  loginValidator,
  storeValidator,
  updateValidator,
} from "../validations/userValidation";
import { User } from "../model/user";
import { utils } from "../utils/utils";
import { userLoginInterFace } from "../interfaces/user";

const allUsers = async (req: Request, res: Response) => {
  try {
    const page: number = parseInt(req.params.page) || 1;
    const perPage = 12;

    const { role } = req.body;
    if (role != undefined) {
      const users = await User.find({ role })
        .skip((page - 1) * perPage)
        .limit(perPage)
        .sort({ create_at: 1 })
        .select("-password");
      const users_count = await (await User.find({ role })).length;
      const pages = Math.ceil(users_count / perPage);
      res
        .status(200)
        .json({ success: true, data: { users, pages, count: users_count } });
    } else {
      const users = await User.find()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .sort({ create_at: 1 })
        .select("-password");
      const users_count = await (await User.find()).length;
      const pages = Math.ceil(users_count / perPage);
      res
        .status(200)
        .json({ success: true, data: { users, pages, count: users_count } });
    }
  } catch (error) {
    res.status(400).json({ message: "There is a problem", success: false });
  }
};

const storeUser = async (req: Request, res: Response) => {
  try {
    const {
      first_name,
      last_name,
      phone,
      role,
      code_meli,
      isActive,
      date_of_birth,
      password,
    } = req.body;

    const errors = storeValidator(req.body);
    if (errors.length > 0)
      return res.status(400).json({ success: false, errors: errors });

    const dupUser = await User.findOne({ phone });

    if (dupUser)
      return res.status(400).json({
        success: false,
        errors: [
          {
            key: "phone",
            message: "A user with this number has already registered",
          },
        ],
      });

    const password_hash = await bcrypt.hash(password, 10);

    await User.create({
      first_name,
      last_name,
      phone,
      role,
      code_meli,
      isActive,
      date_of_birth,
      password: password_hash,
    });

    return res.status(200).json({
      success: true,
      message: "User added successfully",
    });
  } catch (error) {
    res.status(400).json({ message: "There is a problem", success: false });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const errors = updateValidator({ ...req.body, id: id });
    if (errors.length > 0)
      return res.status(400).json({ success: false, errors: errors });
    const {
      first_name,
      last_name,
      phone,
      role,
      isActive,
      code_meli,
      date_of_birth,
    } = req.body;
    await User.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        phone,
        role,
        code_meli,
        isActive,
        date_of_birth,
        updated_at: Date.now(),
      },
      { omitUndefined: true, new: true }
    );
    res
      .status(200)
      .json({ message: "User edited successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: "There is a problem", success: false });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const errors = deleteValidator(req.params);
    if (errors.length > 0)
      return res.status(400).json({ success: false, errors: errors });
    await User.findByIdAndRemove(id);
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ message: "There is a problem", success: false });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { phone, password } = req.body;
    console.log("phone", phone);
    console.log("password", password);

    const errors = loginValidator(req.body);

    if (errors.length > 0)
      return res.status(401).json({ success: false, errors: errors });

    const user: userLoginInterFace | undefined | null = await User.findOne({
      phone,
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "There was no user with this profile" });
    }

    const isEqual = await bcrypt.compare(password, user.password);

    if (isEqual) {
      const token = await utils.createTokne(user._id);
      return res.status(200).json({
        success: true,
        message: "successfully",
        data: { token: token },
      });
    } else {
      return res
        .status(404)
        .json({ success: false, error: "There was no user with this profile" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "There is a problem", success: false });
  }
};

export const userController = {
  allUsers,
  deleteUser,
  storeUser,
  updateUser,
  loginUser,
};
