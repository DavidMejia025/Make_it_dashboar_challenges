var source = $("#My-script").html()
var template = Handlebars.compile(source)

Handlebars.registerHelper("enumeracion",function(number1,number2, sign){
	num1 = parseFloat(number1)
	num2 = parseFloat(number2)
	var operation = {
		"+": num1+num2,
		"*": num1*num2
	}
	return operation[sign]

})
console.log("1")
$.ajax({
	url:"https://mxrck-ser-programadores-apis.p.mashape.com/weather/forecast/MXCE0008/C.json",
	type: "GET",
	dataType: "json",
	headers:{"X-Mashape-Key": "Pfcqbzt1Ijmshtit9CPG3jXz3avAp1SjnTtjsndopXOC1rpDAf"}

})
.done(function(data){
	console.log(data)
	var html = template({"paises":data})
	$(".render").append(html)
})
.fail(function(){
	console.log("error")
})
console.log("2")
$(".wrapper button").on("click", function(){
	$(".wrapper button").hide()
	var source = $('#country-template').html()
	var template = Handlebars.compile(source)

	$.ajax({
		url: "https://s3.amazonaws.com/makeitreal/countries.json",
		type: "GET",
		dataType: "json"
	})
	.done(function(data){
		var html =template({"paises":data})
		$(".wrapper").html(html)	
	})
	
})
// $(".wrapper button").on("click", function(){
// 	$(".wrapper button").hide()
// 	//$("body").append("<table><thead><tr><th> 'Flag' </th> <th> 'Code'</th><th> 'Name'</th></tr></thead> <tbody></tbody></table>"
  	
// 	$(".wrapper").append("<table></table>")

// 	$("table").append("<tr><th> Flag </th><th> Code </th><th> name </th> </tr>")
// 	$("table").append("<tbody> </tbody>")
//   	$("table").css("display","block")
// 	for ( var i=0; i<4; i++){
// 		$("tbody").append(`<tr> <td><img src="${countries[i].flag_url}" alt="" /> </td> <td> ${countries[i].code} </td> <td> ${countries[i].name} </td> </tr>`)
// 	}

// })

