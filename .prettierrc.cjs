module.exports = {
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  jsxSingleQuote: false,
  parser: "typescript",
  printWidth: 100,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  overrides: [
    {
      files: ["*.json", "*.md", "*.mdx", "*.yml", "*.yaml", "*.css", "*.scss"],
      options: {
        tabWidth: 4,
      },
    },
  ],
};
