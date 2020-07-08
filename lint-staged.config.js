module.exports = {
  'src/**/*.{ts, tsx}': () => 'tsc -p . noEmit',
  'src/**/*.{css, less, sass}': ['stylelint --fix'],
  'src/**/*.{js, jsx, ts, tsx}': ['prettier --write', 'eslint --fix'],
};
