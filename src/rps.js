function Rock(){
	this.type = 'Rock'
};

function Scissors(){
	this.type = 'Scissors'
};

function Paper(){
	this.type = 'Paper'
};

function Draw(){};

function Game(){};

Game.prototype.winner = function(choiceOne, choiceTwo) {
	if(choiceOne.type === 'Rock' && choiceTwo.type === 'Scissors') return choiceOne;
	if(choiceOne.type === 'Paper' && choiceTwo.type === 'Rock') return choiceOne;
	if(choiceOne.type === 'Scissors' && choiceTwo.type === 'Rock') return choiceTwo;
	if(choiceOne.type === 'Rock' && choiceTwo.type === 'Paper') return choiceTwo;
	if(choiceOne.type === 'Scissors' && choiceTwo.type === 'Paper') return choiceOne;
	if(choiceOne.type === 'Paper' && choiceTwo.type === 'Scissors') return choiceTwo;
	if(choiceOne.type === choiceTwo.type) return draw;
};