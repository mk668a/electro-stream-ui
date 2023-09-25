module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.json',
    ecmaVersion: 'latest'
  },
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    'no-unused-vars': 2,
    'no-undef': 2
  },
  ignorePatterns: ['.eslintrc.cjs']
}
