module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'zk',
    'plugin:ava/recommended'
  ],
  plugins: [
    'ava'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "ava/no-skip-test": ['warn']
  }
}
