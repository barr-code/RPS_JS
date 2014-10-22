describe('RPS', function(){

		beforeEach(function(){
			rock = new Rock;
			scissors = new Scissors;
			paper = new Paper;
		});

	describe('the types of weapons', function() {

		it('Rock', function(){
			expect(rock.type).toEqual('Rock');
		});

		it('Scissors', function(){
			expect(scissors.type).toEqual('Scissors')
		});

		it('Paper', function(){
			expect(paper.type).toEqual('Paper')
		});

	});

	describe('playing the game', function(){

		beforeEach(function(){
			game = new Game;
			draw = new Draw;
		});

		it('Rock beats Scissors', function() {
			choiceOne = new Rock;
			choiceTwo = new Scissors;
			expect(game.winner(choiceOne, choiceTwo)).toEqual('You win!')
		});
		
	});

});