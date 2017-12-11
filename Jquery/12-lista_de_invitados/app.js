var data_name = "Hola";
var data_surname = "";
var data_mp = "";
var data_cb = false;



//$('.modal-footer .btn.btn-primary').on('click',function(e){
$('form').submit(function() {
	data_name= $("#first-name").val()
	data_surname= $("#last-name").val()
	data_mp= $("#mobile-number").val()
	data_cb= $("#confirmed").is(":checked")
	$('.table').append(`<tr><td>${data_name}</td><td>${data_surname}</td><td>${data_mp}</td><td>${data_cb}</td></tr>`);

})


// 	e.preventDefault(); 
// 	data_name= $("#first-name").val()
// 	data_surname= $("#last-name").val()
// 	data_mp= $("#mobile-number").val()
// 	data_cb= $("#confirmed").is(":checked")
// 	$('.table').append(`<tr><td>${data_name}</td><td>${data_surname}</td><td>${data_mp}</td><td>${data_cb}</td></tr>`);

// })