const jwt = require("jsonwebtoken");
//Generate JWT
const generateAccessToken = (id, ACCESS_TOKEN_SECRET) => {
  return jwt.sign({ id }, ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = { generateAccessToken , generateRefreshToken }