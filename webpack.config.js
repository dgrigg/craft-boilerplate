/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const WebpackShellPlugin = require("webpack-shell-plugin");
const path = require("path");

module.exports = {
  stats: {
    entrypoints: false,
    children: false,
  },
  performance: {
    hints: false,
  },
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./js/main.js",
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "./web"),
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,

        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?.*)?$/i,
        use: "file-loader?name=fonts/[name].[hash].[ext]",
      },
    ],
  },

  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),

    // inject into files
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      jquery: "jquery",
      $: "jquery",
      "window.jQuery": "jQuery",
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash].css",
      chunkFilename: "[id].css",
    }),

    new CleanWebpackPlugin({
      protectWebpackAssets: true,
      cleanOnceBeforeBuildPatterns: [],
      cleanAfterEveryBuildPatterns: [
        "*.js",
        "*.css",
        "*.map",
        "!uploads/**",
        "!assets/**",
      ],
    }),

    new ManifestPlugin({
      filter: ({ name }) => name.endsWith(".js") || name.endsWith(".css"),
    }),

    new WebpackShellPlugin({
      onBuildEnd: ["yarn run copy"],
    }),
  ],

  watch: false,
};
