let makePromise = require('makepromise'); if (makePromise && makePromise.__esModule) makePromise = makePromise.default;
const { lstat } = require('fs');

/**
 * Check If The File Or Directory Exists, And Return Stats.
 * @param {string} path The path to check for existence.
 */
const exists = async (path) => {
  try {
    const ls = /** @type {fs.Stats} */ (await makePromise(lstat, path))
    return ls
  } catch (err) {
    return null
  }
}

module.exports=exists

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('fs').Stats} fs.Stats
 */