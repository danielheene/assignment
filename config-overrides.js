const { override, addBabelPlugin, addBabelPreset } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = override(
  alias(configPaths('./tsconfig.paths.json')),
  addBabelPlugin('@emotion'),
  addBabelPreset('@babel/preset-env'),
  addBabelPreset('@emotion/babel-preset-css-prop')
);
