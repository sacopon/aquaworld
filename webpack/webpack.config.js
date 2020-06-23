const path = require("path");

const sourceDir = path.join(__dirname, "../src");
const publicDir = path.join(__dirname, "../dist");
const assetDir = path.join(__dirname, "../assets");

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: publicDir,
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      // for .ts files
      {
        test: /\.ts$/,
        use: "ts-loader",
      }
    ],
  },
  resolve: {
    modules: [
      path.resolve(sourceDir),
      "node_modules",
    ],
    extensions: [".ts", ".js"],
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    contentBase: [publicDir, assetDir],
  }
};
