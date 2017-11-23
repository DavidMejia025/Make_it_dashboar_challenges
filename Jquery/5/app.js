
$('#input').keyup(function(e){
  if($('#input').val()===''){
    $('h1').text('Como te llamas')
  }else{
    $('h1').text('Hola '+$('#input').val()+'!')
    }
  var keyup = e
  console.log(e.key)
  
})