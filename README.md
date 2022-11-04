<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# reUncPath

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Regular expression][regexp] to parse a [UNC][unc] path.



<section class="usage">

## Usage

```javascript
import reUncPath from 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-unc-path@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { REGEXP } from 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-unc-path@esm/index.mjs';
```

#### reUncPath()

Return a [regular expression][regexp] to parse a [UNC][unc] path. 

```javascript
var RE_UNC_PATH = reUncPath();
var parts = RE_UNC_PATH.exec( '\\\\server\\share\\foo\\bar\\baz:a:b' );
/* returns
    [
        '\\\\server\\share\\foo\\bar\\baz:a:b',
        'server',                                // host name
        'share',                                 // share name
        '\\foo\\bar\\baz:a:b',                   // object name
        '\\foo\\bar',                            // path name
        'baz:a:b',                               // file name
        'a',                                     // stream name
        'b',                                     // stream type
        'index': 0,
        'input': '\\\\server\\share\\foo\\bar\\baz:a:b'
    ]
*/

parts = RE_UNC_PATH.exec( '\\\\server\\share' );
/* returns
    [
        '\\\\server\\share',
        'server',                                // host name
        'share',                                 // share name
        '',                                      // object name
        undefined,                               // path name
        undefined,                               // file name
        undefined,                               // stream name
        undefined,                               // stream type
        'index': 0,
        'input': '\\\\server\\share'
    ]
*/
```

#### reUncPath.REGEXP

[Regular expression][regexp] to parse a [UNC][unc] path. 

```javascript
var parts = reUncPath.REGEXP.exec( '\\\\server\\share\\foo\\bar\\baz' )[ 1 ];
// returns 'server'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import reUncPath from 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-unc-path@esm/index.mjs';

var RE_UNC_PATH = reUncPath();
var bool;
var path;

path = '\\\\server\\share\\foo\\bar\\baz:a:b';
bool = RE_UNC_PATH.test( path );
// returns true

path = '\\\\server\\share\\foo\\bar\\baz::b';
bool = RE_UNC_PATH.test( path );
// returns true

path = '\\\\server\\share\\foo\\bar\\baz:a';
bool = RE_UNC_PATH.test( path );
// returns true

path = '\\\\server\\share\\foo\\bar\\baz';
bool = RE_UNC_PATH.test( path );
// returns true

path = '\\\\server\\share\\foo\\bar';
bool = RE_UNC_PATH.test( path );
// returns true

path = '\\\\server\\share\\foo';
bool = RE_UNC_PATH.test( path );
// returns true

path = '\\\\server\\share';
bool = RE_UNC_PATH.test( path );
// returns true

path = '\\\\server\\\\share';
bool = RE_UNC_PATH.test( path );
// returns false

path = '\\\\\\\\server\\share';
bool = RE_UNC_PATH.test( path );
// returns false

path = 'beep boop \\\\server\\share';
bool = RE_UNC_PATH.test( path );
// returns false

path = '\\\\server';
bool = RE_UNC_PATH.test( path );
// returns false

path = '\\';
bool = RE_UNC_PATH.test( path );
// returns false

path = '';
bool = RE_UNC_PATH.test( path );
// returns false

path = '\\\\server\\share\\';
bool = RE_UNC_PATH.test( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz:';
bool = RE_UNC_PATH.test( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz:a:';
bool = RE_UNC_PATH.test( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz::';
bool = RE_UNC_PATH.test( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz:a:b:c';
bool = RE_UNC_PATH.test( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\';
bool = RE_UNC_PATH.test( path );
// returns false

path = '//server/share';
bool = RE_UNC_PATH.test( path );
// returns false

path = '/foo/bar';
bool = RE_UNC_PATH.test( path );
// returns false

path = 'foo/bar';
bool = RE_UNC_PATH.test( path );
// returns false

path = './foo/bar';
bool = RE_UNC_PATH.test( path );
// returns false

path = '/foo/../bar';
bool = RE_UNC_PATH.test( path );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-unc-path`][@stdlib/assert/is-unc-path]</span><span class="delimiter">: </span><span class="description">test if a value is a UNC path.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-unc-path.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-unc-path

[test-image]: https://github.com/stdlib-js/regexp-unc-path/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/regexp-unc-path/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-unc-path/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-unc-path?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-unc-path.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-unc-path/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-unc-path/tree/deno
[umd-url]: https://github.com/stdlib-js/regexp-unc-path/tree/umd
[esm-url]: https://github.com/stdlib-js/regexp-unc-path/tree/esm
[branches-url]: https://github.com/stdlib-js/regexp-unc-path/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-unc-path/main/LICENSE

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[unc]: https://msdn.microsoft.com/en-us/library/gg465305.aspx

<!-- <related-links> -->

[@stdlib/assert/is-unc-path]: https://github.com/stdlib-js/assert-is-unc-path/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
