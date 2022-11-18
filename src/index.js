const { request } = require("express");
const express = require("express");
const app = express();
const socialRoute = require("./route/social");

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(socialRoute);

app.listen(port, () => {
  console.log("listening on port " + port);
});
