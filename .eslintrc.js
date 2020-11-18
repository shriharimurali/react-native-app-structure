/** @format */

module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: [
    'react', 'react-native'
  ],
  parserOptions: {
    ecmaVersion: 6,
    "jsx": true,
    "modules": true,
  },
  extends: ['airbnb'],
  rules: {
    // You can override any rules you want
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'no-async-promise-executor': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  },
};
