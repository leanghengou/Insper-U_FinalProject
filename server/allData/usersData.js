const { v4: uuidv4 } = require("uuid");
const userData = [
  {
    id: uuidv4(),
    firstName: "Leangheng",
    lastName: "Ou",
    nickName: "Nhoung",
    location: "Montreal Quebec",
    email: "leangheng@admin.com",
    password: "123456789",
    userStatus: "admin",
    bio: "I like learning new things!",
  },

  {
    id: uuidv4(),
    firstName: "Fancy",
    lastName: "Boy",
    nickName: "Ninja Hoody",
    location: "Montreal Quebec",
    email: "fancy@boy.com",
    password: "123456789",
    userStatus: "user",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

module.exports = { userData };
