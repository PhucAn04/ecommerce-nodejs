// const express = require("express");
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 8080;
const PORT = process.env.PORT || 8080;

// config view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.listen(PORT, () => {
  console.log(`env at port:${PORT}`);
});
