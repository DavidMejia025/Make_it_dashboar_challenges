var pepito = {
    nombre: 'Pepito'
}

var hijos = {
    numero: 3
}

var hijo = {
  nombre: 'German'
}
var hijos = {
  german: hijo
}

var bmi = function(altura,peso){return(peso/(altura*altura))}

var maria = { 
    esposo: pepito,
    peso: 60,
    altura: 1.70,
    hijos: hijos,
    bmi: bmi
    
}
output = bmi(1.66,85);
console.log(output)