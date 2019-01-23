import makePromise from 'makepromise'
import { lstat } from 'fs'

/**
 * Check If The File Or Directory Exists, And Return Stats.
 * @param {string} path The path to check for existence.
 */
const exists = async (path) => {
  try {
    const ls = await makePromise(lstat, path)
    return ls
  } catch (err) {
    return null
  }
}

export default exists