const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const loginUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    const db = client.db("insperu");
    await client.connect();
    const email = req.body.email;
    const password = req.body.password;
    const specUser = await db
      .collection("users")
      .findOne({ email: email, password: password });

    delete specUser.password;
    if (specUser) {
      res.status(200).json({
        status: 200,
        data: specUser,
        messsage: "Request is successful!",
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

module.exports = { loginUser };
