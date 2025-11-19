import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/number", (req, res) => {
  res.status(200).json("сервер работает");
});
