const express = require("express");
const path = require("path");
const parser = require("body-parser");
const db = require("../database/index.js");
const router = require("./router.js");
const cors = require("cors");
const port = 7000;

const app = express();

app.use(cors());

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../Client/dist")));

app.use("/api", router);

app.listen(port, () => {
  console.log(`successfully listening to ${port}!`);
});
