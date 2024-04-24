require("dotenv").config;
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/postman", (req, res) => {
  res.send("Hello  Postman!");
});

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${port}`);
});
