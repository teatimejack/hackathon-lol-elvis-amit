const {
  insertFavorite,
  getAllFavoriteDB,
  getAllUserFavoriteDB,
  removetFavorite
} = require("../models/fav-champs-model");

const toggleFav = async (req, res) => {
  const { userName_id, fav_champ_id } = req.body;

  try {
    const existingFav = await getAllUserFavoriteDB(userName_id);
    if (existingUsers.includes(fav_champ_id)) {
        removetFavorite( userName_id, fav_champ_id)
    }else{
         insertFavorite(userName_id, fav_champ_id)
    }
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({
      message: "Something went wrong with the server or database.",
    });
  }
};

module.exports = toggleFav;