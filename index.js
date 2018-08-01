module.exports = {
  extends: [
    'airbnb',
    './rules/base'
  ].map(require.resolve),
  rules: {
    // Add support for *.js files in react project
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],

    // Disable formatting rules conflicting with Prettier
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
  }
}
