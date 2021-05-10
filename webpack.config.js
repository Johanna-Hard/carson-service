const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/public/src/index.jsx"),
  output: {
    filename: "calendarwidget.js",
    path: path.join(__dirname, "/public"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // devServer: { contentBase: path.join(__dirname, 'public') },
  // mode: 'development'
};
