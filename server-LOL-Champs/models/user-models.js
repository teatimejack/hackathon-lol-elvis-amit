const db = require("../config/db.js");

const getAllUsersDB = () => {
  return db("users").select("id", "username", "password");
};

const getUserByUsernameDB = (username) => {
  return db("users").select("username", "password").where({ username });
};

const insertNewUser = (username, password) => {
  return db("users").insert({ username, password });
};

module.exports = {
  getAllUsersDB,
  getUserByUsernameDB,
  insertNewUser,
};
