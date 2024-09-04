const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("@effortlessmotion/html-webpack-inline-source-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist/prod"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: "body",
      template: "client/src/index.html",
      inlineSource: ".(js|css)$",
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
});
