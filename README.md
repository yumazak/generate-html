# generate-html

### Usage
Basis
```js
var gHTML = require('generate-html');

var html = gHTML({tagname:{attrs:{attrname:"value"},value:"value"}});
```

example
```js
const gHtml = require("generate-html")

html = gHtml.generate(
    "div",
    {id: "container"},
    gHtml.generate("img", {src: "hogefuga.jpg"}, "") + gHtml.generate("a", {href: "http://uma0317.work"}, "my portfolio")
)
console.log(html);
```
example result

```HTML
<div id="container"><img src="hogefuga.jpg"></img><a href="http://uma0317.work">my portfolio</a></div>
```
