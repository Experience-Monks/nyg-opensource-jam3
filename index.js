const nyg = require('nyg');
const fs = require('fs');
const emoji = require('node-emoji');

// Generator configuration
const globs = [
  { base: 'templates/', glob: '__tests__/**/*', template: false },
  { base: 'templates/', glob: '.github/**/*', template: false },
  { base: 'templates/', glob: 'examples/**/*', template: false },
  { base: 'templates/', glob: 'src/**/*', template: false },
  { base: 'templates/', glob: '*', template: false }
];

let msgCounter = 1;
const WELCOME_MSG = `
***************************************************
**                                               **
**        Open Source Library Generator          **
**  https://github.com/Jam3/nyg-opensource-jam3  **
**                                               **
***************************************************
`;
const FINAL_MSG = `
${emoji.get(`clap`)} CONGRATS!!, You are ready to go

***********************************************************************************************************
**                                                                                                       **
**  For more information about the generated scaffolding, review the docs:                               **
**                                                                                                       **
**  What is included?: https://github.com/Jam3/nyg-opensource-jam3/tree/master/docs/WHAT_IS_INCLUDED.md  **
**  Next steps?: https://github.com/Jam3/nyg-opensource-jam3/tree/master/docs/NEXT_STEPS.md              **
**                                                                                                       **
***********************************************************************************************************
`;

console.log(WELCOME_MSG);

const generator = nyg(null, globs)
  .on('precopy', onPreCopyInstall)
  .on('preinstall', onPreInstall)
  .on('postinstall', onPostInstall)
  .run();

/**
 * Pre Copy event
 */
function onPreCopyInstall() {
  printGenericMessage('clipboard', 'Copying template files...');
  createGitRepository();
}

/**
 * Pre Install event
 */
function onPreInstall() {
  var done = generator.async();

  printGenericMessage('construction', 'Installing dependencies...');
  done();
}

/**
 * Post Install event
 */
function onPostInstall() {
  var done = generator.async();
  Promise.all([renameGitIgnore()])
    .then(() => {
      console.log(FINAL_MSG);
      done();
    })
    .catch(e => {
      console.loerrorg(e);
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

/**
 * Create an empty git repository
 *
 */
function createGitRepository() {
  printGenericMessage('package', 'Creating Git repository...');
  generator.spawn('git', ['init'], generator.cwd);
}

/**
 * Print a generic meessage in the console
 *
 * @param {*} emoji
 * @param {*} messaqe
 */
function printGenericMessage(emojiName = '', messaqe) {
  console.log(`[${msgCounter}]: ${emoji.get(emojiName)} ${messaqe}`);
  msgCounter++;
}
