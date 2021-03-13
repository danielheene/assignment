const babelConfig = require('../.babelrc.js');

module.exports = {
  reactOptions: {
    strictMode: true,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    'storybook-addon-emotion-theme',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'babel-loader',
      options: {
        ...babelConfig,
        cacheDirectory: true,
      },
    });

    return config;
  },
};
