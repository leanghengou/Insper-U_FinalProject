const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getSpecUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const idParam = req.params.userId;

    const db = client.db("insperu");
    await client.connect();
    const user = await db.collection("users").findOne({ _id: idParam });
    if (!user) {
      return res.status(404).json({ status: 404, message: "User not found." });
    } else {
      return res.status(200).json({
        status: 200,
        data: user,
        message: "The request is success.",
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

module.exports = { getSpecUser };
