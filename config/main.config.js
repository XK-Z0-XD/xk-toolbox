const path = require("path");
const resolve = (p, dir) => path.resolve(p, dir);
const join = path.join;
const paths = {}
const getConfig = (root) => {
  const src = resolve(root, "src");
  const output = resolve(root, "dist");
  return {
    source: {
      jsm: join(src, "lib"),
      styles: resolve(src, "styles"),
    },
    build: {
      jsm: resolve(output, "jsm"),
      styles: resolve(output, "styles"),
    },
  };
};
module.exports = getConfig;
// module.exports = {};
