const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const postComment = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("insperu");
    await client.connect();
    const articleId = req.body.articleId;

    const updatedArticle = await db
      .collection("articles")
      .findOne({ _id: articleId });

    const newComment = {
      commentId: uuidv4(),
      userId: req.body.userId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nickname: req.body.nickname,
      comment: req.body.comment,
      date: Date.now(),
    };

    updatedArticle.comments.push(newComment);
    const postComment = updatedArticle.comments;

    db.collection("articles").updateOne(
      { _id: articleId },
      { $set: { comments: postComment } }
    );

    res.status(200).json({
      status: 200,
      data: postComment,
      message: "The request is success.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      message: "Something is wrong!, erorr",
      err: err,
    });
  }
};

module.exports = { postComment };
