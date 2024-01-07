# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [4.0.1](https://github.com/hjbugajski/wedding-day-content-co-payload/compare/v4.0.0...v4.0.1) (2024-01-07)

### Bug Fixes

- **collections/Media:** increase dataUrl max length ([fd16347](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/fd16347df3c3c9017c2be92d5434111e6a23194c))
- **hooks/useDataUrl:** prevent infinite loop ([7aad673](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/7aad673f831980f6662201b273bf03b4901224ed))

## [4.0.0](https://github.com/hjbugajski/wedding-day-content-co-payload/compare/v3.1.2...v4.0.0) (2024-01-03)

### ⚠ BREAKING CHANGES

- **collections/Media:** remove link field

### Features

- **blocks/Gallery:** add grid/carousel type option ([31b4c30](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/31b4c305d68ea8d9a7fa4912bdcf495bf2d5176c))
- **blocks:** add ImageStack and MessagesMarquee ([be5869c](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/be5869cdfcc5aa6b51ecf5d19d69cb364500b0ae))

### Bug Fixes

- **collections/Media:** remove link field ([baf074c](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/baf074c4c0213529fb728436f6dec0f882b1fc23))
- **hooks/useDataUrl:** ensure file has been uploaded before generating data url ([686abbc](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/686abbc0510a2c4b86b8f9d7fafadd9b43a53a91))

## [3.1.2](https://github.com/hjbugajski/wedding-day-content-co-payload/compare/v3.1.1...v3.1.2) (2023-12-28)

### Bug Fixes

- remove resend ([7da9496](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/7da949630021cd0b024020a270a99cb16e60d1c6))

## [3.1.1](https://github.com/hjbugajski/wedding-day-content-co-payload/compare/v3.1.0...v3.1.1) (2023-11-17)

### Features

- add rich text links ([34f3bf0](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/34f3bf038b0225f1b833134795afc0877ca31f12))

### Bug Fixes

- **collections/Inquiries:** update from email field ([edb7363](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/edb7363491576b1cf03bffae337cf64cf911a378))

## [3.1.0](https://github.com/hjbugajski/wedding-day-content-co-payload/compare/v3.0.1...v3.1.0) (2023-11-16)

### ⚠ BREAKING CHANGES

- **fields:** move icon and iconPosition from link to buttonLink

### Features

- **collections:** add Inquiries ([5972df6](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/5972df6e11da0e53e6ca0448d251a63c0e276c17))

### Bug Fixes

- **fields:** move icon and iconPosition from link to buttonLink ([e95ee68](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/e95ee687e3dc701d271c4b7d7d4fc8b2924ed1af))

## [3.0.1](https://github.com/hjbugajski/wedding-day-content-co-payload/compare/v3.0.0...v3.0.1) (2023-11-14)

### Features

- add umami analytics events ([bae295d](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/bae295db2dc4e4c8f3b8cf1e673162544aab6537))

## [3.0.0](https://github.com/hjbugajski/wedding-day-content-co-payload/compare/v2.0.0...v3.0.0) (2023-11-14)

### ⚠ BREAKING CHANGES

- migrate to Payload 2.0, update access controls, restructure collections and blocks
- rename to wedding-day-content-co-payload

### chore

- rename to wedding-day-content-co-payload ([a4db00e](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/a4db00ef27a38b76a17ec30dba0dfcd0633422d1))

### Features

- migrate to Payload 2.0, update access controls, restructure collections and blocks ([316eaf0](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/316eaf0efe6a8583f23eb756f370d5f4d3803787))

### Build

- fix npm install in Dockerfile ([6980ebe](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/6980ebe7c44063877e97d5f40d6739b2bc09ed62))

## [2.0.0](https://github.com/hjbugajski/wedding-day-content-co-payload-deprecated/compare/v1.0.2...v2.0.0) (2023-10-10)

### Features

- **blocks/ButtonLink:** add margin field ([ddb3d13](https://github.com/hjbugajski/wedding-day-content-co-payload-deprecated/commit/ddb3d1377782cfcef65c5f35f6be2f9b17a6b8d4))
- **blocks:** add ContentCards ([39bc8ae](https://github.com/hjbugajski/wedding-day-content-co-payload-deprecated/commit/39bc8aebe267de315783436bffd90448efa2d841))
- **blocks:** add ScrollSection ([ac3b28c](https://github.com/hjbugajski/wedding-day-content-co-payload-deprecated/commit/ac3b28c0bb2c6fab9cdf87a0c10100bf53dcfa98))
- **blocks:** remove ScrollSection, update ContentCards ([8e44927](https://github.com/hjbugajski/wedding-day-content-co-payload-deprecated/commit/8e449274b67b79c864500aece269f7798ae6c669))
- **collections/Media:** add poster for videos ([40fa68e](https://github.com/hjbugajski/wedding-day-content-co-payload-deprecated/commit/40fa68e628d4d6505fb04b2ca8ba3c993fe4f42b))
- **collections:** add Media ([cb57bdf](https://github.com/hjbugajski/wedding-day-content-co-payload-deprecated/commit/cb57bdf405ebf38424afce0489d77cfbaf56bf33))
- **config:** add nested docs for Pages ([0740ac2](https://github.com/hjbugajski/wedding-day-content-co-payload-deprecated/commit/0740ac26bf435af02627325825dd159f94b57cb6))

## [1.0.2](https://github.com/hjbugajski/wedding-day-content-co-payload/compare/v1.0.1...v1.0.2) (2023-10-01)

## [1.0.1](https://github.com/hjbugajski/wedding-day-content-co-payload/compare/v1.0.0...v1.0.1) (2023-10-01)

### Bug Fixes

- **blocks/Section:** remove useSlug hook ([11125c9](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/11125c9ece2574a39f5152cd5b59b6392df96395))
- update button link fields ([21f4111](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/21f411159331949069e6fe48ddd4f6870197fc37))

## 1.0.0 (2023-10-01)

### Features

- create project using create-payload-app ([83fa121](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/83fa1215772e54f8832ae83c09b260ed4bf63fe5))
- implement cms ([fd2322d](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/fd2322d044018ea6cc5c06f9380ab3752e85160e))

### Build

- configure Docker ([1fcbe6a](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/1fcbe6a71dbf16c79d449d0fbe524e39b731e43c))

### CI/CD

- add GitHub actions ([6c0ce5b](https://github.com/hjbugajski/wedding-day-content-co-payload/commit/6c0ce5bf485f11e910cecff899535704ccfee6fa))
