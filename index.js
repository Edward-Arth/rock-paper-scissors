function getComputerChoice(){
    let random = ['rock', 'paper', 'scissors'];
    return random[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection){
    let player = prompt('rock, paper, scissors, shoot!');
    let computer = getComputerChoice();
    if (player===computer) {
        return('tie');
    }
    else if (player === 'scissors' && computer === 'rock' || player === 'rock' && computer === 'paper' || player === 'paper' && computer === 'scissors') {
        return ('computerScore');
    }
    else if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper') {
        return('playerScore');
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++){
        let point = playRound();
        if (point === 'tie'){
            'tie';
        }
        else if (point === 'computerScore'){
            computerPoints = computerPoints++;
            computerPoints++;
        }
        else if (point === 'playerScore'){
            playerPoints = playerPoints++;
            playerPoints++;
        }
    }
    if (playerPoints > computerPoints) {
        alert('YOU WIN!')
    }
    else if (computerPoints > playerPoints){
        alert('you kinda suck')
    }
    else if (computerPoints === playerPoints){
        alert('you tied')
    }
}

game();