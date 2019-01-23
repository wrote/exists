import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import exists from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await exists({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
