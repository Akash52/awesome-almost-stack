export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["text", "lcov"],
  coverageThreshold: {
    global: {
      branch: 100,
      function: 100,
      lines: 100,
      statements: 100,
    },
  },
};
