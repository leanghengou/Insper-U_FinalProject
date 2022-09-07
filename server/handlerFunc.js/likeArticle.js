const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const likeArticle = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const articleId = req.body.articleId;
    const userId = req.body.userId;
    const db = client.db("insperu");
    await client.connect();
    // Get article-------------
    const article = await db.collection("articles").findOne({ _id: articleId });
    // Get all user accounts and all of their ID-------------
    const allUsers = await db.collection("users").find().toArray();
    const allUsersId = allUsers.map((user) => user._id);
    console.log("All users", allUsersId);

    // -----------------------------
    const numLikes = article.likes;
    const newNumLikes = [...numLikes, userId];
    const removeLike = numLikes.filter((item) => item !== userId);

    // Validate if the userId is already exist in Likes-------------
    const validateExistId = numLikes.includes(userId);
    // Validate if the userId is the real insperu account------------
    const validateRealUser = allUsersId.includes(userId);
    // --------------------------------------------------------------
    if (validateExistId) {
      await db
        .collection("articles")
        .updateOne({ _id: articleId }, { $set: { likes: removeLike } });
      const newLike = await db
        .collection("articles")
        .findOne({ _id: articleId });
      res.status(200).json({
        status: 200,
        message: "The article is successfully unliked.",
        data: newLike.likes,
      });
    } else if (!validateRealUser) {
      res.status(500).json({
        status: 500,
        message:
          "The like is denied, because it's not the like from the real user.",
      });
    } else {
      await db
        .collection("articles")
        .updateOne({ _id: articleId }, { $set: { likes: newNumLikes } });
      const newLike = await db
        .collection("articles")
        .findOne({ _id: articleId });
      res.status(200).json({
        status: 200,
        message: "Like is successful!",
        data: newLike.likes,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something is wrong!",
    });
  } finally {
    client.close();
  }
};

module.exports = { likeArticle };
