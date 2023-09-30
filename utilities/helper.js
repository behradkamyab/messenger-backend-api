const crypto = require("crypto");

exports.hashNumber = (number) => {
  const hash = crypto.createHash("sha256");
  hash.update(number.toString());
  const hashedNumber = hash.digest("hex");
  return hashedNumber;
};
