const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // You can choose any available port
const crypto = require("crypto");

const randomString = generateRandomString(5);

app.get("/", (req, res) => {
  res.send(randomString);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function generateRandomString(length) {
  const randomBytes = crypto.randomBytes(length);
  const randomString = randomBytes.toString("base64");
  return randomString;
}
