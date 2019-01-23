import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import exists from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof exists, 'function')
  },
  async 'calls package without error'() {
    await exists()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await exists({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T