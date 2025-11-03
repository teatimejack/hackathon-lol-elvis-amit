const { getUserByUsernameDB } = require("../models/user-models.js");

const tryLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUsers = await getUserByUsernameDB(username);
    if (existingUsers.length === 0) {
      res.json({ message: "This Username does not exist!" });
    }

    if (existingUsers.password === password) {
      res.json({
        message: "Log in Successful!",
        userInfo: existingUsers[0],
      });
    } else {
      res.json({ message: "Your password is incorrect - try again." });
    }
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({
      message: "Something went wrong with the server or database.",
    });
  }
};

module.exports = tryLogin;
