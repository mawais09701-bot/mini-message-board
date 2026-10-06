const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: indexController.getMessages(),
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "Add Message" });
});

indexRouter.post("/new", (req, res) => {
  indexController
    .getMessages()
    .push({
      text: req.body.message,
      user: req.body.authorName,
      added: new Date(),
    });

  res.redirect("/")
});

module.exports = indexRouter;
