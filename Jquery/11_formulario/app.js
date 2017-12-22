$('form').on('submit', function(e) {
  e.preventDefault(); // previene la acción por defecto (enviar el formulario)

  has_user();
  has_password();
  check_box();

  // escribe acá tu solución

});

function has_user(){
	if ($("#username").val()==""|| $("#username").val().indexOf(' ')>=0){
		$(".form-group.username").addClass("has-error")
	} else{
		$(".form-group.username").removeClass("has-error")
	}
}

function has_password(){
	if ($($("#password").val().length <=5)|| ($("#password").val().length >=40)) {
		$(".form-group.password").addClass("has-error")
	}else{
		$(".form-group.password").removeClass("has-error")
	}
}

function check_box(){
	if($("#terms").is(":checked")==false){
		$(".checkbox").addClass("has-error")
	}
}






































// //$('.help-block').hide();
// $('form').on('submit', function(e) {
//   e.preventDefault(); // previene la acción por defecto (enviar el formulario)

//   // escribe acá tu solución
//   // has_password();
//   // has_content();
//   check_box();
// });

// function has_content(){
// 	if($('#username').val().length <=6){
// 		$('.form-group #username').addClass("has-error")
// 		$('#help-block_1').show();
		
// 	}
// 	else{
// 		$('.form-group #username').removeClass("has-error")
// 		$('#help-block_1').hide();
// 	}
// }

// function has_password(){
// 	if(($('#password').val().length <=5) || ($('#password').val().length >=40)){
// 		$('.form-group #password').addClass("has-error")
// 		$('#help-block_2').show();
// 	}
// 	else{
// 		$('#input_password').removeClass("has-error")
// 		$('#help-block_2').hide();
// 	}	

// }

// function check_box (){

// 	if($('#terms').is(":checked")){
// 		console.log("checked")
// 		$('#check_box').removeClass("has-error")
// 	}
// 	else{
// 		console.log("NOT checked")
// 		$('#check_box').addClass("has-error")
// 	}
// }


// $('.help-block').hide();
// $('form').on('submit', function(e) {
//   e.preventDefault(); // previene la acción por defecto (enviar el formulario)

//   // escribe acá tu solución
//   has_content();
//   has_password();
//   check_box();
// });

// function has_content(){
// 	if($('#username').val().length <=6){
// 		$('#input_user').addClass("form-group form-group has-error")
// 		$('#input_user .help-block').show();
		
// 	}
// 	else{
// 		$('#input_user').removeClass("form-group form-group has-error")
// 		$('.help-block').hide();
// 	}
// }

// function has_password(){
// 	if(($('#password').val().length <=5) || ($('#password').val().length >=40)){
// 		$('#input_password').addClass("form-group form-group has-error")
// 		$('#input_password .help-block').show();
// 	}
// 	else{
// 		$('#input_password').removeClass("form-group form-group has-error")
// 		$('.help-block').hide();
// 	}	

// }

// function check_box (){
// 	if($('#terms').is(":checked")){
// 		$('#check_box').removeClass("checkbox terms-checkbox has-error")
// 	}
// 	else{
// 		$('#check_box').addClass("checkbox terms-checkbox has-error")
// 	}
// }
