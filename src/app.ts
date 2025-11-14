// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import webRoutes from "./routes/web";
import getConnection from "./config/database";

dotenv.config();

const app = express();
const port = 8080;
const PORT = process.env.PORT || 8080;

// config view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static files
app.use(express.static("public"));

// config routes
webRoutes(app);

getConnection();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.listen(PORT, () => {
  console.log(`env at port:${PORT}`);
});
