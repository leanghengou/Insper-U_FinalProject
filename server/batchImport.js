const { articles } = require("./allData/articles");
const { categories } = require("./allData/categories");
const { userData } = require("./allData/usersData");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const cors = require("cors");
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

    // Insert all articles-------------------
    // await db.collection("articles").insertOne(articles);
    // -----------------------------------------
    // Insert all categories-------------------
    // await db.collection("categories").insertOne(categories);
    // -----------------------------------------
    // Insert all users-------------------
    const correctUsers = userData.map((user) => {
      user._id = user.id;
      delete user.id;
      return user;
    });
    await db.collection("users").insertMany(correctUsers);
    // -----------------------------------------

    client.close();
  } catch (err) {
    console.log(err);
  }
};

batchImport("insperu");