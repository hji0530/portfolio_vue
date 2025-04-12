module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential', // 또는 'plugin:vue/recommended', 'eslint:recommended' 등
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'vue/multi-word-component-names': 'off', // 단일 컴포넌트 이름 허용
  },
};
