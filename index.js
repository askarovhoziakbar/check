import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let data = { click: 10 }; // объект хранится в памяти

// GET /number
app.get("/number", (req, res) => {
  res.json(data);
});

// POST /number/increment
app.post("/number/increment", (req, res) => {
  data.click += 1;
  res.json(data);
});

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
