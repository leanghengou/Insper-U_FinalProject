const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const userLikedQuotes = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();
    const allUsers = await db.collection("users").find().toArray();
    const allQuotes = await db.collection("quotes").find().toArray();
    const idParam = req.params.userId;

    const userQuotes = allQuotes.filter((quote) => {
      return quote.userId === idParam;
    });

    const validateUser = allUsers.some((userId) => userId._id === idParam);
    if (validateUser) {
      res.status(200).json({
        status: 200,
        data: userQuotes,
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

module.exports = { userLikedQuotes };
