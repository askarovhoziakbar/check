import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000);

app.get("/number", (req, res) => {
  const data = JSON.parse(fs.readFileSync({ click: 0 }, "utf-8"));
  res.json(data);
});
