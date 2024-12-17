#!/usr/bin/env node

/**
 * 
 * @param {string[]} args 
@param {function (result:any)=>void} cb
 */
const generateSassFiles = (args, cb) => {
  cb("Command Executed");
};
/**
 * 
 */
const command = {
  cmd: "sass-gen",
  args: [{ param: "--dir", _type: "Directory", desc: "directory to generate sass files.\nNOTE" }],
  execute: (args) => {
    console.log(`Toolbox Command: ${command.cmd} Executed!`);
  },
};
module.exports = {...command};
