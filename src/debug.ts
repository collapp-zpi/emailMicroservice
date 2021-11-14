import express from "express";

const router = express.Router()

router.get("/", (req, res) => {
  res.render("index", {
    layout: false,
    name: "Karol Sitarz",
    plugin: "Weather",
    url: "https://translate.google.com/",
    baseUrl: req.baseUrl,
  });
});

router.get("/success", (req, res) => {
  res.render("success-build", {
    layout: false,
    name: "Karol Sitarz",
    plugin: "Weather",
    url: "https://translate.google.com/",
  });
});


export default router;
