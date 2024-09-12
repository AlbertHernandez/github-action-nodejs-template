<p align="center">
  <a href="https://github.com/AlbertHernandez/github-action-nodejs-template" target="blank"><img src="images/logo.png" alt="Github Actions Logo" width="512" /></a>
</p>

<h1 align="center">⭐ Github Action Template ⭐</h1>

<p align="center">
<!-- action-docs-description source="action.yml" -->
<!-- action-docs-description source="action.yml" -->
</p>

<p align="center">
  <a href="https://github.com/AlbertHernandez/github-action-nodejs-template/actions/workflows/node.yml?branch=main"><img src="https://github.com/AlbertHernandez/github-action-nodejs-template/actions/workflows/node.yml/badge.svg?branch=main" alt="nodejs"/></a>
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/node-20.x-green.svg" alt="node"/></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/supported_node-18.x_--_20.x-forestgreen.svg" alt="supported node"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-5.x-blue.svg" alt="typescript"/></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Test-Vitest_-yellow.svg" alt="swc"/></a>
</p>

## 👀 Motivation

Starting a new github action with NodeJS can be a bit frustrating, there are a lot of things to consider if we want to have a really good starting point where later we can iterate.

The main objective of this template is to provide a good base configuration for our NodeJS Github Actions that we can start using.

## 🌟 What is including this template?

1. 👷 Use [SWC](https://swc.rs/) for running the tests of the GitHub Action.
2. 🐶 Integration with [husky](https://typicode.github.io/husky/) to ensure we have good quality and conventions while we are developing like:

- 💅 Running the linter over the files that have been changed
- 💬 Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to ensure our commits have a convention.
- ✅ Run the tests automatically.
- ⚙️ Check our action does not have type errors with Typescript.
- 🙊 Check typos to ensure we don't have grammar mistakes.

3. 🧪 Testing with [Vitest](https://vitest.dev/)
4. 📌 Custom path aliases, where you can define your own paths (you will be able to use imports like `@/src` instead of `../../../src`).
5. 🚀 CI/CD using GitHub Actions, helping ensure a good quality of our code and providing useful insights about dependencies, security vulnerabilities and others.
6. 🥷 Fully automatized release process. You just need to merge into `main` branch using conventional commits and that's all. Automatically we will:

- 📍 Create the tags associated to your change
- 📝 Update the changelog
- 📦 Create a release

7. 👮🏻 Detection of mismatch of the `dist` folder. Also, it will suggest automatic and manual ways of fixing it via [IssueOps](https://github.com/marketplace/actions/slash-command-dispatch) approach. Click [here](https://github.com/AlbertHernandez/github-action-nodejs-template/pull/32#issuecomment-1951901513) to see an example.
8. 🐦‍🔥 Use of ESModules instead of CommonJS, which is the standard in JavaScript.

## 🤩 Other templates

Are you thinking in start some new service in the NodeJS ecosystem? If you like this template there are others base on this you can check:

- [Template for new Typescript Express Services](https://github.com/AlbertHernandez/express-typescript-service-template)
- [Template for new NestJS Services](https://github.com/AlbertHernandez/nestjs-service-template)
- [Template for new Typescript Libraries](https://github.com/AlbertHernandez/typescript-library-template)

<!-- action-docs-usage source="action-file.yml" project="AlbertHernandez/github-action-nodejs-template" version="v0.11.0" x-release-please-version -->

## 👀 Usage

Bellow is a simple example how to use this action

<!-- action-docs-usage source="action-file.yml" project="AlbertHernandez/github-action-nodejs-template" version="v0.11.0" x-release-please-version -->

## 💅 Customizing

<!-- action-docs-inputs source="action.yml" -->

### Inputs

<!-- action-docs-inputs source="action.yml" -->

<!-- action-docs-outputs source="action.yml" -->

### Outputs

<!-- action-docs-outputs source="action.yml" -->

## 😎 Contributing

You're thinking about contributing to this project? Take a look at our [contribution guide](docs/CONTRIBUTING.md).
