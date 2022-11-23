function getComputerChoice(){
    let random = ['rock', 'paper', 'scissors'];
    return random[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection){
    let player = prompt('rock, paper, scissors, shoot!');
    let computer = getComputerChoice();
    if (player===computer) {
        alert('you tied')
    }
    else if (player === 'scissors' && computer === 'rock' || player === 'rock' && computer === 'paper' || player === 'paper' && computer === 'scissors') {
        alert('you lose!')
    }
    else if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper') {
        alert('you win!')
    }
}

playRound();