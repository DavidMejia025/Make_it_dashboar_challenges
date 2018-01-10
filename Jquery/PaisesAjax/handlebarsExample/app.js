console.log ("Hello")

var source = $("#first-template").html()
var template = Handlebars.compile(source) 

Handlebars.registerHelper("enumeracion", function(pvalor, operador, svalor){
	pvalor = parseFloat(pvalor);
	svalor = parseFloat(svalor);

	var operadores  = {
		"+": pvalor + svalor,
		"*": pvalor * svalor,
		"-": pvalor - svalor
	}
	return operadores[operador]
})

$.ajax({
	url: "https://ajayakv-rest-countries-v1.p.mashape.com/rest/v1/all",
	type: "GET",
	dataType: "json",
	headers: {'X-Mashape-Key': 'Pfcqbzt1Ijmshtit9CPG3jXz3avAp1SjnTtjsndopXOC1rpDAf'}
})

.done(function(data){
	console.log(data);
})

var html = template({"persona":personas})
$(".container").html(html);
