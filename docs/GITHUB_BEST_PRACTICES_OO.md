# Best practices for Open Source projects in GitHub

## Setup

### Header

Make sure to write down a proper description, add tags and in case of having a landing page for your library add it.

### Security

Make sure Vulnerability alerts are enabled

### Merge button

We recommend to uncheck "Allow rebase merging", it's more safe to use Merge and Squash only. To learn more [follow the link](https://help.github.com/articles/about-pull-request-merges/)

### Github Pages

If the library is medium or large you may want to create a simple site with documentation and examples, an easy way to set it up is using [GitHub Pages](https://pages.github.com/), [Docusaurus](https://docusaurus.io/) and Travis CI.

### Branch protection

We strongly recommend to setup some kind of protection for your main branches, these is our sweet spot:

- [x] Require pull request reviews before merging
  - Approving Reviews: 1
  - [x] Dismiss stale pull request approvals when new commits are pushed
  - [x] Require review from Code Owners
- [x] Require status checks to pass before merging (setup your favorite CI here)
- [x] Include administrators
