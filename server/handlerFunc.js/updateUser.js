const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const updateUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();

    const allUsers = await db.collection("users").find().toArray();

    const validateUser = allUsers.some((user) => {
      return user._id === req.body._id;
    });
    // -------------------------------------------
    const userUpdate = {
      _id: req.body._id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nickname: req.body.nickname,
      location: req.body.location,
      bio: req.body.bio,
    };

    const upComment = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };
    // ------------------------------

    if (!validateUser) {
      res.status(404).json({ status: 404, message: "User not found" });
    } else {
      await db
        .collection("users")
        .updateOne({ _id: req.body._id }, { $set: userUpdate });
      await db
        .collection("comments")
        .updateMany({ userId: req.body._id }, { $set: upComment });
      const currentUser = await db
        .collection("users")
        .findOne({ _id: userUpdate._id });
      res.status(200).json({
        status: 200,
        data: currentUser,
        message: "User is successfully updated.",
      });
    }
    // -------------------------------
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

module.exports = { updateUser };
