const { articles } = require("./data");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async (dbName) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db(dbName);
    await client.connect();
    await db.collection("articles").insertOne(articles);
    client.close();
  } catch (err) {
    console.log(err);
  }
};

// batchImport("insperu");
