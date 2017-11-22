// Redifine challenge with push and append text.


function adjustText(string, num){
  var tam = string.length;
  //string = [string]
  if (tam > num){
    return string.substr(0, num);
  }else{
    diff = num-tam;
    for (var i=0; i <= diff-1; i++) {
      console.log(string)
      string = string + " ";     
    } 
  }
  return string;
}

console.log(adjustText("",3))