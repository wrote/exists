/* yarn example/ */
import exists from '../src'

(async () => {
  const res = await exists('example')
  const isDir = res.isDirectory()
  console.log(
    'example exists: %s, is dir: %s', !!res, isDir,
  )
  const res2 = await exists('hello')
  console.log('hello exists: %s', res2)
})()