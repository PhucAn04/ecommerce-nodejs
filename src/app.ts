// const express = require("express");
import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello Phuc An!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
