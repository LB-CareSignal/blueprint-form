# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.2] - 2026-10-28

- Fix issue with how we parse date strings (we now use moment instead for greater reliability).

## [3.0.1] - 2026-10-28

- Remove `initialMonth` prop from the DateInput component. 

## [3.0.0] - 2026-10-28

### Breaking changes

- Upgrade to BlueprintJS v6. The `@blueprintjs/core` peer dependency is now `^6.0.0` (was `^5.19.0`).
- Replace `@blueprintjs/datetime2` with `@blueprintjs/datetime` (`^6.0.0`). Consumers must install `@blueprintjs/datetime` and load `@blueprintjs/datetime/lib/css/blueprint-datetime.css` in place of the `datetime2` stylesheet.
- Require React 18. The `react` and `react-dom` peer dependencies are now `^18.0.0` (was `>=17.0.2`).
- Raise the `moment` peer dependency to `^2.31.0` (was `>=2.24.0`) and `moment-timezone` to `^0.5.48` (was `>=0.5.28`).
- `DateInput`, `StartDateInput` and `EndDateInput` now store `Date` objects (or `null`) in form values instead of strings, and only display values that are valid `Date` objects. Convert string dates before passing them in, e.g. with a `FormInstance` `deserialize` option and `FormInstance.DeserializeDate`.

### Deprecated

- `TextArea` `growVertically` prop. Use `autoResize` instead.

### Fixed

- `FormInstance.DeserializeDate` no longer throws when the consuming app has not imported `moment-timezone` itself. The production bundle now loads `moment-timezone` instead of plain `moment`.

### Changed

- Publish only the `dist` directory, and emit TypeScript declarations without per-file JavaScript output.
- Migrate ESLint to the flat config format (`eslint.config.js`) required by ESLint 9, and add an `npm run lint` script.
- Add README installation instructions, list all exported components, and make the usage example self-contained.
- Remove the legacy declaration-bundling path by dropping `dts-bundle-webpack` from the production build and package dependencies, eliminating the vulnerable `detect-indent` and `minimist` transitive chain.
- Keep package type exports stable at `dist/index.d.ts` while publishing TypeScript multi-file declaration output generated directly by `tsc`.
- Remove `clean-webpack-plugin` usage from the production build to avoid deleting generated declaration files required by the multi-file `.d.ts` output.
- Update `moment` peer and development dependency ranges to `^2.31.0` to address known security advisories on older `moment` versions, including [GHSA-4p3w-j4w9-5jqw](https://github.com/advisories/GHSA-4p3w-j4w9-5jqw).
- Upgrade `webpack-dev-server` to `6.0.0` and align repository development runtime to Node 22 via `.nvmrc`.
- Add README guidance for package validation and release flow, including `npm pack --dry-run`, local `.tgz` consumer installation testing, and publish steps.
- Fix all npm audit warnings (reduce to zero) as of 2026-10-28.
- Add CHANGELOG and PR request template.
