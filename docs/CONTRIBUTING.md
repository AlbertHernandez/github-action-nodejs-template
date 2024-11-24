## 👏 Contributing

As a contributor, here are the guidelines you should follow:

- [👔 Code of Conduct](CODE_OF_CONDUCT.md)
- [⭐️ Steps](#-steps)
- [💻️ Developing](#-developing)

---

## ⭐️ Steps

1. Use the issue tracker to make sure the feature request or bug has not been already reported 🔎.
2. Submit an issue describing your proposed change to the repo 💡.
3. The repo owner will respond to your issue as soon as we can 💪.
4. If your proposal change is accepted, fork the repo, develop and test your code changes 🤝.
5. Ensure that your code adheres to the existing style in the code 💅🏻.
6. Title your pull request following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) styling 🪄.

---

## 💻️ Developing

Here we are going to describe all you should know when developing in this action.

This project is configured to use [pnpm](https://pnpm.io/) as package manager, so you should have it installed in your machine. If you don't have it, you can install it running:

```shell
npm install -g pnpm@9.14.2
```

In the next step, you need to configure the node environment, we recommend to use [nvm](https://github.com/nvm-sh/nvm) for it, but you can use another tool like [fnm](https://github.com/Schniz/fnm) or other:

```shell
nvm install
nvm use
```

### ⚙️ Build

Due to the nature of this GitHub action, the code we are running is located under the `dist` folder. To generate this folder you need to run:

```shell
pnpm build
```

Before pushing our changes is recommended to run this command, we will see the `dist` folder has changed with our new code, don't worry, this is not a mistake is how this action works, just commit this change and push.

In case you don't commit the `dist` folder, our CI/CD workflows will detect this mismatch and will suggest you some ways to fix it, automatically and manually.

### 🧪 Test

If you want to run the tests we have associated to the action, you can run:

```shell
pnpm test
```

### 💅🏻 Lint

If you want to run the linter, you can execute:

```shell
pnpm lint
```

### 🏠 Running locally the action

If you want to run the action locally, we recommend the usage of [act](https://github.com/nektos/act).

To install it on mac, you can run:

```shell
brew install act
```

Now, you can run the action with act executing:

```shell
act -W '.github/workflows/github-action-template.yml' --container-architecture linux/amd64
```

### 🐣 Release candidate

Once we push our code, we will see it will be executed the action we are developing, in this way we can test that everything is working fine, this workflow is located under `.github/workflows/github-action-template.yml`. You don't need to change this file, it will run automatically with the changes you are doing.

In case you want to test this action in a separated repository, you can use the branch name as tag, so you will be able to point to: `AlbertHernandez/github-action-nodejs-template@<branch-name>`.

### 🚀 Final version

The process of creating the final version is fully automatized, you just need to merge into the main branch using conventional commits.

Here, our CI/CD will start doing some magic and we will:

- Create the tag (the three versions: `v<major>`, `v<major>.<minor>` and `v<major>.<minor>.<patch>`).
- Update the changelog.
- Create the release.
