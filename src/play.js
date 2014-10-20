var game = new Game();

$(document).ready(function (){
	$('#weapons img').on('click', function(){
		playerWeapon = $(this).data('weapon');
		playerChoice = choices[playerWeapon]
		computerChoice = randomChoice(options);
		$('p').html(game.winner(playerChoice, computerChoice));
	});
});

var options = [new Rock, new Scissors, new Paper]

var choices = {
	rock: new Rock(),
	paper: new Paper(),
	scissors: new Scissors()
}

var randomChoice = function(options) {
	return options[Math.floor(Math.random()*3)]
}