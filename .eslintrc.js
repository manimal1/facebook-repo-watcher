module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-closing-bracket-location": "tag-aligned",
    "react/forbid-prop-types": "disabled",
    "jsx-a11y/label-has-for": "disabled",
    "arrow-body-style": ["error", "as-needed"],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never"
    }],
    "operator-linebreak": ["error", "before", {
      "overrides": { "&&": "ignore" }
    }],
    "no-shadow": ["error", {  "builtinGlobals": false, "hoist": "never", "allow": [] }],
  }
};
