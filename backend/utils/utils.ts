require("dotenv").config();
const jwt = require("jsonwebtoken");
const createTokne = async (id: string, expiresIn = "24h") => {
  return await jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
    algorithm: "HS512",
  });
};

export const utils = { createTokne };
