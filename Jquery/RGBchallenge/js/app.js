var correct;
var score = 0;

//Inicializa el juego
game()
// Enlaca el click de los circulos a la funcion guess
$('.option').on('click', guess);
$(".close a").on('click', function() {
	$('.result').hide();
	$('.option').removeClass('scale');
	game();
});

function guess() {
	$(this).addClass("scale")
	var index = $('.option').index(this);
	if (index == correct) {
		$('.result.won').show();
		score++
		$('.score span').text(score);
}
	else{
		$('.result.lost').show();
		score = 0;
	}
	
}

function game() {
    correct = Math.floor(Math.random()*2);
	$('.option').each(function(index) {
		var color = generateColor();
		$(this).css('background-color', color);
		if ( index == correct){
			$('.question').text(color);
		}
	});
}
function generateColor(){
	return 'rgb('+random()+','+random()+','+random()+')';
}

function random(){
	return Math.floor(Math.random()*255);
}

