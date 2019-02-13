const nyg = require('nyg');
const fs = require('fs');

// Generator configuration
const globs = [
  { base: 'templates/', glob: '__tests__/**/*', template: false },
  { base: 'templates/', glob: '.github/**/*', template: false },
  { base: 'templates/', glob: 'examples/**/*', template: false },
  { base: 'templates/', glob: 'src/**/*', template: false },
  { base: 'templates/', glob: '*', template: false }
];

const generator = nyg(null, globs)
  .on('postinstall', onPostInstall)
  .run();

/**
 * Post Install event
 */
function onPostInstall() {
  var done = generator.async();
  Promise.all([renameGitIgnore()])
    .then(() => {
      console.log('App generated');
      done();
    })
    .catch(e => {
      console.log(e);
    });
}

/**
 * Rename gitignore to .gitignore
 *
 */
function renameGitIgnore() {
  const gitIgnorePath = `${generator.cwd}/gitignore`;
  const generatedGitIgnore = `${generator.cwd}/.gitignore`;

  return new Promise((resolve, reject) => {
    fs.rename(gitIgnorePath, generatedGitIgnore, function(err) {
      if (err) return reject();
      resolve();
    });
  });
}
