const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getAllMessages = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();
    const allMessages = await db.collection("messages").find().toArray();

    if (allMessages.length <= 0) {
      res.status(404).json({
        status: 404,
        message: "There is no message yet.",
      });
    } else {
      res.status(200).json({
        status: 200,
        data: allMessages,
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

module.exports = { getAllMessages };
