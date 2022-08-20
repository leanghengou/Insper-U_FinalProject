const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getAllArticles = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("insperu");
    await client.connect();
    const allArticles = await db
      .collection("articles")
      .findOne({ brandName: "perspective101" });
    res
      .status(200)
      .json({ status: 200, data: allArticles, message: "Success!!" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllArticles };
