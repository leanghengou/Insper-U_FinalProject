const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getCommentByArticle = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();
    const idParam = req.params.articleId;
    const comments = await db
      .collection("comments")
      .find({ articleId: idParam })
      .toArray();
    const commentsReverse = comments.reverse();
    res.status(200).json({
      status: 200,
      data: commentsReverse,
      message: "The request is success.",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something is wrong!",
    });
  } finally {
    client.close();
  }
};

module.exports = { getCommentByArticle };
