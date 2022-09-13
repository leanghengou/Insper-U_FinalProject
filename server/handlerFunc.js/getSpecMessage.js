const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getSpecMessage = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();
    const idParam = req.params.id;
    const message = await db
      .collection("messages")
      .findOne({ _id: ObjectId(`${idParam}`) });

    if (message.length <= 0) {
      res.status(404).json({
        status: 404,
        message: "Message not found.",
      });
    } else {
      res.status(200).json({
        status: 200,
        data: message,
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

module.exports = { getSpecMessage };
