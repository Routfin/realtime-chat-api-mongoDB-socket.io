module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'func-names': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
  },
};
