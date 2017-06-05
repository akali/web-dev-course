window.onload = function(global) {
	let submit = document.getElementsByTagName('button')[0];
	submit.addEventListener('click', function() {
		let player1_name = document.getElementById('player_1').value;
		let player2_name = document.getElementById('player_2').value;
		localStorage.setItem('player1_name', player1_name, false);
		localStorage.setItem('player2_name', player2_name, false);
		window.open('game.html', '_self');
	});
};
