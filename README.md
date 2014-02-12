# camel_case

> ESLint rule for enforcing camelCame names but allowing _ in property names

We want to use camelCase in variable names, but want to still allow
underscores in JSON objects:

    var goodObject = {
      property_name: 1,
      another_property: 2
    };

[jshint](http://jshint.com/docs/) has *camelcase* rule that forces EVERY name
to be camelCased

    $ jshint index.js
    index.js: line 2, col 0, Identifier 'property_name' is not in camel case.
    index.js: line 3, col 0, Identifier 'another_property' is not in camel case.
    2 errors

There are manual workarounds:

* disable this specific rule using `// jshint ignore:lint` or `// jshint -W106`
* write property names using quotes, for example `'property_name': 1`

Both workarounds are hacky.

I wrote a more flexible rule called [camel_case](camel_case.js)
for [eslint](https://github.com/eslint/eslint). The rule looks one character *after*
the identifier to see if it is followed by colon `:` character.
If yes, this is a property name inside an object, and underscore character `_` is allowed.

## running

Place `camel_case.js` into local folder, pass to eslint using `--rulesdir` option.
Enable `camel_case` rule from `.eslintrc` file

    // .eslintrc
    {
      // 0 - turn rule off
      // 1 - rule generates warnings
      // 2 - rule generates errors
      "rules": {
        "camel_case": 2,
        // other rules
      }
    }
    // run
    eslint index.js --rulesdir .

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/camel_case/issues) on Github



## MIT License

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
