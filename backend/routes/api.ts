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
router.post("/user/store", userController.storeUser);
//  @desc   Users Delete
//  @route  DELETE /
router.delete("/user/:id", userController.deleteUser);

export const routes = router;
