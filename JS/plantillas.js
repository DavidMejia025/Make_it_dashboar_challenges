// 1 reconocer campos en string in 
// reconocer el corchete y lo que hay dentro del corchete
// 2 se cambia por el valor en en objeto correspondiente
//3 se retorna el string con los nuevos valores.

function template (string_in, object){
  var string_out = [];
  var m= 0;
  for (var i=0; i<string_in.length; i++){
    if (string_in[i]=="["){
      var k = i;
      while (string_in[k]!="]"){
        k += 1;  
      }
      value = object[string_in.slice(i+1,k)];
      if (value == undefined){
        value = "undefined";
      }
      if (typeof value=="string"){
        for (var t=m;t<m+value.length;t++){
          string_out[t] = value[t-m];
        }
        m=t;
        i=k;
      }
      else{
        string_out[m] = value;
        i=k;
      }
    }
    else{
      string_out[m] = string_in[i];
      m++  
    }
    
  }
  return string_out.join(""); 
}

function template (text,objectvalue){
match= text.match(/\[(.*?)\]+/g)
console.log(match);   
if(text.search(/\[(.*?)\]+/g)>-1){
  match.map(function(element) {
     value=element.replace("[","").replace("]","")
      text=text.replace(element,objectvalue[value])
      //console.log(value);   
  })

}

return text
}


console.log(template("Hola [nombre]", { nombre: "German" }))
console.log(template("Hola [nombre], tu saldo es [saldo]", { nombre: "German", saldo: 12000 }));
console.log(template("Hola mundo", {}));
console.log(template("Hola [nombre]", {}));