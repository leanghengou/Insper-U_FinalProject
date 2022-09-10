const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getAllArticleIds = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();
    const allArticles = await db.collection("articles").find().toArray();

    const allIds = allArticles.map((article) => {
      return article._id;
    });
    res.status(200).json({
      status: 200,
      data: allIds,
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

module.exports = { getAllArticleIds };
