/* yarn example/ */
import exists from '../src'

(async () => {
  const res = await exists({
    text: 'example',
  })
  console.log(res)
})()