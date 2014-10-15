describe('RPS', function(){

		beforeEach(function(){
			rock = new Rock;
			scissors = new Scissors;
			paper = new Paper;
		});

	describe('the types of weapons', function() {
		it('rock', function(){
			expect(rock.type).toEqual('Rock');
		});

		it('scissors', function(){
			expect(scissors.type).toEqual('Scissors')
		});

		it('paper', function(){
			expect(paper.type).toEqual('Paper')
		});
	});

	describe('playing the game', function(){

		beforeEach(function(){
			game = new Game;
			draw = new Draw;
		});

		it('rock beats scissors', function(){
			expect(game.winner(rock, scissors)).toEqual(rock)
		});

		it('scissors loses to rock', function(){
			expect(game.winner(scissors, rock)).toEqual(rock)
		});

		it('paper beats rock', function(){
			expect(game.winner(paper, rock)).toEqual(paper)
		});

		it('rock loses to paper', function(){
			expect(game.winner(rock, paper)).toEqual(paper)
		});

		it('scissors beats paper', function(){
			expect(game.winner(scissors, paper)).toEqual(scissors)
		});

		it('paper loses to scissors', function(){
			expect(game.winner(paper, scissors)).toEqual(scissors)
		});

		it('rock draws rock', function(){
			expect(game.winner(rock, rock)).toEqual(draw)
		});
	});

});