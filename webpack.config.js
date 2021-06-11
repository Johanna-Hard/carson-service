const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "/public/src/index.jsx")],
  output: {
    filename: "calendarwidget.js",
    path: path.join(__dirname, "/public"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
