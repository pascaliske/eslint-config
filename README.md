# Shared [ESLint config](src/rules.ts)

[![Build Status](https://travis-ci.com/pascaliske/eslint-config.svg?branch=master)](https://travis-ci.com/pascaliske/eslint-config) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=pascaliske/eslint-config)](https://dependabot.com)

## Installation

To install the config use the following command:

```bash
$ yarn add @pascaliske/eslint-config --dev
```

You also need the following peer dependencies:

```bash
$ yarn add eslint @typescript-eslint/{parser,eslint-plugin} --dev
```

## Usage

After installation you can reference the shared config using the following code in your `.eslintrc` file:

`.eslintrc`

```json
{
  "extends": "@pascaliske/eslint-config",
  "env": {
    "browser": true
  }
}
```

For usage in Node.js projects you can also enable the Node.js environment instead:

`.eslintrc`

```json
{
  "extends": "@pascaliske/eslint-config",
  "env": {
    "node": true
  }
}
```

For more information on environments visit the [ESLint documentation](https://eslint.org/docs/user-guide/configuring#specifying-environments).

## License

MIT © 2020 [Pascal Iske](https://pascal-iske.de)
