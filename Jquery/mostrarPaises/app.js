 var countries = [
  { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
  { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
  { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
  { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
];

$(".wrapper button").on("click", function(){
	$(".wrapper").hide()
	for ( var i=0; i<4; i++){
		$("tbody").append(`<tr> <td><img src="${countries[i].flag_url}" alt="" /> </td> <td> ${countries[i].code} </td> <td> ${countries[i].name} </td> </tr>`)
	}

})

