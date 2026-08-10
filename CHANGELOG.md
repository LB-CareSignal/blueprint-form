# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.2] - 8/10/2026

- Remove the legacy declaration-bundling path by dropping `dts-bundle-webpack` from the production build and package dependencies, eliminating the vulnerable `detect-indent` and `minimist` transitive chain.
- Keep package type exports stable at `dist/index.d.ts` while publishing TypeScript multi-file declaration output generated directly by `tsc`.
- Remove `clean-webpack-plugin` usage from the production build to avoid deleting generated declaration files required by the multi-file `.d.ts` output.
- Update `moment` peer and development dependency ranges to `^2.30.1` to address known security advisories on older `moment` versions.
- Upgrade `webpack-dev-server` to `6.0.0` and align repository development runtime to Node 22 via `.nvmrc`.
- Add README guidance for package validation and release flow, including `npm pack --dry-run`, local `.tgz` consumer installation testing, and publish steps.
- Fix all npm audit warnings (reduce to zero) as of 8/10/2026.
- Add CHANGELOG and PR request template.
