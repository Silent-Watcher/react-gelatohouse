export default {
  '*.{js,jsx,ts,tsx}': ['oxlint --fix', 'oxfmt'],
  '*.{json,jsonc,css,scss,html,md,yml,yaml}': ['oxfmt'],
};