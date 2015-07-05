# livemd

> Generate live-samples from markdown files

With livemd you can easily generate runtime browser samples from corresponding code-blocks contained in markdown-files.

Supported languages:

* HTML
* CSS
* Javascript
* SCSS
* Less
* Haml

## Usage

```js
var livemd = require('livemd');
livemd(src).done(function(result) {
  // Do something with the result
})
```

## Options

#### options.paths
Type: `Array`
Default value: `[]`

Provide an array of include paths to pass to scss and less modules. Path to source is included by default.

#### options.prefilter
Type: `Function`
Default value: `null`

Filter the input markdown by providing a function taking the original string as argument and returning the modified string.

#### options.wrap
Type: `String`
Default value: `'<div class="highlight-example"></div>'`

Specify a wrapper for the generated live-samples.


## Changelog

v0.0.1 - Initial Release