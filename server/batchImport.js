const { articles } = require("./allData/articles");
const { categories } = require("./allData/categories");
const { userData } = require("./allData/usersData");
const { authors } = require("./allData/authors");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const cors = require("cors");
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async (dbName) => {
  let client;
  try {
    client = new MongoClient(MONGO_URI, options);
    const db = client.db(dbName);
    await client.connect();

    // Insert all articles-------------------
    const correctArticles = articles.map((article) => {
      article._id = article.id;
      delete article.id;
      return article;
    });
    await db.collection("articles").insertMany(correctArticles);
    console.log(`articles   -> inserted ${correctArticles.length}`);
    // -----------------------------------------

    // Insert all authors-------------------
    await db.collection("authors").insertOne(authors);
    console.log("authors    -> inserted 1");
    // -----------------------------------------

    // Insert all categories-------------------
    await db.collection("categories").insertOne(categories);
    console.log("categories -> inserted 1");
    // -----------------------------------------

    // Insert all users-------------------
    const correctUsers = userData.map((user) => {
      user._id = user.id;
      delete user.id;
      return user;
    });
    await db.collection("users").insertMany(correctUsers);
    console.log(`users      -> inserted ${correctUsers.length}`);
    // -----------------------------------------

    console.log("Import complete.");
  } catch (err) {
    if (err.code === 11000) {
      console.log(
        "Duplicate key: this data is already imported. Drop the collection in Atlas first if you want to reseed."
      );
    } else {
      console.log(err.message);
    }
  } finally {
    if (client) await client.close();
  }
};

batchImport("insperu");
