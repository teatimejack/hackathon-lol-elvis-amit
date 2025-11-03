const {
  insertNewUser,
  getUserByUsernameDB,
} = require("../models/user-models.js");

const register = async (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "UserName And Password fields are required." });
  }

  try {
    const existingUsers = await getUserByUsernameDB(username);
    console.log(existingUsers);

    if (existingUsers) {
      return res.json({ message: "This username already exists" });
    }

    await insertNewUser(username, password);
    res.status(201).json({ message: "Registration Complete!" });
  } catch (err) {
    console.log("Registration Error:", err);
    res
      .status(500)
      .json({ message: "Something went wrong with the server or database." });
  }
};

module.exports = register;
