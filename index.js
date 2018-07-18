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
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

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
