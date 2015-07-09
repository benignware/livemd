# grunt-livemd
> Generate live-samples from markdown files

[Demo](http://benignware.github.io/grunt-livemd)

### HTML, CSS, Javascript

<div class="highlight-example">
<h4 id="click-me">Click me</h4>
</div>


```html
<h4 id="click-me">Click me</h4>
```



<style>
div.highlight-example h4 {
  color: #0086b3;
}
</style>


```css
h4 {
  color: #0086b3;
}
```



<script>
try { var el = document.querySelector('#click-me');
el.onclick = function() {
  this.style.color = '#008080'
};} catch (e) {}
</script>


```js
var el = document.querySelector('#click-me');
el.onclick = function() {
  this.style.color = '#008080'
};
```



### Coffeescript

<div class="highlight-example">
<h4 id="click-me-with-coffeescript">Click me with coffeescript</h4>
</div>


```html
<h4 id="click-me-with-coffeescript">Click me with coffeescript</h4>
```



<script>
try { (function() {
  var el;

  el = document.querySelector('#click-me-with-coffeescript');

  el.onclick = function() {
    return this.style.color = '#008080';
  };

}).call(this);
} catch (e) {}
</script>


```coffeescript
el = document.querySelector('#click-me-with-coffeescript');
el.onclick = () ->
  this.style.color = '#008080'
```



### SCSS

<div class="highlight-example">
<h4 id="scss">Styled with SCSS</h4>
</div>


```html
<h4 id="scss">Styled with SCSS</h4>
```



<style>
div.highlight-example h4#scss {
  background: #0086b3;
  display: inline-block;
  padding: 15px;
  position: relative;
  margin-left: 15px;
  color: #fff;
}

div.highlight-example h4#scss:before {
  content: '';
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  border-top: 7.5px solid transparent;
  border-right: 15px solid #0086b3;
  border-bottom: 7.5px solid transparent;
}
</style>


```scss
@import "bubble.scss";
h4#scss {
  @include bubble(#0086b3, #fff);
}
```



### Less

<div class="highlight-example">
<h4 id="less">Styled with Less</h4>
</div>


```html
<h4 id="less">Styled with Less</h4>
```



<style>
div.highlight-example h4#less {
  background: #0086b3;
  display: inline-block;
  padding: 15px;
  position: relative;
  margin-left: 15px;
  color: #ffffff;
}

div.highlight-example h4#less:before {
  content: '';
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  border-top: 7.5px solid transparent;
  border-right: 15px solid #0086b3;
  border-bottom: 7.5px solid transparent;
}
</style>


```less
@import "bubble.less";
h4#less {
  .bubble(#0086b3, #fff)
}
```




### Haml

<div class="highlight-example">

<h4 id="haml">Haml Example</h4>
</div>


```haml
%h4#haml= "Haml Example"
```


