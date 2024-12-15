///<reference types="webpack" />
const path = require("path");
const main = require('../main.config')();
const resolvePath = (...paths)=>path.resolve(...paths);
const src = path.resolve(__dirname, "src"),
  dist = path.resolve(__dirname, "dist");

/**
 * @type {import("webpack").Configuration}
 */
const config = {
  mode: "production",
  entry: [
    resolvePath(main.source,"index.js")
  ],
//   target: "",
  output:{
    path: dist,
    filename: `${dist}`
  },
  module:{
    rules:[
        {
            
        }
    ]
  }

};
module.exports = config;
