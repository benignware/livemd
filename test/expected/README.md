livemd
======
> Generate live-samples from markdown files

[Demo](http://benignware.github.io/livemd)

<div class="highlight-example">
<h4 id="click-me">Click to color me</h4>
</div>


```html
<h4 id="click-me">Click to color me</h4>
```



<style>
div.highlight-example h4 {
  color: purple;
}
</style>


```css
h4 {
  color: purple;
}
```



<script>
try { var el = document.querySelector('#click-me');
el.onclick = function() {
  this.style.color = 'blue'
};} catch (e) {}
</script>


```js
var el = document.querySelector('#click-me');
el.onclick = function() {
  this.style.color = 'blue'
};
```



### Coffeescript

<div class="highlight-example">
<h4 id="click-me-coffee">Click to color me with coffeescript</h4>
</div>


```html
<h4 id="click-me-coffee">Click to color me with coffeescript</h4>
```



<script>
try { (function() {
  var el;

  el = document.querySelector('#click-me-coffee');

  el.onclick = function() {
    return this.style.color = 'blue';
  };

}).call(this);
} catch (e) {}
</script>


```coffeescript
el = document.querySelector('#click-me-coffee');
el.onclick = () ->
  this.style.color = 'blue'
```



### SCSS

<div class="highlight-example">
<h4 id="scss">Colored with SCSS</h4>
</div>


```html
<h4 id="scss">Colored with SCSS</h4>
```



<style>
div.highlight-example h4#scss {
  background: blue;
}

div.highlight-example h4#scss {
  color: #f938ab;
}
</style>


```scss
@import "import.scss";
$color: #f938ab;
h4#scss {
  color: $color;
}
```



### Less

<div class="highlight-example">
<h4 id="less">Colored with Less</h4>
</div>


```html
<h4 id="less">Colored with Less</h4>
```



<style>
div.highlight-example h4#less {
  background: blue;
}

div.highlight-example h4#less {
  color: #f938ab;
}
</style>


```less
@import "import.less";
@color: #f938ab;
h4#less {
  color: @color;
}
```




### Haml

<div class="highlight-example">

<h4 id="haml">Haml Example</h4>
</div>


```haml
%h4#haml= "Haml Example"
```


