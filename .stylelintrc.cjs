module.exports = {
  extends: ['stylelint-prettier/recommended'],
  syntax: 'css',
  rules: {
    'at-rule-no-unknown': null,
    'media-feature-name-no-unknown': true,
    'declaration-block-single-line-max-declarations': 100,
    'selector-pseudo-element-colon-notation': 'single',
    'color-hex-case': null,
    'no-descending-specificity': null,
    'number-leading-zero': null,
    'block-closing-brace-newline-after': null,
    'at-rule-empty-line-before': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-block-trailing-semicolon': null,
    'function-comma-newline-after': null
  }
}
