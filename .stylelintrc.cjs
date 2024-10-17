// @see: https://stylelint.io

module.exports = {
  root: true,

  /* 继承某些已有的规则 */
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-prettier/recommended', // 在 Stylelint 中集成 Prettier，使其成为 Stylelint 规则的一部分。
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
  ],

  plugins: ['stylelint-scss', 'stylelint-prettier'], // 配置stylelint sass拓展插件

  /* 自定义规则 */
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
}
