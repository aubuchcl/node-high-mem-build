const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // Use all CPU cores
        terserOptions: {
          compress: {
            passes: 10, // Force high memory use
            drop_console: false
          }
        }
      })
    ]
  }
};
