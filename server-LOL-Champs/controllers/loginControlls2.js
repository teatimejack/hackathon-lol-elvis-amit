const { getUserByUsernameDB } = require("../models/user-models.js");

const tryLogin = async (req, res) => {
  const { userName, userPassword } = req.body;
  if (!userName || !userPassword) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUsers = await getUserByUsernameDB(userName);
    if (existingUsers.length === 0) {
      res.status(500).json({ message: "This Username does not exist!" });
    }

    if (existingUsers[0]?.password === userPassword) {
      return res.json({
        message: "Log in Successful!",
        userInfo: existingUsers[0]
      });
    }else {
      res.status(400).json({ message: "Your password is incorrect - try again." });
    }
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({
      message: "Something went wrong with the server or database.",
    });
  }
};

module.exports = tryLogin;
