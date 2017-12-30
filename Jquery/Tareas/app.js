
$('li').click(function(element){
  classs = $(this).parent().attr('class')
  if (classs==='todo'){
    $(this).appendTo($('.done'))
  }else{
    $(this).appendTo($('.todo'))
  }
})