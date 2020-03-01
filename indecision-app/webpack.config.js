const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"), // Must be an absolute path!
    filename: "bundle.js"
  }
};
