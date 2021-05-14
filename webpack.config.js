const TerserPlugin = require("terser-webpack-plugin"); // 引入压缩插件

module.exports = {
  mode: "production", // 因为默认是production 默认会进行压缩
  entry: {
    "more-logger": "./src/index.js",
    "more-logger.min": "./src/index.js",
  },

  output: {
    filename: "[name].js",
    library: "moreLogger",
    // libraryExport: "default", // 不添加的话引用的时候需要 tools.default
    libraryTarget: "umd", // var this window ...
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 使用压缩插件
        include: /\.min\.js$/,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
