const { cmd_list } = require("./command.js");
/**@type {import("./command.js").command} */
const command = {
  id: "help",
  desc: "lists all commands",
  args: [],
  execute: (args=[]) => {
    const _list = cmd_list();
    console.log(`Toolbox Command: ${command.id} Executed!`);
    for (const cmd of _list){
      console.log(`${cmd.id}\t${cmd.desc}`);
      console.log()

    }
  },
};
module.exports = command;
