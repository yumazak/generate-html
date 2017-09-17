addTab = (count)=>{
  var html="";
  for(var i=0;i<count;i++){
    html+="\t"
  };
  return html
}
gTag = (tags,count=0)=>{
  var html="",temp="";
  for(tag in tags){
    html+=addTab(count);
    html+='<';
    html+=tag.replace(/[0-9]*/g,'') + " ";
    if(tags[tag].attrs){
      for(attr in tags[tag]["attrs"]){
        html+= attr + '="' + tags[tag]["attrs"][attr] + '" ';
      }
    }
    html+='>\n';
    if(tags[tag].tags){
      temp=tag
      html+=gTag(tags[tag]["tags"],count+1);
      html+=addTab(count);
      html+='</' + temp.replace(/[0-9]*/g,'') + '>\n';
    }else{
      html+=addTab(count);
      html+='</' + tag.replace(/[0-9]*/g,'') + '>\n';
    }
  }
  return html
}
exports.gHTML = (tags)=>{
  var html="",temp="",rtags=[];
  for(tag in tags){
    html="";
    html+= gTag(tags);
  }
  return html
}
