import express from "express";
import cors from "cors";
import fs from "fs";

app.use(cors());
app.use(express.json());

const app = express();

app.listen(3000);
app.get("/number", (req, res) => {
  res.status(200).json("сервер работает");
});
