// const express = require("express");
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 8080;
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello An!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.listen(PORT, () => {
  console.log(`env at port:${PORT}`);
});
