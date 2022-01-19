module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    //全局变量。当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了
    window:true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0, //禁用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, //禁用debugger
    'semi': ['error', 'never'], // 不使用分号
    'import/extensions': 'off', // 取消对文件扩展名的验证
    'eqeqeq': 2, //要求使用 === 和 !==
    'comma-dangle': [2, 'never'], //禁止末尾逗
    'comma-spacing': 2, //强制在逗号前后使用一致的空格
    'no-var': 2,
    'quotes': [1, 'single', 'avoid-escape'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['TemplateLiteral']
      }
    ] // 缩进规则
  }
}
