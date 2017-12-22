 var countries = [
  { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
  { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
  { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
  { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
];

$(".wrapper button").on("click", function(){
	$(".wrapper").hide()
	//$("body").append("<table><thead><tr><th> 'Flag' </th> <th> 'Code'</th><th> 'Name'</th></tr></thead> <tbody></tbody></table>"
  	
	$("body").append("<table></table>")

	$("table").append("<tr><th> Flag </th><th> Code </th><th> name </th> </tr>")
	$("table").append("<tbody> </tbody>")
  	$("table").css("display","block")
	for ( var i=0; i<4; i++){
		$("tbody").append(`<tr> <td><img src="${countries[i].flag_url}" alt="" /> </td> <td> ${countries[i].code} </td> <td> ${countries[i].name} </td> </tr>`)
	}

})

