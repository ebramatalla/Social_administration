const SocialPost = require("social-post-api");
const social = new SocialPost("VJS1K0G-XD74KYV-JAMQ0WW-FZ6TX8P");

const { validationResult } = require("express-validator");

const addPost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const post = await social
      .post({
        post: req.body.Post,
        platforms: ["twitter", "facebook"],
      })
      .catch(console.error);
    console.log(post);
    if (post.status === "success") {
      res.status(200).send({ message: "Posted" });
    } else if (post.status === "error") {
      res.status(400).send({ message: post.errors[0].message });
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = { addPost };
