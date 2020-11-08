import express from "express";

const app = express();
const router = express.Router();

app.set("view_engine", "ejs");

router.get("/", (req, res) => {
  res.render("../views/index.ejs");
});

export default router;
