const styleRules = require('eslint-config-airbnb-base/rules/style').rules;

module.exports = {
  extends: './index.js',
  env: {
    node: true,
    es6: true,
    commonjs: true
  },
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
    'strict': ['error', 'global']
  }
}
