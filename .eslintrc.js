module.exports = {
  extends: [
    'xo-space/esnext',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'no-use-extend-native',
    'unicorn',
    'promise',
    'import',
    'node'
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'valid-jsdoc': ['error', {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
    }],
    'no-invalid-this': 'error',
    'no-unused-vars': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': 'error',
    'max-len': [2, {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
    }],
    'max-lines': ['warn', {
      'max': 500,
      'skipBlankLines': true,
      'skipComments': true
    }],
    'no-tabs': 'error',
    'quote-props': ['error', 'consistent'],
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    'arrow-parens': ['error', 'always'],
    'generator-star-spacing': ['error', 'after'],
    'no-var': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'rest-spread-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', {
      destructuring: 'all'
    }],
    'prefer-numeric-literals': 'error',
    'consistent-return': 'error',

    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    'promise/no-return-in-finally': 'error',
    'promise/prefer-await-to-then': 'error',

    'node/process-exit-as-throw': 'error',
    'node/no-deprecated-api': 'error',
    'node/exports-style': ['error', 'module.exports'],
    'node/no-unpublished-require': 'error',

    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': ['error', {
      js: 'never',
      json: 'never',
      jsx: 'never'
    }],
    'import/first': 'error',
    'import/named': 'error',
    'import/no-absolute-path': 'error',
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': ["error", {'devDependencies': ['test/**/*.js']}],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/order': 'error',
    'import/prefer-default-export': 'error',
  }
}
