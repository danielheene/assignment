const tsconfig = require('./tsconfig.json');
const paths = Object.keys(tsconfig.compilerOptions.paths || {})
  .map((path) => path.replace('/*', ''))
  .join('|');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  ignorePatterns: ['.cache/**/*', 'node_modules/**/*', 'public/**/*'],
  plugins: [
    '@typescript-eslint',
    '@emotion',
    'security',
    'simple-import-sort',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/ban-ts-comment': 0,
    '@emotion/no-vanilla': 'error',
    '@emotion/jsx-import': 0,
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [`^(${require('module').builtinModules.join('|')})(/|$)`],
          ['^react', `^(?!(${paths}))(@?\\w+)`],
          [
            `^${paths}`,
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],
    'sort-imports': 'off',
    'import/order': 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
