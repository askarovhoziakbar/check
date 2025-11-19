import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000);

app.get("/number", (req, res) => {
  const data = { click: 10 };
  res.json(data);
});

let data = { click: 0 };

app.post("/number/increment", (req, res) => {
  data.click += 1;
  res.json(data);
});
