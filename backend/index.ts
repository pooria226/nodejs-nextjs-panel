import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { routes } from "./routes/api";

const app = express();
dotenv.config();

let DATABASE_URL: string = process.env.DATABASE_URL || "";

class Application {
  constructor() {
    this.setupMongoose();
    this.setupExpressServer();
    this.setupRoutesAndMiddlewares();
  }
  setupRoutesAndMiddlewares() {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use("/api", routes);
  }
  setupMongoose() {
    mongoose
      .connect(DATABASE_URL)
      .then(() => {
        console.log("db connected");
      })
      .catch((err) => {
        console.error("db not connected", err);
      });
  }
  setupExpressServer() {
    const port = process.env.PORT || 3003;
    app.listen(port, () => {
      console.log(`app listen to port ${port}`);
    });
  }
}
new Application();
