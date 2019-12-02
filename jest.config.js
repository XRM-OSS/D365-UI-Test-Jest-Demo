module.exports = {
    roots: ['./spec'],
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest"
    },
    reporters: [
        "default",
          [ "jest-junit", { suiteName: "D365 UI Tests", outputDirectory: "reports", outputName: `junit_${new Date().toISOString().replace(/:/g, "")}.xml` } ],
          ["jest-html-reporter", {
            "outputPath": `reports/testSummary_${new Date().toISOString().replace(/:/g, "")}.html`,
            "pageTitle": "Test Report"
          }]
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  }