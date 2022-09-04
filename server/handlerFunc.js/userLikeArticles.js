const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const userLikeArticles = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("insperu");
    await client.connect();
    const allArticles = await db.collection("articles").find().toArray();
    const allUsers = await db.collection("users").find().toArray();
    const idParam = req.params.userId;
    const likedArtcles = allArticles.filter((article) => {
      return article.likes.includes(idParam);
    });

    const validateUser = allUsers.some((userId) => userId._id === idParam);

    if (validateUser) {
      res.status(200).json({
        status: 200,
        data: likedArtcles,
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

module.exports = { userLikeArticles };
