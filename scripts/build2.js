#!/usr/bin/env node
const root = process.cwd();
const fs = require("fs");
const path = require("path");
const sass = require("sass");
// const config = require("../config/main.config")(root);
const resolve = (p, dir) => path.resolve(p, dir);
const configFactory = require("../webpack.config");
const webpack = require("webpack");
const log = console.log,
  error = console.error;
const webpackConfig = configFactory();
const compiler = webpack(webpackConfig);
compiler.compile((results)=>{
    log(results);
})
const outputDir = (fp) => {
  let sep = path.sep;
  let folders = fp.split(sep);
  log(folders);
  let filepath = root;
  for (const i in folders) {
    if (folders[i].length > 0) {
      filepath = filepath.concat(path.sep, folders[i]);
      if (fs.existsSync(filepath)) {
      } else {
        fs.mkdirSync(filepath);
      }
    }
  }
  return filepath
};
