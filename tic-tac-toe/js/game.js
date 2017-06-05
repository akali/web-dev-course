window.onload = function() {
	let player_1 = document.getElementById('player_1');
	let player_2 = document.getElementById('player_2');
	let player_1_score = document.getElementById('player_1_score');
	let player_2_score = document.getElementById('player_2_score');

	player_1.innerHTML = localStorage.getItem('player1_name');
	player_2.innerHTML = localStorage.getItem('player2_name');
	let player_1_wins = 0;
	let player_2_wins = 0;
	let currentPlayer = 'X';
	let winnningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],[1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	function check() {
		let squares = document.getElementsByClassName('square');
		// console.log(squares);
		let signs = Array.prototype.slice.call(squares, 0);
		let inner = signs.map(function(e) {
			return e.innerHTML;
		});
		return winnningCombos.find(function(combo) {
			if (inner[combo[0]] === inner[combo[1]] && inner[combo[1]] === inner[combo[2]] && inner[combo[0]].length > 0)
				return true;
			else
				return false;
		});
	}
	function clear_all(alert_modal) {
		if (alert_modal !== undefined) {
			alert_modal.style.visibility = 'hidden';
		};
		let squares = document.getElementsByClassName('square');
		for (let i = 0; i < squares.length; ++i) {
			squares[i].innerHTML = '';
		}
		currentPlayer = 'X';
	}
	document.getElementById('board').addEventListener('click', function(e) {
		let btn = e.target;
		if (String(btn.innerHTML).length !== 0)
			return;
		btn.innerHTML = currentPlayer;
		if (currentPlayer === 'X') currentPlayer = 'O';
		else currentPlayer = 'X';
		let sqrs = document.getElementsByClassName('square');
		let q = 0;
		for (let i = 0; i < sqrs.length; ++i)
			if (sqrs[i].innerHTML.length === 0)
				q = 1;
		if (q === 0) {
			let modal_winner = document.getElementById('modal_winner');
			modal_winner.innerHTML = "Draw";
			let alert_modal = document.getElementById('modal');
			alert_modal.style.visibility = 'visible';
			setTimeout(function() {
				clear_all(alert_modal);
			}, 2000);
		}
		if (check()) {
			let winner = currentPlayer;
			if (winner === 'X') winner = 'O';
			else winner = 'X';
			let modal_winner = document.getElementById('modal_winner');
			if (winner === 'X') {
				player_1_wins++
				modal_winner.innerHTML = player_1.innerHTML + " wins!!!";
			} else {
				player_2_wins++;
				modal_winner.innerHTML = player_2.innerHTML + " wins!!!";
			}
			player_1_score.innerHTML = player_1_wins;
			player_2_score.innerHTML = player_2_wins;
		
			let alert_modal = document.getElementById('modal');
			alert_modal.style.visibility = 'visible';
			setTimeout(function() {
				clear_all(alert_modal);
			}, 2000);
		}
	});
};
