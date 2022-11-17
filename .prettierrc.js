module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  overrides: [
    {
      files: ["*.css", "*.scss", "*.less", "*.yaml", "*.yml"],
      options: {
        singleQuote: false,
        tabWidth: 4,
      },
    },
  ],
  printWidth: 100,
  proseWrap: "always",
  quoteProps: "consistent",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};
