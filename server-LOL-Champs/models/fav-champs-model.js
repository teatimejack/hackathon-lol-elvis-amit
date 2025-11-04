const db = require("../config/db.js");

const getAllFavoriteDB = () => {
  return db("fav-champ").select("id", "username_id", "favorite_id");
};

const getAllUserFavoriteDB = (username_id) => {
  return db("users")
    .join("fav_champ", "users.username", "fav_champ.username_id")
    .select("users.username", "users.username_id","fav_champ.favorite_id");
};

const insertFavorite = (username_id, fav_champ_id) => {
  return db("fav_champ").insert({ username_id, fav_champ_id });
};

const removetFavorite = (username_id, fav_champ_id) => {
  return db("fav_champ").where({ username_id, fav_champ_id }).del();
};

module.exports = {
  insertFavorite,
  getAllFavoriteDB,
  getAllUserFavoriteDB,
  removetFavorite
};
