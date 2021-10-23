module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,

  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    "only-warn"
  ],
  // add your custom rules here
  rules: {
    'eqeqeq': 1,
    'curly': 1,
    'quotes': 1,
    "no-unused-vars": "warn",
    "no-undef": "warn"
  }
}
