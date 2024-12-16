#!/usr/bin/env node
// const process = require("process");
const root = process.cwd();
const fs = require("fs");

const path = require("path");
const sass = require("sass");
const config = require("../config/main.config")(root);
const resolve = (p, dir) => path.resolve(p, dir);
const log = console.log,
  error = console.error;

//build sass
let regex = /.(scss|sass)$/;
/**
 *
 * @param {string} dir
 */
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
const copyFile = (src) => {
  let sep = path.sep;
  log(filename);
  let folders = fp.split(sep);
  log(folders);
  let filepath = root;
};
const sass_files = {
  /**
   *
   * @param {string} _dir
   * @param {string} file
   */
  compile: (_dir, file) => {
    let temp = resolve(_dir, file);
    let fp = resolve(_dir, file);
    let stat = fs.statSync(fp);
    // log(_dir);
    if (stat.isDirectory()) {
      let x = fs.readdirSync(fp);
      x.forEach((f) => {
        sass_files.compile(fp, f);
      });
    } else {
      let outDir = path.relative(root, _dir);
      outDir = outDir.replace(`src${path.sep}`, `dist${path.sep}`);
      // log(file, outFile);
      if (regex.test(file) == true) {
        if (!file.startsWith("_")) {
          let result = sass.compile(fp, {
            style: "expanded",
            sourceMapIncludeSources: false,
            quietDeps: true,
          });

          sass_files.output(
            outDir.concat(path.sep),
            file.substring(0, file.indexOf(".scss")),
            result
          );
        }
      } else if (/\.(ttf|otf)$/.test(file) == true) {
        let filepath = outputDir(outDir);
        filepath = filepath.concat(path.sep,file);
        let src = path.join(_dir,file);
        fs.copyFileSync(src,filepath);
      }
    }
  },
  /**
   * @param {string} fp
   * @param {sass.CompileResult} content
   */
  output: (fp, filename, content) => {
    let sep = path.sep;
    log(filename);
    let folders = fp.split(sep);
    log(folders);
    filepath = outputDir(fp);
    filepath = filepath.concat(`${path.sep}${filename}.css`);
    let buff = new Uint8Array(content.css).buffer;
    fs.writeFileSync(filepath, content.css, { encoding: "utf-8" });
    // folders.forEach((folder) => {

    //   let dir = path.relative(root, folder);
    // if (fs.existsSync(dir))
    // });
    // fs.appendFileSync(fp, new Uint8Array(content.css));
  },

};
const compile = (_dir, file) => {
  let temp = resolve(_dir, file);

  let fp = resolve(_dir, file);
  let stat = fs.statSync(fp);
  if (stat.isDirectory()) {
    let x = fs.readdirSync(fp);
    x.forEach((f) => {
      compile(fp, f);
    });
  } else {
    if (regex.test(file) == true) {
      if (/^_/) {
      } else {
      }
      let result = sass.compile(fp, {
        style: "compressed",
        sourceMapIncludeSources: false,
      });
      sass_files.output();
    }
  }
};
// function compile(files) {}
function compileCss() {
  const dir = config.source.styles;
  let temp = "";
  // log("compiling sass...", dir);
  let files = fs.readdirSync(dir);
  files.forEach((f) => {
    // let temp_dir = resolve();
    let fp = resolve(dir, f);
    sass_files.compile(dir, f);
  });
  // let child = cp.execSync("sass -")
}
//check for dist folder
log(path.relative(root, "src/styles"));
compileCss();
// const webpack = require('webpack');
