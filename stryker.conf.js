module.exports = function(config) {
  config.set({
    mutate: ["index.ts"],
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    thresholds: {high: 99, low: 95, break: 90},
  });
};
