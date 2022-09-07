const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { sentimentTest } = require("./sentimentTest");
const postComment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();
    const articleId = req.body.articleId;

    // get spec article comment array,

    const article = await db.collection("articles").findOne({ _id: articleId });
    const articleComments = article.comments;
    // --------------------------------

    const newComment = {
      articleId: articleId,
      commentId: uuidv4(),
      userId: req.body.userId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      comment: req.body.comment,
      date: Date.now(),
      articleTitle: req.body.articleTitle,
    };
    const sentimentAnswer = await sentimentTest(newComment.comment);

    // ----------------------------------------------------------------------------------
    // Checking if the new comment contain all the required info,
    // also if it contain something outside of required info, this should be stop

    const validateComment = Object.entries(req.body);
    if (
      !newComment.articleId ||
      !newComment.commentId ||
      !newComment.userId ||
      !newComment.firstName ||
      !newComment.lastName ||
      !newComment.comment ||
      !newComment.date ||
      !newComment.articleTitle
    ) {
      res.status(500).json({
        status: 500,
        message: "User must be providing wrong information.",
      });
    } else if (validateComment.length > 6) {
      res.status(500).json({
        status: 500,
        message:
          "User must be providing more information than the necessary requirments.",
      });
    } else if (sentimentAnswer.data.type === "negative") {
      return res.status(500).json({
        status: 500,
        message: "Please be respectful to our community. :)",
      });
    } else {
      const updateArticleComment = [...articleComments, newComment.commentId];
      await db.collection("comments").insertOne(newComment);
      await db
        .collection("articles")
        .updateOne(
          { _id: articleId },
          { $set: { comments: updateArticleComment } }
        );
      res.status(200).json({
        status: 200,
        data: newComment,
        message: "The comment is successfully posted.",
      });
    }
    // ----------------------------------------------------------------------------------
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      status: 500,
      message: "Something is wrong!",
      error: err,
    });
  } finally {
    client.close();
  }
};

module.exports = { postComment };
