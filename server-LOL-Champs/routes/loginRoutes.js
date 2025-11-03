const { Router } = require("express");
const tryLogin = require("../controllers/loginControlls2.js");

const router = Router();

router.post("/", tryLogin);

module.exports = router;
