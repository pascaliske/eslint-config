# Shared [ESLint config](src/index.ts)

[![Build Status](https://travis-ci.com/pascaliske/eslint-config.svg?branch=master)](https://travis-ci.com/pascaliske/eslint-config) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=pascaliske/eslint-config)](https://dependabot.com)

## Installation

To install the module use the following commands:

```bash
$ yarn add @pascaliske/eslint-config
```

## Usage

`.eslintrc`

```json
{
  "extends": "@pascaliske/eslint-config",
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "env": {
    "browser": true
  }
}
```

## License

MIT © [Pascal Iske](https://pascal-iske.de)
