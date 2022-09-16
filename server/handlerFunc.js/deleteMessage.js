const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const deleteMessage = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();
    const messageId = req.params.id;

    await db
      .collection("messages")
      .deleteOne({ _id: ObjectId(`${messageId}`) });

    res
      .status(200)
      .json({ status: 200, message: "Message is successfully deleted." });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      message: "Something is wrong!",
    });
  } finally {
    client.close();
  }
};

module.exports = { deleteMessage };
