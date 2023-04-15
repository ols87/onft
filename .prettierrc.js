module.exports = {
  overrides: [
    {
      files: "*.sol",
      options: {
        bracketSpacing: false,
        printWidth: 300,
        tabWidth: 2,
        useTabs: false,
        singleQuote: false,
        explicitTypes: "never",
      },
    },
    {
      files: "*.ts",
      options: {
        printWidth: 145,
        semi: false,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "es5",
      },
    },
    {
      files: "*.js",
      options: {
        printWidth: 145,
        semi: false,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "es5",
      },
    },
  ],
}
