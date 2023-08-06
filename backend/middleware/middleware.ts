import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import { User } from "../model/user";
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "";

declare module "express-serve-static-core" {
  interface Request {
    user?: unknown;
  }
}

const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorizationValue: string | undefined = req.headers.authorization;
    const token: string = authorizationValue?.split("Bearer ")[1] || "";
    const result: any = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(result?.id);
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, error: "You are not authenticated" });
  }
};

export const middlewares = { authentication };
