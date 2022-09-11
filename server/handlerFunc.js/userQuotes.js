const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const userQuotes = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();

    const quote = {
      _id: uuidv4(),
      userId: req.body.userId,
      quote: req.body.quote,
      author: req.body.author,
      date: Date.now(),
    };
    const existedQuotes = await db
      .collection("quotes")
      .find({ userId: quote.userId, quote: quote.quote })
      .toArray();

    if (existedQuotes.length >= 1) {
      await db
        .collection("quotes")
        .deleteMany({ userId: quote.userId, quote: quote.quote });
      await db.collection("quotes").insertOne(quote);
    } else {
      await db.collection("quotes").insertOne(quote);
    }
    res
      .status(200)
      .json({ status: 200, data: existedQuotes, message: "Success!" });
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

module.exports = { userQuotes };
