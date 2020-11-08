function error_404(req, res) {
  res.status(400);
  res.render("../views/404.ejs", { title: "404: Page not found" });
}

function error_500(error, req, res, next) {
  res.status(500);
  res.render("../views/500.ejs", {
    title: "500: Internal Server Error",
    error: error,
  });
}

export default {
  error_404,
  error_500,
};
