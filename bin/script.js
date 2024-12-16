#!/usr/bin/env node
/**
 */
"use strict";
const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const args = process.argv;
const log = console.log,
  error = console.error;
const root = process.cwd();
log('\n',args);
const handleExit = () => {
    log("Exiting without error.");
    process.exit();
};
const handleError = (e) => {
    error("Error occured during sass generation.")
    error(e);
    process.exit(1);
};
/**
 * generate
 */
const generate_scss = (dir, ext = "scss") => {
  log("Generating Sass Files");
  const fn = ["_lib", "_index", "_vars", "_layout", "_ctrl"];
    const child = cp.execSync(`./gen_sass.sh ${dir}`);
    
    log(child.toString());
  try {    
    
  } catch (e) {
    log("sass generation failed.");
    log(e);
  }
};
const displayCmds = ()=>{
    log("Commands: ");
    log("generate-sass","\nparameters")
}

if (args.length>=2){
    const cmd = args[2]
    switch(cmd){
        case "generate-sass": 
        //code here 
        let dir = args[3];
        generate_scss(dir);
        break;
        // case "generate-sass": 
        // //code here 
        // break;
        case "help": 
        //code here 
        break;
        
    default: 
    
    ;
    }
}
const cmds = [
    {cmd: "", cmd_func:()=>{}},
//     {cmd: "", cmd_func:(dir, ext = "scss") => {
//   log("Generating Sass Files");
//   const fn = ["_lib", "_index", "_vars", "_layout", "_ctrl"];
//   try {
//     fs.opendirSync(dir);

//   } catch (e) {
//     log("sass generation failed.");
//     log(e);
//   }
// }}
]
