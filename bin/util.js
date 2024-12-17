#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
function Command({}) {}

/**
 * @typedef {fn:string,ext:string,content:string} _file
 */
const file = { _name: "", _ext: "txt", content: "" };
/**@type {_file[]} */
const sass_files = [{ fn: "", ext: "", content: "" }];
/**
 *
 * @param {string} directory
 * @param {string[]} files
 */
const generate = (directory, files) => {};
const outputDir = () => {};
module.exports = { generate, outputDir };
