// https://github.com/okonet/lint-staged#how-can-i-ignore-files-from-eslintignore

const { ESLint } = require('eslint');

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file);
    })
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles.join(' ');
};

module.exports = {
  '**/*.{ts,tsx,js,jsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`eslint --fix ${filesToLint}`];
  },
};
