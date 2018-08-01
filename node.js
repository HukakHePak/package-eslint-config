const styleRules = require('eslint-config-airbnb-base/rules/style').rules;

module.exports = {
  extends: [
    'airbnb-base',
    './rules/base.js'
  ],
  env: {
    node: true,
    es6: true,
    commonjs: true
  },
  plugins: [
    'node',
  ],
  parserOptions: {
    // Nodejs used commonjs modules by default.
    sourceType: 'script',
    ecmaFeatures: {
      jsx: false,
    }
  },
  rules: {
    // Allow to reassign props for sequelize db models.
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', { 'props': false }],
    // Allow for-of loops in nodejs.
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax':  styleRules['no-restricted-syntax'].filter((rule) => {
      if (rule && typeof rule === 'object') {
        if (rule.selector === 'ForOfStatement') {
          return false
        }
      }
      return true
    }),
    // Require to use strict mode in nodejs.
    // https://eslint.org/docs/rules/strict
    'strict': ['error', 'global'],

    'node/exports-style': ['error', 'module.exports'],
    'node/no-deprecated-api': 'error',
    'node/process-exit-as-throw': 'error',
  }
}
