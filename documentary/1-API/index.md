## API

The package is available by importing its default function:

```js
import exists from '@wrote/exists'
```

%~%

```## async exists => boolean
[
  ["path", "string"]
]
```

Returns whether the path exists or not. If it exists, returns the `lstat` result, otherwise returns `null`.

<!-- %TYPEDEF types/index.xml% -->

%EXAMPLE: example/example, ../src => @wrote/exists%
%FORK example/example%

%~%