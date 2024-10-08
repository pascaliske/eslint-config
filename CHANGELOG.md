## [3.0.1](https://github.com/pascaliske/eslint-config/compare/v3.0.0...v3.0.1) (2024-08-16)


### Bug Fixes

* **deps:** update dependency eslint-config-prettier to v9 ([94f6cf7](https://github.com/pascaliske/eslint-config/commit/94f6cf7c3a6f99cbe48663dca0f477ac5239b566))
* **typescript:** migrate to renamed rule @typescript-eslint/only-throw-error ([a4b18c1](https://github.com/pascaliske/eslint-config/commit/a4b18c1b7c6397281216834d365dded4414018f6))
* **typescript:** remove deprecated rule @typescript-eslint/type-annotation-spacing ([c4e5285](https://github.com/pascaliske/eslint-config/commit/c4e52859e290acc449dbe6c6ed33cbf78dcfe01e))



# [3.0.0](https://github.com/pascaliske/eslint-config/compare/v2.0.7...v3.0.0) (2023-07-19)



## [2.0.7](https://github.com/pascaliske/eslint-config/compare/v2.0.6...v2.0.7) (2023-07-16)


### Bug Fixes

* move typescript specific rule to global overrides ([ca92839](https://github.com/pascaliske/eslint-config/commit/ca92839f5e0e01a30feb680306907a82fa53b2a3))
* remove deprecated duplicate import rule ([3c455ee](https://github.com/pascaliske/eslint-config/commit/3c455ee368c5b47d14282abaad72a8d1dc2a0085))



## [2.0.6](https://github.com/pascaliske/eslint-config/compare/v2.0.5...v2.0.6) (2022-02-15)


### Bug Fixes

* **angular:** include all typescript files in angular template processor ([982ae14](https://github.com/pascaliske/eslint-config/commit/982ae141fd8b2b4ad09be41dc0a922d81ad2107d))



## [2.0.5](https://github.com/pascaliske/eslint-config/compare/v2.0.4...v2.0.5) (2021-10-26)



## [2.0.4](https://github.com/pascaliske/eslint-config/compare/v2.0.3...v2.0.4) (2021-06-16)


### Bug Fixes

* **rules:** switch to typescript specific rule for overload support ([8c0ae27](https://github.com/pascaliske/eslint-config/commit/8c0ae27eae83410219fa70490cf284db1854d732))



## [2.0.3](https://github.com/pascaliske/eslint-config/compare/v2.0.2...v2.0.3) (2021-05-25)



## [2.0.2](https://github.com/pascaliske/eslint-config/compare/v2.0.1...v2.0.2) (2021-05-03)



## [2.0.1](https://github.com/pascaliske/eslint-config/compare/v2.0.0...v2.0.1) (2021-05-03)


### Bug Fixes

* use merged prettier config ([678412c](https://github.com/pascaliske/eslint-config/commit/678412cd964f7b7e9d0c8f347293b1ac18ab16c0))



# [2.0.0](https://github.com/pascaliske/eslint-config/compare/v1.1.1...v2.0.0) (2020-10-15)


### Bug Fixes

* **rules:** disable unused typescript-eslint rules ([7dcd186](https://github.com/pascaliske/eslint-config/commit/7dcd186162768d61985e709948f06322b6668af9))


### Features

* **rules:** add angular specific eslint rules ([edcd4e6](https://github.com/pascaliske/eslint-config/commit/edcd4e6e9103f4c826a347ab0436f6f796c56463))
* split into seperate configs targeted to different project styles ([935597d](https://github.com/pascaliske/eslint-config/commit/935597d3f40fd872977bd079a7113c5251883938))


### BREAKING CHANGES

* All rules are now splitted into seperate configurations: `base`, `typescript` and `angular`.
After upgrading you will need to add the `typescript` suffix to persist typescript specific rules!
See the [README.md](README.md) for more information.



## [1.1.1](https://github.com/pascaliske/eslint-config/compare/v1.1.0...v1.1.1) (2020-10-11)


### Bug Fixes

* **rules:** allow spaces before anonymous and async arrow function parens ([2b2139e](https://github.com/pascaliske/eslint-config/commit/2b2139e2c74ca68e35d733d911ec2a9edc7e2901))



# [1.1.0](https://github.com/pascaliske/eslint-config/compare/v1.0.0...v1.1.0) (2020-10-11)


### Features

* **rules:** implement eslint rules ([114485f](https://github.com/pascaliske/eslint-config/commit/114485f51bbed50911abd44698696cb5bfb5dfec))
* **rules:** implement typescript specific rules ([eec05ac](https://github.com/pascaliske/eslint-config/commit/eec05ac30b9a1935e2db4a66b89722715ad5579e))



# 1.0.0 (2020-06-09)


### Bug Fixes

* **package:** move typescript eslint parser to peer dependencies ([5d003ab](https://github.com/pascaliske/eslint-config/commit/5d003ab6ceaed56873e98661c375fad91817f02e))




