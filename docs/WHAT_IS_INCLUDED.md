# What is included

## Base config files

- .editorconfig - Consistent config across IDEs - [Learn more](https://editorconfig.org/)
- .npmrc - Config for npm - [Learn more](https://docs.npmjs.com/files/npmrc)
- .gitattributes - Config attributes per path - [Learn more](https://git-scm.com/docs/gitattributes)

## Linters

### JS Linter

[ESLint](https://eslint.org/) is being used and extending from the [Jam3 configuration]().
Also is added rules for testing (Jest).
To review the configuration check the file `.eslintrc`

### Git Linter

[Commit Lint](https://conventional-changelog.github.io/commitlint) is being used, for more details review the file `.commitlintrc.yml`.

> Important note: In order to use the git linter you need a git repository.

### Others

To watch and set limits for the final size, `bundlesize` is being used and will run automatically as part of the task `test-ci` in the CI platforms.

## Formatting

[Prettier](https://prettier.io/) was adopted as our default formatter, review `.prettierrc` and `.prettierignore` for more details.

## Continues Integration

[Travis CI](https://travis-ci.org/) is supported by default, for more details review the file `.travis.yml`.

## Testing

There are unit tests created by default, and you can find all the tests under the `__tests__` folder.

To write tests [Jest](https://jestjs.io/) is being used and there are two related scripts in the `package.json`:

- `npm test` - Watch for changes in the code and run unit tests; ideal for a [TDD](https://en.wikipedia.org/wiki/Test-driven_development) strategy.
- `npm run test-ci` - Run tests in the CI servers, without any interactions. It also runs linters, auditing, sizing restrictions, etc.

You can find the Jest configuration inside `package.json`.

## Packages

NPM is recommended by default; however, Yarn is also supported (`yarn.lock`).

Also included in the `package.json`:

- engines - Restrictions for minimum support for NodeJS and NPM
- keywords

### Husky and lint-staged

To help with the quality of the code, we are using Husky and defined two hooks described below:

- `pre-commit`: Before every commit, we are fixing <what is fixable> and formatting your code, also we are linting every commits for name conventions.
- `pre-push`: Before every push, we are running the linters, auditing, sizing checking, etc

> Important note: In order to use the hooks you need a git repository.

## Security

Out of the box, we can not push <also in Travis> the code if there are libraries with high and critical vulnerabilities.

## Releasing

To releasing new versions we are using [standard-version](https://github.com/conventional-changelog/standard-version), it helps handling semver, tagging and standarizing the Changelog.

## Issues and PR templating

Inside the folder `.github` you will find templates for Pull Request and Issues creation.

### Issues reporting

Especially for issues reporting, there are templates for bug reporting or feature requests.

To help with the issues reporting, we included the library [envinfo](https://www.npmjs.com/package/envinfo) to fetch information about the system.

## Docs

The below documents are included out of the box:

- Code of conduct
- Contributing
- Readme
- License

## Sample code

As an example of code, a dump console print library was created, you can find the code in `src/index.js`, and there are example unit tests in `__tests__/index.test.js`.

## Examples

As a recommendation, we should help the users with examples of using, for this reason, there is an empty folder called `examples`.
