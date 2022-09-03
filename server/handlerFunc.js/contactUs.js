const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const contactUs = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("insperu");
    await client.connect();

    const message = {
      message: req.body.message,
      email: req.body.email,
      name: req.body.name,
      subject: req.body.subject,
    };

    if (message.message && message.email && message.name && message.subject) {
      res.status(200).json({
        status: 200,
        data: message,
        message: "The message is successfully is sent.",
      });
      await db.collection("messages").insertOne(message);
    } else {
      res.status(500).json({
        status: 500,
        message: "Can't be sent. Not enough information.",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Something is wrong!",
    });
  }
};

module.exports = { contactUs };
