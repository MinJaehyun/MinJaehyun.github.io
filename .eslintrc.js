module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/prettier'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        endOfLine: 'auto',
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
