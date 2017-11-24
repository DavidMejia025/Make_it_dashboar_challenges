$('form').on('submit', function(e) {
  e.preventDefault(); // previene la acción por defecto (enviar el formulario)

  // escribe acá tu solución
  has_content();
  has_password();
  check_box();
});

function has_content(){
	if($('#username').val().length <=6){
		$('#input_user').addClass("form-group form-group has-error")
		$('#input_user').append('<p class= "form-group form-group has-error"> Ingresa un usuario</p>')
	}
	else{
		$('#input_user').removeClass("form-group form-group has-error")
		$('#input_user').remove('<p></p>')
	}
}

function has_password(){
	if(($('#password').val().length <=5) || ($('#password').val().length >=40)){
		$('#input_password').addClass("form-group form-group has-error")
	}
	else{
		$('#input_password').removeClass("form-group form-group has-error")
		console.log('bien')
	}	

}

function check_box (){
	if($('#terms').checked){
		$('#check_box').addClass("checkbox terms-checkbox has-error")
	}
	else{
		$('#check_box').removeClass("checkbox terms-checkbox has-error")
	}
}
