$( document ).ready(function() {
  $(".form-horizontal").on("submit", function(){
    event.preventDefault()
    var first_name = $("#first-name").val()
    var last_name = $("#last-name").val()
    var mobile_number = $("#mobile-number").val()
    var confirmed = $("#confirmed").is(':checked')
    $("tbody").append(`<tr> <td>${first_name}</td> <td>${last_name}</td> <td class="text-center">${mobile_number}</td> <td class="text-center">${confirmed}</td> </tr>`)
    $("#first-name").val("")
    $("#last-name").val("")
    $("#mobile-number").val("")
    $("#confirmed").prop("checked", false)
    $("#new-guest").modal('toggle');

  })
});










// var data_name = "Hola";
// var data_surname = "";
// var data_mp = "";
// var data_cb = false;







// //$('.modal-footer .btn.btn-primary').on('click',function(e){
// $('form').submit(function() {
// 	data_name= $("#first-name").val()
// 	data_surname= $("#last-name").val()
// 	data_mp= $("#mobile-number").val()
// 	data_cb= $("#confirmed").is(":checked")
// 	$('.table').append(`<tr><td>${data_name}</td><td>${data_surname}</td><td>${data_mp}</td><td>${data_cb}</td></tr>`);

// })


// // 	e.preventDefault(); 
// // 	data_name= $("#first-name").val()
// // 	data_surname= $("#last-name").val()
// // 	data_mp= $("#mobile-number").val()
// // 	data_cb= $("#confirmed").is(":checked")
// // 	$('.table').append(`<tr><td>${data_name}</td><td>${data_surname}</td><td>${data_mp}</td><td>${data_cb}</td></tr>`);

// // })