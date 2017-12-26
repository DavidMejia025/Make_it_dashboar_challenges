var template = Handlebars.compile($('#guest-template').html());

$('form').on('submit', function(e) {
  e.preventDefault();

  var guest = { 
    firstName: $('#first-name').val(), 
    lastName: $('#last-name').val(), 
    mobileNumber: $('#mobile-number').val(),
    confirmed: $('#confirmed').is(':checked')
  };

  $('table tbody').append(template(guest));
  $('#new-guest').modal('hide');
  $(this)[0].reset();
});

// $( document ).ready(function() {
//   $(".form-horizontal").on("submit", function(){
//     event.preventDefault()
//     var first_name = $("#first-name").val()
//     var last_name = $("#last-name").val()
//     var mobile_number = $("#mobile-number").val()
//     var confirmed = $("#confirmed").is(':checked')
//     $(".table").append(`<tr> <td>${first_name}</td> <td>${last_name}</td> <td class="text-center">${mobile_number}</td> <td class="text-center">'<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'</td> </tr>`)
//     //$('.table tbody').append('<tr>' + '<td>' + nombre + '</td><td>' + apellido + '</td><td>' + celular + '</td><td>' + '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'  + '</td></tr>')
//     $("#first-name").val("")
//     $("#last-name").val("")
//     $("#mobile-number").val("")
//     $("#confirmed").prop("checked", false)
//     $("#new-guest").modal('toggle');

//   })
// });









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