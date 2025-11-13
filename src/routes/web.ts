import express, { Express } from "express";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", (req, res) => {
    res.render("home");
  });

  router.get("/contact", (req, res) => {
    res.render("contact");
  });

  app.use("/", router);
};

export default webRoutes;
