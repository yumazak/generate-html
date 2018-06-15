function addAttrs(attrs) {
  var html  = "";
  for( key in attrs) html += ` ${key}=${attrs[key]}`
  return html
}

module.exports.generate = (tagName, attrs, value)=>{
  html = `<${tagName}${addAttrs(attrs)}>${value}</${tagName}>`
  return html
}
