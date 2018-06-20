import { join } from "path";
import { CheckerPlugin } from "awesome-typescript-loader";
import CleanWebpackPlugin from "clean-webpack-plugin";
import DotEnvWebpackPlugin from "dotenv-webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export default {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devtool: "inline-source-map",
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3001",
    "webpack/hot/only-dev-server",
    join(process.cwd(), "src", "index.hmr.tsx")
  ],
  output: {
    chunkFilename: `[name].chunk.js`,
    filename: `[name].js`,
    path: join(process.cwd(), "dist"),
    publicPath: "/",
  },
  module: {
    rules: [{
      test: /\.pug$/,
      use: "pug-loader",
    }, {
      test: /\.css$/,
      use: [
        process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    }, {
      test: /\.tsx?$/,
      use: [{
        loader: "babel-loader"
      }, {
        loader: "awesome-typescript-loader",
        options: {
          configFileName: `tsconfig.${process.env.NODE_ENV}.json`
        }
      }]
    }]
  },
  plugins: [
    new CheckerPlugin(),
    new CleanWebpackPlugin(join(process.cwd(), "dist")),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV !== "production" ? "[name].css" : "[name].[hash].css",
      chunkFilename: process.env.NODE_ENV !== "production" ? "[id].css" : "[id].[hash].css",
    }),
    new DotEnvWebpackPlugin({
      path: "./.env",
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: "sha256",
      hashDigest: "hex",
      hashDigestLength: 20
    }),
    new HtmlWebpackPlugin({
      template: "src/index.pug",
      inject: true
    })
  ]
} as webpack.Configuration
