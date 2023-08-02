module.exports = {
  extends: [
    'plugin:unicorn/recommended',
    'prettier'
  ],
  plugins: [
    'no-use-extend-native',
    'unicorn',
    'promise',
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

    'promise/catch-or-return': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': ['error', {allowReject: true}],
    'promise/param-names': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/valid-params': 'error',

    'import/default': 'error',

    // Disable formatting rules conflicting with Prettier
    'unicorn/number-literal-case': 'off',
    "react/jsx-curly-newline": "off",
  }
}
