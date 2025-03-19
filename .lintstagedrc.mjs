export default {
  '*.{js,ts,mjs,mts}': (filenames) => [
    `npx prettier --write ${filenames.join(' ')}`,
    `eslint . --fix --ignore-pattern "dist/*"`,
  ],
};
