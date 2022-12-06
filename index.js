function getComputerChoice(){
    let random = ['rock', 'paper', 'scissors'];
    return random[Math.floor(Math.random() * 3)];
};

let playerScore = 0;
let computerScore = 0;

let scoreB1 = document.querySelector('#pScore');
scoreB1.textContent = 'Your bananas: ' + playerScore;

let scoreB2 = document.querySelector('#cScore');
scoreB2.textContent = 'Computer bananas: ' + computerScore;

function playRound(){
    let computer = getComputerChoice();
    if (player===computer) {
        console.log('TIE');
    }
    else if (player === 'scissors' && computer === 'rock' || player === 'rock' && computer === 'paper' || player === 'paper' && computer === 'scissors') {
        computerScore += 1;
    }
    else if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper') {
        playerScore += 1;
    }
    scoreB1.textContent = 'Your bananas: ' + playerScore;
    scoreB2.textContent = 'Computer bananas: ' + computerScore;
};

function game(){
    let btn1 = document.querySelector('#rk');
        btn1.addEventListener('click', () => {
            playRound(player = 'rock');
    });

    let btn2 = document.querySelector('#pp');
        btn2.addEventListener('click', () => {
            playRound(player = 'paper');
    });

    let btn3 = document.querySelector('#sz');
        btn3.addEventListener('click', () => {
            playRound(player = 'scissors');
    });
};

game();