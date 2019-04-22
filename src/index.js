import makePromise from 'makepromise'
import { lstat } from 'fs'

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

export default exists

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('fs').Stats} fs.Stats
 */