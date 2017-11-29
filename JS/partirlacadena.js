function split(string){
	console.log(string)
	console.log(string.split(/\W/))
	return string.split(/\W/)
}


//split("Hola+Mundo"); // => ["Hola", "Mundo"]
 split("partir-la-cadena"); // => ["partir", "la", "cadena"]
 split("este-es+otro*ejemplo"); // => ["este", "es", "otro", "ejemplo"]
 split(''); // => [""]