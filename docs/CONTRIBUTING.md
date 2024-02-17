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

Due to the nature of this github action, the code we are running is located under the dist folder. To generate this folder you need to run:

```shell
npm run build
```

Before pushing our changes is recommended to run this command, we will see the dist folder has changed with our new code, don't worry, this is not a mistake is how this action works, just commit this change and push.

In case you don't commit the dist folder, this will be generated automatically by the CI/CD process we have, so you will see a new commit in your branch associated to this folder generation.

If you want to run the tests we have associated to the action, you can run:

```shell
npm run test
```

Also, if you want to run the linter, you can execute:

```shell
npm run lint
```

Once we push our code, we will see it will be executed the action we are developing, in this way we can test that everything is working fine, this workflow is located under `.github/workflows/github-action-template.yml`. You don't need to change this file, it will run automatically with the changes you are doing.
