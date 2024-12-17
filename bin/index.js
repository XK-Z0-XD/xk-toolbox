#!/usr/bin/env node
/** process all commands */
const { cmd_list } = require("./cmd/command");
// const help = require("./cmd/cmd_help");
const { getCommands, help } = require("./cmd");
const log = console.log,
  error = console.error;
const handleExit = () => {
  log("Exiting without error.");
  process.exit();
};
const handleError = (e) => {
  error("Error occured during Command Execution.");
  error(e);
  process.exit(1);
};
const cmds = getCommands();
let cmd_args = [];
/**
 * get command from args
 * @param {string[]} args
 */
const get_cmd = (args) => {
  //process arguments
  let command = null;
  let params = [];
  if (args.length > 0) {
    const cmd_arg = args[0];
    /**@type {import("./cmd/command").param} */
    for (const c of cmds) {
      //find command
      if (cmd_arg === c.id) {
        command = c;
        if (c.args != null && c.args.length > 0) {
          //get arguments
          for (const i in command.args) {
            if (args.includes(command.args[i], 0)) {
              /**@type {import("./cmd/command").param} */
              let param = command.args[i];
              if (i < args.length) {
                if (i + 1 < args.length) {
                  //get parameter id it's not at end or args array
                  param.value = args[i + 1];
                }
              }
            }
          }
        }
      }
    }
  }
  return { command, params };
};
// PROCESS COMMAND
const args = process.argv.slice(2);
if (args.length > 0) {
  let cmd = get_cmd(args);
  if (cmd.command !== null) {
    if (cmd.command !== null) cmd.command.execute(cmd.params);
    else log("Unknown toolbox command: ", args[0]);
  } else {
    help();
  }
}
