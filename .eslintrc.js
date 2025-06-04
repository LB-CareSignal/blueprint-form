// .eslintrc.js
module.exports = {
  root: true, // Make sure ESLint stops looking for config files in parent directories
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    "no-restricted-globals": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "no-plusplus": 0,
    "react/jsx-filename-extension": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-var-requires": 0,
    "quotes": ["error", "single"],
    "no-useless-escape": "off",
    "no-console": ["error", {"allow": ["error", "info", "warn"]}],
    "semi": ["error", "always"],
    "eol-last": ["error", "always"]
  },
  ignorePatterns: ['public/', 'node_modules/'],
};