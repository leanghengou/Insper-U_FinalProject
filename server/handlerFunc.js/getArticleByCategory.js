const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getArticleByCategory = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("insperu");
    await client.connect();
    const allArticles = await db.collection("articles").find().toArray();
    const idParam = req.params.category;
    const categoryArticle = allArticles.filter((article) => {
      return article.category.includes(idParam);
    });

    const validateCategory = allArticles.some((article) =>
      article.category.includes(idParam)
    );

    if (validateCategory) {
      res.status(200).json({
        status: 200,
        data: categoryArticle,
        message: "The request is success.",
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Category not found.",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something is wrong!",
    });
  }
};

module.exports = { getArticleByCategory };
