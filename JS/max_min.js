
// Hola Maker,

// Tu misión en este reto es definir dos funciones, una llamada maximo y otra minimo, que reciben un número 
// variable de argumentos (números) y retornan el máximo y el mínimo respectivamente.


function maximo(numbers){
	var arg =[]
	for ( var i=0; i<arguments.length;i++){
		arg.push(arguments[i])
	}
	var max = arg.sort(function(a, b){return a-b});
	return max = max[max.length-1]
	console.log(arg)
}

 function minimo(numbers){
	var arg =[]
	for ( var i=0; i<arguments.length;i++){
		arg.push(arguments[i])
	}
	var min = arg.sort(function(a, b){return a-b});
	return min = min[0]
}

n = maximo(5, 10, 20, 50, 32)
m = minimo(3, 44, 2, 8)
console.log( n )
console.log( m )
 