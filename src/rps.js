function Rock(){
	this.type = 'Rock'
	this.beats = 'Scissors'
};

function Scissors(){
	this.type = 'Scissors'
	this.beats = 'Paper'
};

function Paper(){
	this.type = 'Paper'
	this.beats = 'Rock'
};

function Draw() {};

function Game() {};

Game.prototype.winner = function(choiceOne, choiceTwo) {
	if(choiceOne.beats === choiceTwo.type) return 'You win!'
	if(choiceTwo.beats === choiceOne.type) return 'Computer wins!'
	if(choiceOne.type === choiceTwo.type) return 'It\'s a draw';
};
