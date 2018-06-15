const gHTML = require('./index.js');;

var html = gHTML.gHTML({
    div:{
      attrs:{
        id:"container",
      },
      value:
        gHTML.gHTML({
            p:{
                attrs:{
                  id:"title"
                },
                value:"hi"
              }
        })
    }
  });

console.log(html)