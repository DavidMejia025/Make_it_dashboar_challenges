$("#load-cars").on("click", function(){
	console.log("Hello")
	var source = $('#cars-template').html()
	var template = Handlebars.compile(source)

	$.ajax({
		url: "https://s3.amazonaws.com/makeitreal/cars.json",
		type: "GET",
		dataType: "json"
	})
	.done(function(data){
		console.log(data)
		var html =template({"cars":data})
		$(".cars").html(html)	
	})
	
})