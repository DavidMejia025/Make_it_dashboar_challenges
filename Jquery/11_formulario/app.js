$('.help-block').hide();
$('form').on('submit', function(e) {
  e.preventDefault(); // previene la acción por defecto (enviar el formulario)

  // escribe acá tu solución
  has_password();
  has_content();
  check_box();
});

function has_content(){
	if($('#username').val().length <=6){
		$('#input_user').addClass("form-group form-group has-error")
		$('#input_user .help-block').show();
		
	}
	else{
		$('#input_user').removeClass("form-group form-group has-error")
		$('.help-block').hide();
	}
}

function has_password(){
	if(($('#password').val().length <=5) || ($('#password').val().length >=40)){
		$('#input_password').addClass("form-group form-group has-error")
		$('#input_password .help-block').show();
	}
	else{
		$('#input_password').removeClass("form-group form-group has-error")
		$('.help-block').hide();
	}	

}

function check_box (){
	if($('#terms').is(":checked")){
		$('#check_box').removeClass("checkbox terms-checkbox has-error")
	}
	else{
		$('#check_box').addClass("checkbox terms-checkbox has-error")
	}
}
