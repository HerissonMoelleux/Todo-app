export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "custom-property-pattern": null,
    "selector-class-pattern": null,
    "alpha-value-notation": "number",
    "color-function-notation": "legacy",
  },
  overrides: [
    {
      files: ["**/*.module.css"],
      rules: {
        "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
      },
    },
  ],
};
