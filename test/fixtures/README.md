grunt-livemd
============
> Generate live-samples from markdown files

[Demo](http://benignware.github.io/grunt-livemd)

```html
<h4 id="click-me">Click to color me</h4>
```

```css
h4 {
  color: purple;
}
```

```js
var el = document.querySelector('#click-me');
el.onclick = function() {
  this.style.color = 'blue'
};
```

### Coffeescript

```html
<h4 id="click-me-coffee">Click to color me with coffeescript</h4>
```

```coffeescript
el = document.querySelector('#click-me-coffee');
el.onclick = () ->
  this.style.color = 'blue'
```

### SCSS

```html
<h4 id="scss">Colored with SCSS</h4>
```

```scss
@import "import.scss";
$color: #f938ab;
h4#scss {
  color: $color;
}
```

### Less

```html
<h4 id="less">Colored with Less</h4>
```

```less
@import "import.less";
@color: #f938ab;
h4#less {
  color: @color;
}
```


### Haml

```haml
%h4#haml= "Haml Example"
```