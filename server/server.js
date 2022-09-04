"use strict";

// import the needed node_modules.
const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const { getAllArticles } = require("./handlerFunc.js/getAllArticles");
const { getSpecArticle } = require("./handlerFunc.js/getSpecArticle");
const { getAllUsers } = require("./handlerFunc.js/getAllUsers");
const { getSpecUser } = require("./handlerFunc.js/getSpecUser");
const { createUser } = require("./handlerFunc.js/createUser");
const { getCategories } = require("./handlerFunc.js/getCategories");
const { postComment } = require("./handlerFunc.js/postComment");
const { likeArticle } = require("./handlerFunc.js/likeArticle");
const { getComments } = require("./handlerFunc.js/getComments");
const { getCommentByArticle } = require("./handlerFunc.js/getCommentByArticle");
const { loginUser } = require("./handlerFunc.js/loginUser");
const { contactUs } = require("./handlerFunc.js/contactUs");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))
  // Nothing to modify above this line
  // ---------------------------------
  .get("/api/categories", getCategories)
  .get("/api/all-articles", getAllArticles)
  .get("/api/article/:articleId", getSpecArticle)
  .get("/api/get-users", getAllUsers)
  .get("/api/get-spec-user/:userId", getSpecUser)
  .get("/api/get-comments", getComments)
  .get("/api/get-comments/:articleId", getCommentByArticle)
  .post("/api/create-user", createUser)
  .post("/api/post-comment", postComment)
  .patch("/api/like-article", likeArticle)
  .post("/api/login", loginUser)
  .post("/api/contact", contactUs)

  // Nothing to modify below this line
  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message:
        "There is no wrong end-point, there are just end-points that have nothing.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
