const path = require('path');
const root = process.cwd();
const rel = path.relative;
module.exports = {
  lib: root,
  src: path.resolve(root, "src/lib"),
  srcStyle: path.resolve(root, "src/styles"),
  srcIndex: path.resolve(root, "src/lib", "index.js"),
  build: path.resolve(root, "build"),
  cache: path.resolve(root,"node_modules/.cache"),
  rel,
};