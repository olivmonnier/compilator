const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

/**
 *
 * @param {string} dir
 */
function loadFiles(dir) {
  let srcPath = path.resolve(dir)

  if (fs.existsSync(srcPath) && fs.lstatSync(srcPath).isDirectory()) {
    srcPath = path.join(srcPath, '/**')
  } 
  
  return globSync(srcPath, { nodir: true, windowsPathsNoEscape: true });
}

module.exports = loadFiles;
