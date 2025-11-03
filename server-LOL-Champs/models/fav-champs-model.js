// const db = require("../config/db.js");

// const getAllFavoriteDB = () => {
//   return db("fav-champs").select("id", "username_id", "favorite_id");
// };

// // const getFavoriteByUsernameDB = (username) => {
// //   return db("fav-champs")
// //     .select("username_id", "favorite_id")
// //     .where({ username });
// // };

// const insertFavorite = (username, hashPassword) => {
//   return db("hashed_passwords").insert({ username, password: hashPassword });
// };

// module.exports = {
//   //   getFavoriteByUsernameDB,
//   insertFavorite,
//   getAllFavoriteDB,
// };
