/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  bracketSpacing: false,
  trailingComma: 'all',
  plugins: [require('prettier-plugin-tailwindcss')],
}
