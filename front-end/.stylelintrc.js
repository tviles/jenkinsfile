module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-no-unsupported-browser-features"],
  rules: {
    indentation: 4,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["include", "mixin"]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"]
      }
    ],
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning",
        ignore: ["font-unicode-range", "css-resize"]
      }
    ]
  }
};
