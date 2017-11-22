var even = function(i) { return i%2 === 0 };
var none = function(i) {return false;};


var filter = function(array,fun){
	fun_result = array.map(fun);
	var output = [];
	for (var i =0; i < array.length; i++){
		if (fun_result[i]==true){
			output.push(array[i]);
		}
	}
	return output;
}

console.log(filter([1,2,3,4], even));
console.log(filter([1,2,3,4], none));

