var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: ["webpack-hot-middleware/client", "./index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack-loader"
        ]
      },
      {
        test: /\.css?$/,
        loaders: ["style-loader", "raw-loader"],
        include: __dirname
      }
    ]
  }
};
