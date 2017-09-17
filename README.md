# generate-html

### Usage
Basis
```js
var gHTML = require('generate-html');

var html = gHTML({tagname:{attrs:{attrname:"value"},value:"value"}});
```

example
```js
var gHTML = require('generate-html'),
    html = gHTML({
      div:{
        attrs:{
          id:"container",
        },
        tags:{
          img:{
            src:"http://hoge/huga.png",
            class:"image"
          }
        }
      },
      p:{
        attrs:{
          id:"title"
        },
        value:"hi"
      }
    });
console.log(html);
```
example result

```HTML
<div id="container" >
        <img src="http://hoge/huga.png" class="image" >
        </img>
</div>
<p id="title" >hi</p>
```

### Install
```bash
$ npm install generate-html
```
