function getComputerChoice(){
    let random = ['rock', 'paper', 'scissors'];
    return random[Math.floor(Math.random() * 3)];
};

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

let scoreB1 = document.querySelector('#pScore');
scoreB1.textContent = 'Your bananas: ' + playerScore;

let scoreB2 = document.querySelector('#cScore');
scoreB2.textContent = 'Cyborg gorilla\'s bananas: ' + computerScore;

let scoreB3 = document.querySelector('#tScore');
scoreB3.textContent = 'Bananas too bruised to eat: ' + tieScore;

function playRound(){
    let computer = getComputerChoice();
    if (player===computer) {
        tieScore += 1;
    }
    else if (player === 'scissors' && computer === 'rock' || player === 'rock' && computer === 'paper' || player === 'paper' && computer === 'scissors') {
        computerScore += 1;
    }
    else if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper') {
        playerScore += 1;
    }
    scoreB1.textContent = 'Your bananas: ' + playerScore;
    scoreB2.textContent = 'Cyborg gorilla\'s bananas: ' + computerScore;
    scoreB3.textContent = 'Bananas too bruised to eat: ' + tieScore;

    if (scoreB1.textContent === 'Your bananas: 5'){
        if (confirm('You won the clash...Fight again?')){
            location.reload();
        }
        else {
            scoreB1.textContent = 'You flee with your bananas...';
            scoreB2.textContent = '';
            scoreB3.textContent = '';
            btn1.disabled = true, btn2.disabled = true, btn3.disabled = true;
        }
    }
    else if (scoreB2.textContent === 'Cyborg gorilla\'s bananas: 5'){
        if (confirm('You lost the clash...Fight again?')){
            location.reload();
        }
        else {
            scoreB1.textContent = 'The alpha gorilla wanders off with your bananas...';
            scoreB2.textContent = '';
            scoreB3.textContent = '';
            btn1.disabled = true, btn2.disabled = true, btn3.disabled = true;
        }
    }
};

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