import express from "express";

const app = express();

app.listen(3000);
app.get("/number", (req, res) => {
  res.status(200).json("сервер работает");
});
