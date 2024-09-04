var path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    lib: "./server/src/lib.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist/prod"),
    libraryTarget: "var",
    library: "AppLib",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "server/src/api.js",
          to: "api.js",
          toType: "file",
        },
        {
          from: "appsscript.json",
          to: "appsscript.json",
          toType: "file",
        },
      ],
    }),
  ],
};
