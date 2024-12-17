const command = {
  id: "test",
  desc: "test command",
  args: [
    {
      param: "--param",
      _type: "Parameter",
      desc: "command argument param",
    },
  ],
  execute: (args) => {
    console.log(`Toolbox Command: ${command.id} Executed!`);
    if (args){
      console.log("arguements: ",args);
    }
  },
};
module.exports = command;
