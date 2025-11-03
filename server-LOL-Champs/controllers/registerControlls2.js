const {
  insertNewUser,
  getUserByUsernameDB,
} = require("../models/user-models.js");

const register = async (req, res) => {
  // console.log(req.body);
  const { userName, userPassword } = req.body;
  if (!userName || !userPassword) {
    return res
      .status(400)
      .json({ message: "UserName And Password fields are required." });
  }

  try {
    const existingUsers = await getUserByUsernameDB(userName);
    console.log(existingUsers);

    if (existingUsers.length > 0) {
      return res.json({ message: "This username already exists" });
    }

    await insertNewUser(userName, userPassword);
    res.status(201).json({ message: "Registration Complete!" });
  } catch (err) {
    console.log("Registration Error:", err);
    res
      .status(500)
      .json({ message: "Something went wrong with the server or database." });
  }
};

module.exports = register;
