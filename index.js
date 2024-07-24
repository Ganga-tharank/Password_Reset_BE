/** @format */

import express from "express";
import AppRouter from "./routers/router.js";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use("/", AppRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Server! 🌐");
});

mongoose
  .connect(`${'mongodb://127.0.0.1:27017'}/${process.env.DB_NAME}`)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });