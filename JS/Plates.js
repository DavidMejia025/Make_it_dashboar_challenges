function plates(str){
var res = str.match(/[A-Z]{3}\d{3}/g);
if (res == null){
	res = []
}
console.log(res)
}
plates("AAA123"); // => ["AAA123"]
plates("Iba en un AAA123 y después en un BBB987"); //=> ["AAA123", "BBB987"]
plates("no coincide");