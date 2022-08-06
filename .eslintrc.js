module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/prettier',
    // '@vue/typescript/recommended',
  ],
  rules: {
    'no-console': 'off',
    // 아래 vue/multi-word-component-names 에러 발생하여 설정 off
    // 'vue/multi-word-component-names': [
    //   'error',
    //   {
    //     ignores: ['default'],
    //   },
    // ],
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
