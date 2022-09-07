const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const createUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();

    const newUser = {
      _id: uuidv4(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nickname: req.body.nickname,
      email: req.body.email,
      location: req.body.location,
      password: req.body.password,
      bio: req.body.bio,
      status: "user",
    };

    // find all the users emails---------------------------
    const allUsers = await db.collection("users").find().toArray();
    // -------------------------------------------------------
    // search for email that is the same as the register email------
    const existEmail = allUsers.find((user) => {
      return user.email === newUser.email;
    });
    // console-log result-------------------------------------
    console.log("allUser", allUsers);
    // -------------------------------------------------------
    if (existEmail) {
      res.status(500).json({
        status: 500,
        message: "The user's email is already existed.",
      });
    } else if (
      !newUser.email ||
      !newUser.password ||
      !newUser.firstName ||
      !newUser.lastName
    ) {
      res.status(500).json({
        status: 500,
        message:
          "Lack of information, please fill all of the required information.",
      });
    } else {
      res.status(200).json({
        status: 200,
        data: newUser,
        message: "The user is successfully registered.",
      });
      await db.collection("users").insertOne(newUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      message: "Something is wrong, please try again.",
      err: err,
    });
  } finally {
    client.close();
  }
};

module.exports = { createUser };
