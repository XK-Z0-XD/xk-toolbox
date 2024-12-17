//types defs
/**@module types*/

/**
Parameter typedef
 * @typedef {object} param
 @property {string} id parameter id
 @property {string} ptype parameter type
 @property {string|string[]} desc parameter description
 */
/**
@typedef {Object} command
@property {string} cmd command name
@property {string} desc command description
@property {param[]} args parameters 
@property {function execute(args:string[],cb?:function(results:any)=>void)=>void} args parameters 

 */
/**@typedef {id:string,_type:string,desc:string[]} param */
/**@typedef {cmd:string, desc: string, args?: param[],fn:function(string[])} command */
module.exports = {
    /**@type {command} */
  example: {
    cmd: "example",
    args: [],
    desc: "example command",
    execute: (args)=>{

    }
  },
};
