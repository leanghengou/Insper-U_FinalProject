const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const userLikeArticles = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();
    const allArticles = await db.collection("articles").find().toArray();
    const allUsers = await db.collection("users").find().toArray();
    const idParam = req.params.userId;

    // ------Temporary Solution----------------------
    const likedArtcles = allArticles.filter((article) => {
      return article.likes.includes(idParam);
    });
    // ----------------------------
    // const likedArtcles = allArticles.map((article) => {
    //   if (article.likes.includes(idParam)) {
    //     return article.title;
    //   }
    // });

    // ---------------------------------
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
  } finally {
    client.close();
  }
};

module.exports = { userLikeArticles };
