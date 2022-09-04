const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const userCommentArticles = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("insperu");
    await client.connect();
    const allArticles = await db.collection("articles").find().toArray();
    const allUsers = await db.collection("users").find().toArray();
    const allComment = await db.collection("comments").find().toArray();
    const idParam = req.params.userId;
    // const commentArticles = allArticles.filter((article) => {
    //   return article.comments.includes(idParam);
    // });

    const userComments = allComment.filter((comment) => {
      return comment.userId === idParam;
    });

    // const updateUserComments = userComments

    const validateUser = allUsers.some((userId) => userId._id === idParam);
    if (validateUser) {
      res.status(200).json({
        status: 200,
        data: userComments,
        message: "The request is success.",
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "User not found.",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something is wrong!",
    });
  }
};

module.exports = { userCommentArticles };
