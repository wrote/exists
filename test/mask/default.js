import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import exists from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await exists({
      text: input,
    })
    return res
  },
  context: Context,
})