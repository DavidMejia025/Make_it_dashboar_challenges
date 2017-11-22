var duplicate = function(i) {return i*2};
var increase = function(i) {return i+10};

var transform = function (array, fun){
	var output = [2];

	for (var i= 0; i<array.length;i++){
		output[i] = (fun(array[i]));

	}
	return output;
};

console.log(transform([1,2,3], duplicate))