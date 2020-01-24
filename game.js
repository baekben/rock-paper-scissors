//global variables
var choices = ['rock', 'paper', 'scissors'];
var playerScore = 0;
var computerScore = 0;
var ties = 0;
function computerPlay() {
  //computer will randomly return one of the choices: rock, paper, or scisscors
  var choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}
function playRound(playerSelection, computerSelection) {
  //a single round of the game
  if (playerSelection == computerSelection) {
    ties++;
    return "It's a tie";
  } else if (
    (playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')
  ) {
    computerScore++;
    return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
  } else {
    playerScore++;
    return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
  }
}

function game(playerChoice) {
  // plays the game
  var computerMove = document.getElementById('computerMove');
  let resultText = '';
  if (playerScore == 5 || computerScore == 5) {
    results();
  } else {
    let player = playerChoice.id;
    let computer = computerPlay();
    playRound(player, computer);
    document.getElementById('playerScore').innerHTML =
      'PlayerScore: ' + playerScore;
    document.getElementById('computerScore').innerHTML =
      'ComputerScore: ' + computerScore;
    document.getElementById('ties').innerHTML = 'Ties: ' + ties;
    computerMove.innerHTML = 'Computer Move: ' + computer;
  }
}
function results() {
  var win = document.getElementById('results');
  if (playerScore == 5) {
    win.innerHTML = 'You Win!';
  } else {
    win.innerHTML = 'You Lose.';
  }
  disableBtns();
  win.insertAdjacentHTML(
    'afterend',
    '<button onclick = location.reload()>Play Again?</button>'
  );
}
function disableBtns() {
  for (i = 0; i < choices.length; i++) {
    document.getElementById(choices[i]).disabled = true;
  }
}

function start() {
  var x = document.getElementById('move');
  var y = document.getElementById('start');
  if ((x.style.display = 'none')) {
    x.style.display = 'block';
    y.style.display = 'none';
    document.getElementById('introMessage').innerHTML =
      'Rock, Paper, or Scissors?';
    const moves = document.getElementById('move');
    moves.addEventListener('click', function(e) {
      const move = document.querySelector(`button[data-move="${e.target.id}"]`);

      game(move);
    });
  }
}
