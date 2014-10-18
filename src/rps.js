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

function Draw(){};

function Game(){};

Game.prototype.winner = function(choiceOne, choiceTwo) {
	if(choiceOne.beats === choiceTwo.type) return choiceOne
	if(choiceTwo.beats === choiceOne.type) return choiceTwo
	if(choiceOne.type === choiceTwo.type) return draw;
};