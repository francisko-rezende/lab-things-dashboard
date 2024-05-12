module.exports = {
  // Lint & Prettify TS and JS files
  "*.{js,jsx,ts,tsx}": (filenames) => [
    `npx prettier --write ${filenames.join(" ")}`,
    `npx eslint --fix ${filenames.join(" ")}`,
    `npx vitest run`,
  ],
};
