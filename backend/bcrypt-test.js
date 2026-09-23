const bcrypt = require("bcryptjs");

// Hash a password
const plainPassword = "John@1234";
const hash = bcrypt.hashSync(plainPassword, 10);
console.log("hash:", hash);

// Compare correct password
const match = bcrypt.compareSync(plainPassword, hash);
console.log("correct password match:", match);

// Compare wrong password
const noMatch = bcrypt.compareSync("wrongPassword", hash);
console.log("wrong password match:", noMatch); 