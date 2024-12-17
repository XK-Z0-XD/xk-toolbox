/**
 * @typedef {"sass-gen"|"test"|"mod-gen"|"help"} cmd
 */
/**
Parameter typedef
 * @typedef {object} param
 @property {string} id parameter id
 @property {string} ptype parameter type
 @property {string|string[]} desc parameter description
 @property {string|string[]} value parameter value
 */
/**
@typedef {Object} command
@property {string} id command name
@property {string} desc command description
@property {string} usage command description
@property {param[]?} args parameters 
@property {Function?} execute execution function 
 */

/**
 *
 * @returns {command[]}
 */
function cmd_list() {
  /**@type {command[]} */
  return [
    // { id: "command", desc: "", args: [] },
    {
      id: "test",
      desc: "test command",
      usage: "npx xk-toolbox test --param=[ANY_VALUE]",
      args: [
        {
          param: "--param",
          _type: "Parameter",
          desc: "command argument param",
        },
      ],
      execute: null
    },
    { id: "help", desc: "lists all commands", args: [] },
    {
      id: "file-gen",
      desc: "generates scss stylesheets in a folder",
      args: [
        {
          param: "--dir",
          _type: "Directory",
          desc: "directory to generate sass files.\nNOTE",
        }, {
          param: "--lang",
          _type: "[]",
          desc: "directory to generate sass files.\nNOTE",
        },
      ],
    },
  ];
}
function cmd({ id = "cmd", args = [], execFn } = params) {
  this.id = id;
  this.args = args;
  this.execFn = execFn;
}

module.exports = { cmd_list };
