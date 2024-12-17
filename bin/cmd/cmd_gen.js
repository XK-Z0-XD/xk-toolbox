#!/usr/bin/env node

/**
 *
 */
const command = {
  id: "file-gen",
  args: [
    {
      param: "--dir",
      _type: "Directory",
      desc: "directory to generate files.\nNOTE",
    },    {
      param: "--lang",
      _type: "[js|ts|scss]",
      desc: "directory to generate files.\nNOTE",
    },
  ],
  execute: (args) => {
    console.log(`Toolbox Command: ${command.id} Executed!`);
  },
};
module.exports = { ...command };
