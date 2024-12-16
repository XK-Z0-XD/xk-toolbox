///<reference types="webpack" />
const path = require("path");
const paths = require('./paths.config');
// const main = require("./main.config")();
const resolvePath = (...paths) => path.resolve(...paths);
const src = path.resolve(__dirname, "src"),
  dist = path.resolve(__dirname, "dist");
const assetTypes = [
  {
    name: "texture",
    regex: /\.(jpe?g|gif|png|svg|heic|pkm|pvr)$/,
    dir: "./data/img/",
  },
  {
    name: "audio",
    regex: /\.(wav|mp3|mpeg|opus|ogg|oga|wav|aac|caf|m4a|m4b|mp4|weba|webm|dolby|flac)$/,
    dir: "./data/audio/",
  },
  { name: "tileset", regex: /\.(tsx|tsj)$/, dir: "./data/tilesets/" },
  { name: "map", regex: /\.(tmx|tmj)$/, dir: "./data/map/" },
  {
    name: "fnt",
    regex: /\.(woff|woff2|ttf|fnt)$/,
    dir: "./data/font/",
  },
  { name: "misc", regex: /\.(xml|bin|glsl|ym|json|js)$/, dir: "./" },
  { name: "stylesheet", regex: /\.css$/, dir: "./styles/" },
];
/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "production",
  entry: [resolvePath(main.source, "index.js")],
  //   target: "",

  output: {
    path: dist,
    filename: (pathData) => {
      return "/jsm/[name].min.js";
    },
    assetModuleFilename: (data) => {

    },
    chunkLoading: "import",
    library: "xk-toolbox",
    libraryTarget: "",
  },
  resolve: {
    extensions: [".ts", "js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
module.exports = config;
