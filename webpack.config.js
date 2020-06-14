const path = require("path");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "src_esm", "index.js"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "LIB",
    libraryTarget: "var"
  },
  plugins: [
    new EsmWebpackPlugin()
  ],
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      helpers: path.resolve(__dirname, "src/helpers/"),
      Helpers: path.resolve(__dirname, "src/helpers/"),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/transform-runtime"],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // {
      //   test: /\.js?$/,
      //   use: ["babel-loader"],
      // },
      // {
      //   test: /\.jsx?$/,
      //   use: ["babel-loader"],
      // },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
