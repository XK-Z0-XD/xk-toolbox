const fs = require("fs");
const path = require("path");
const {cmd_list} = require("./command");
// const cmdList = [
//   require("./cmd_gen"),
//   require("./cmd_help"),
//   require("./cmd_help"),
// ];
const getCommands = () => {
  let files = fs.readdirSync(__dirname);
  let cmds = [];
  let total = 0;
  files.forEach((file) => {
    if (file.startsWith("cmd_")) {
      const fp = path.join(__dirname, file);
      const cmd = require(fp);
      total = cmds.push(cmd);
    }
  });
  return cmds;
};
const help=()=>{

};

module.exports = {getCommands,help};
