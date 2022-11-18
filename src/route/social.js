const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const socialController = require("../controller/social");

router.post(
  "/addPost",
  body("Post").isString().withMessage("Post Must Be String "),
  socialController.addPost
);
module.exports = router;
