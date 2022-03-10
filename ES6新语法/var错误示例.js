if (true) {
  var externalVal="externalVal"
}
function domainText() { 
  var funVal = "funVal";
  console.log(externalVal + "---" + funVal);
}
domainText()

if (true) { 
  console.log(externalVal + "---" + funVal);//报错
}