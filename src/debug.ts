import express from "express";

const router = express.Router()


router.get("/success", (req, res) => {
  res.render("success-build", {
    layout: false,
    name: "John Smith",
    plugin: "Weather",
    url: "https://translate.google.com/",
  });
});

router.get("/error", (req, res) => {
  res.render("error-build", {
    layout: false,
    name: "John Smith",
    plugin: "Weather",
    url: "https://translate.google.com/",
  });
});

router.get("/login", (req, res) => {
  res.render("login", {
    layout: false,
    email: "john.smith@example.com",
    url: "https://translate.google.com/",
  });
});


export default router;
