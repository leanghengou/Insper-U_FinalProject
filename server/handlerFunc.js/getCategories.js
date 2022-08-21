const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getCategories = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("insperu");
    await client.connect();
    const categories = await db.collection("categories").find().toArray();
    res.status(200).json({
      status: 200,
      data: categories[0].allCategories,
      message: "The request is success.",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something is wrong!",
    });
  }
};

module.exports = { getCategories };
