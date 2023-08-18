/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

const { interpolateName } = require('loader-utils')

module.exports = function (content) {
  let filename = this._compilation.outputOptions.filename;
  filename = filename.slice(0, filename.lastIndexOf('/'))

  const name = interpolateName(
    this,
    '[contenthash].[ext]',
    {
      context: this.rootContext,
      content,
    }
  );

  this.emitFile(`${filename}${require("path").sep}${name}`, content);

  return `
try {
  process.dlopen(module, __dirname + require("path").sep + __webpack_public_path__ + ${JSON.stringify(
    name
  )}${
      ""
  });
} catch (error) {
  throw new Error('node-loader:\\n' + error);
}
`;
}

module.exports.raw = true;
