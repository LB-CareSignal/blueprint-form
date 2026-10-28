const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');

module.exports = [
  {
    ignores: ['dist/', 'public/']
  },
  js.configs.recommended,
  ...tseslint.configs['flat/recommended'],
  react.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  jsxA11y.flatConfigs.recommended,
  {
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'no-restricted-globals': 0,
      'react/prop-types': 0,
      'react/destructuring-assignment': 0,
      'no-plusplus': 0,
      'react/jsx-filename-extension': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-require-imports': 0,
      'quotes': ['error', 'single'],
      'no-useless-escape': 'off',
      'no-console': ['error', { 'allow': ['error', 'info', 'warn'] }],
      'semi': ['error', 'always'],
      'eol-last': ['error', 'always']
    }
  }
];
