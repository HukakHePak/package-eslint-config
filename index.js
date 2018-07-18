const styleRules = require('eslint-config-airbnb-base/rules/style').rules;

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'prettier'
  ],
  plugins: [
    'no-use-extend-native',
    'unicorn',
    'promise',
    'node',
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5'
    }],
    'valid-jsdoc': ['error', {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
    }],
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    // allow use of functions before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    // allows unary operators ++ and -- in the afterthought (final expression) of a for loop.
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    // suggest using of const declaration for variables that are never modified after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': ['error', {
      destructuring: 'all', // changed from 'any' to 'all'
      ignoreReadBeforeAssign: true,
    }],
    // allow for-of loops
    // https://eslint.org/docs/rules/no-restricted-syntax
    // https://github.com/airbnb/javascript/blob/a12dec90d173464a3fc4e4536b8c6f639fb93236/packages/eslint-config-airbnb-base/rules/style.js#L334
    'no-restricted-syntax':  styleRules['no-restricted-syntax'].filter((rule) => {
      if (rule && typeof rule === 'object') {
        if (rule.selector === 'ForOfStatement') {
          return false
        }
      }
      return true
    }),
    // allow to reassign props
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', { 'props': false }],

    'promise/catch-or-return': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': ['error', {allowReject: true}],
    'promise/param-names': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/valid-params': 'error',

    'node/exports-style': ['error', 'module.exports'],
    'node/no-deprecated-api': 'error',
    'node/process-exit-as-throw': 'error',

    'import/default': 'error',
  }
}
