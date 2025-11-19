import express from "express";
import cors from "cors";
import fs from "fs";

app.use(cors());
app.use(express.json());

const app = express();
const FILE = "click.json";

if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify({ click: 0 }));
}

app.listen(3000);
app.get("/number", (req, res) => {
  res.status(200).json("сервер работает");
});
