const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getSpecArticle = async (req, res) => {
  try {
    const idParam = req.params.articleId;
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("insperu");
    await client.connect();
    const articles = await db
      .collection("articles")
      .findOne({ brandName: "perspective101" });
    const allArticles = articles.allArticles;
    const specArticle = allArticles.filter((article) => {
      return article.id === idParam;
    });
    if (specArticle.length <= 0) {
      return res
        .status(404)
        .json({ status: 404, message: "Article not found." });
    } else {
      return res.status(200).json({
        status: 200,
        data: specArticle,
        message: "The request is success.",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something is wrong!",
    });
  }
};

module.exports = { getSpecArticle };
