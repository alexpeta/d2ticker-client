module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {},
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint'
};
