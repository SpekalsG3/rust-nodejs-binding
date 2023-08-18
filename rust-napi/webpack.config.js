const _ = require('lodash')
const path = require('path')

module.exports = (options) => {
  return _.mergeWith(options, {
    module: {
      rules: [
        {
          test: /\.node$/,
          use: [{
            loader: "custom-node-loader",
          }]
        }
      ]
    },
    resolveLoader: {
      alias: {
        'custom-node-loader': path.resolve(__dirname, 'webpack.node-loader.js')
      }
    }
  }, (objValue, srcValue) => {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  })
}
