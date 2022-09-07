const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getAllUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();
    const allUsers = await db.collection("users").find().toArray();
    console.log("all User ---> ", allUsers);

    if (allUsers.length <= 0) {
      res.status(404).json({
        status: 404,
        message: "There is no users yet.",
      });
    } else {
      res.status(200).json({
        status: 200,
        data: allUsers,
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

module.exports = { getAllUsers };
