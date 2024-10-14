module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true },

  /* 继承某些已有的规则 */
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],

  /* 指定如何解析语法 */
  parser: '@typescript-eslint/parser',

  /* 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },

  /* 插件 */
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'react-refresh', 'simple-import-sort'],

  /* 自定义规则 */
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // 以字母(或数字或下划线)或“@”后面跟着字母开头的东西,通常为内置模块引入
            '^@?\\w',
            // 内部导入 "@/"
            '^@(/.*|$)',
            `^@/assets$`,
            `^@/components$`,
            `^@/config$`,
            `^@/hooks$`,
            `^@/plugins$`,
            `^@/routers$`,
            `^@/store$`,
            `^@/styles$`,
            `^@/utils$`,
            // 父级导入. 把 `..` 放在最后.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // 同级导入. 把同一个文件夹.放在最后
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            // 样式导入.
            '^.+\\.?(css|less|scss)$',
            // 带有副作用导入，比如import 'a.css'这种.
            '^\\u0000',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'error', // 导出
    'import/order': 'off',
  },
}
