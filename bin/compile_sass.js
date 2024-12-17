#!/usr/bin/env node
/**
 * Compile Sass Files By directoy
 */

const handleExit = () => {
  log("Exiting without error.");
  process.exit();
};
const handleError = (e) => {
  error("Error occured during sass generation.");
  error(e);
  process.exit(1);
};

const command = {
  cmd: "sass-compile",
  args: [{ param: "--src", _type: "Source File", desc: "directory to generate sass files.\nNOTE" }],
  execute: (args) => {
    console.log(`Toolbox Command: ${command.cmd} Executed!`);
  },
};
module.exports = {...command};