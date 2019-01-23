import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import { Stats } from 'fs'
import exists from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof exists, 'function')
  },
  async 'returns true'() {
    const e = await exists('test/fixture/test.txt')
    ok(e instanceof Stats)
  },
  async 'returns false'() {
    const e = await exists('does-not-exist')
    ok(!e)
  },
}

export default T