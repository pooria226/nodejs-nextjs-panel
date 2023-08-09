import express from "express";
import { userController } from "../controller/userController";
import { middlewares } from "../middleware/middleware";

const router = express.Router();

//  @desc   Users Login
//  @route  POST /
router.post("/login", userController.loginUser);
//  @desc   Users All
//  @route  GET /
router.get("/users", middlewares.authentication, userController.allUsers);
//  @desc   Users Store
//  @route  POST /
router.post(
  "/user/store",
  middlewares.authentication,
  userController.storeUser
);

//  @desc   Users Update
//  @route  PUT /
router.put(
  "/user/update/:id",
  middlewares.authentication,
  userController.updateUser
);

//  @desc   Users Delete
//  @route  DELETE /
router.delete(
  "/user/:id",
  middlewares.authentication,
  userController.deleteUser
);

export const routes = router;
