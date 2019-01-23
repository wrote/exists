# @wrote/exists

[![npm version](https://badge.fury.io/js/%40wrote%2Fexists.svg)](https://npmjs.org/package/@wrote/exists)

`@wrote/exists` is Check If The File Or Directory Exists, And Return Stats.

```sh
yarn add -E @wrote/exists
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async exists(path: string): boolean`](#async-existspath-string-boolean)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import exists from '@wrote/exists'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `async exists(`<br/>&nbsp;&nbsp;`path: string,`<br/>`): boolean`

Returns whether the path exists or not. If it exists, returns the `lstat` result, otherwise returns `null`.

```js
/* yarn example/ */
import exists from '@wrote/exists'

(async () => {
  const res = await exists('example')
  const isDir = res.isDirectory()
  console.log(
    'example exists: %s, is dir: %s', !!res, isDir,
  )
  const res2 = await exists('hello')
  console.log('hello exists: %s', res2)
})()
```
```
example exists: true, is dir: true
hello exists: null
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

<table>
<tr>
  <th>
    <a href="https://artd.eco">
      <img src="https://github.com/wrote/wrote/raw/master/images/artdeco.png" alt="Art Deco">
    </a>
  </th>
  <th>&copy; <a href="https://artd.eco">Art Deco</a> for <a href="https://wrote.cc">Wrote</a> 2019</th>
  <th>
    <a href="https://wrote.cc">
      <img src="https://github.com/wrote/wrote/raw/master/images/wrote.jpeg" alt="Wrote Library">
    </a>
  </th>
  <th>
    <a href="https://www.technation.sucks" title="Tech Nation Visa">
      <img src="https://github.com/wrote/wrote/raw/master/images/technation.gif" alt="Tech Nation Visa">
    </a>
  </th>
  <th>
    <a href="https://www.technation.sucks">Tech Nation Visa Sucks</a>
  </th>
</tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>