#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const args = process.argv;
const log = console.log,
  error = console.error;
const root = process.cwd();
log("\n", args);

const handleExit = () => {
  log("Exiting without error.");
  process.exit();
};
const handleError = (e) => {
  error("Error occured during sass generation.");
  error(e);
  process.exit(1);
};

const files = [
//   { filename: "", content: [""] },
  {
    filename: "_lib",
    content: [
      "// library\n",
      "// place your functions, mixins, and sass variables here here",
    ],
  },
  { filename: "_vars", content: ["// variables\n", ":root{--color:#000;}"] },
  { filename: "_animations", content: ["// animations\n"] },
  { filename: "_vars", content: ["// variables\n"] },
  { filename: "main", content: ["// main\n", "@import 'vars.scss','';"] },
];
/**
 * @param {{filename: string, content: string[]}} fileData
 */
const genfile = (fileData) => {
  let fn = fileData.filename;
  let content = fileData.content;  
  fs.writeFile(`${fn}.scss`,content[0],(err)=>{
    if (err) log(err);
    log("generated",`${fn}.scss`)
  });
};
/**
 * Generate files
 * @param {string} dir
 */
const generate = (dir) => {
  console.log("Generating Sass");
  const names = ["_vars", "_layout", "_animations", "_vars", "style"];
  files.forEach(file=>{
    let data = {};
    data.filename = dir.concat('/',file.filename)
    data.content = file.content;
    genfile(data);
  })
  //  let directory = fs.opendirSync(fs);
};
if (args.length > 2) {
  let dir = args[3];
  log(dir);
  let fp = path.resolve(root, dir);
   generate(dir);
//   if (fs.statSync(fp).isDirectory() === true) {
   
//   }
} else console.log("specify directory name");
