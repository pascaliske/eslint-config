# Shared [ESLint config](src/rules.ts)

[![npm (scoped)](https://img.shields.io/npm/v/@pascaliske/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@pascaliske/eslint-config) [![GitHub Tag](https://img.shields.io/github/tag/pascaliske/eslint-config.svg?style=flat-square)](https://github.com/pascaliske/eslint-config) [![Build Status](https://img.shields.io/github/workflow/status/pascaliske/eslint-config/Test%20package/master?label=test&style=flat-square)](https://github.com/pascaliske/eslint-config/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT) [![GitHub Last Commit](https://img.shields.io/github/last-commit/pascaliske/eslint-config?style=flat-square)](https://github.com/pascaliske/eslint-config) [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg?style=flat-square)](https://github.com/Naereen/badges)

## Installation

To install the config use the following command:

```bash
yarn add @pascaliske/eslint-config --dev
```

For TypeScript projects you will also need the following peer dependencies:

```bash
yarn add eslint @typescript-eslint/{parser,eslint-plugin} --dev
```

For Angular projects you will also need the following peer dependencies:

```bash
yarn add eslint @typescript-eslint/{parser,eslint-plugin} @angular-eslint/{template-parser,eslint-plugin,eslint-plugin-template} --dev
```

## Usage

There are three possible types of configurations available: `base` (only JS), `typescript` (JS + TS) and `angular` (JS + TS + Angular specifics). You can reference those by adding a suffix to the extends value in your config file (e.g. `@pascaliske/eslint-config/angular`). The `base` configuration will be used as default when the suffix is missing.

`.eslintrc`

```json
{
  "root": true,
  "extends": "@pascaliske/eslint-config/base", // or typescript / angular
  "env": {
    "browser": true
  }
}
```

For usage in Node.js projects you can also enable the Node.js environment instead:

`.eslintrc`

```json
{
  "root": true,
  "extends": "@pascaliske/eslint-config/base", // or typescript / angular
  "env": {
    "node": true
  }
}
```

For usage in TypeScript and Angular projects you have to use a JS based config file and explicitly set parser options with a `tsconfig.json`-file:

`.eslintrc.js`

```js
module.exports = {
    root: true,
    extends: "@pascaliske/eslint-config/typescript", // or angular
    parserOptions: {
        project: `${__dirname}/tsconfig.json`,
        createDefaultProgram: true,
    },
    env: {
        node: true,
    },
}
```

For more information on environments visit the [ESLint documentation](https://eslint.org/docs/user-guide/configuring#specifying-environments).

## License

MIT © 2022 [Pascal Iske](https://pascaliske.dev)
