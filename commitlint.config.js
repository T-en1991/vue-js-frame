module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复问题
        'docs', // 文档记录
        'style', // 修复代码格式
        'refactor', // 重构代码
        'test', // 测试相关
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚
        'merge', // 合并代码
        'depend' // 添加第三方依赖
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
};
