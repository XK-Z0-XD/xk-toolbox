#!/usr/bin/env node
const process = require("process");
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
const compile = (_dir, file) => {
  let temp = resolve(_dir, file);
  let fp = resolve(dir, file);
  let stat = fs.statSync(fp);
  if (stat.isDirectory()) {
    let x = fs.readdirSync(fp);
    x.forEach((f)=>{
      
    })
  }else{
	  if (regex.test(file)==true){
      
	  }
  }
};
// function compile(files) {}
function compileCss() {
 
  const dir = config.source.styles;
  let temp = "";
  log("compiling sass...", dir);
  let files = fs.readdirSync(dir);

  files.forEach((f) => {
    // temp = resolve();
    let temp_dir = resolve(dir);
    let fp = resolve(dir, file);
    let stat = fs.statSync(fp);
    compo
  });
  // let child = cp.execSync("sass -")
}
//check for dist folder

compileCss();
// const webpack = require('webpack');
