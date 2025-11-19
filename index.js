import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000);

let data = { click: 0 };

app.get("/number", (req, res) => {
  res.json(data);
});

app.post("/number/increment", (req, res) => {
  data.click += 1;
  res.json(data);
});
