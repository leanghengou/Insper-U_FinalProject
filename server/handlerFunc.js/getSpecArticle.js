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
    const allArticles = await db
      .collection("articles")
      .findOne({ brandName: "perspective101" });

    const specArticle = allArticles.filter((article) => {
      return article._id === idParam;
    });
    console.log("SpecArticle >>>", specArticle);

    res.status(200).json({ status: 200, data: "heere", message: "Success!!" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getSpecArticle };
