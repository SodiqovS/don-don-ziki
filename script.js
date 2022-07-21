const choices = document.querySelectorAll('.choice'),
    score = document.querySelector('#score'),
    modal = document.querySelector('.modal'),
    result = document.querySelector('#result'),
    restart = document.querySelector('#restart'),
    scoreBoard = {
        player: 0,
        computer: 0,
        draw: 0,
    };

// Play game 
function play(event) {
    restart.style.display = 'inline-block';
    const playerChoice = event.target.id
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// Get computer choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand<0.34) {
        return 'rock'
    }
    else if (rand<=0.67) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

// Get winner 
function getWinner(p, c) {
    if (p === c) {
        return 'draw'
    }
    else if (p=='rock') {
        if (c=='paper') {
            return 'computer'
        }
        else {
            return 'player'
        }
    }
    else if (p=='paper') {
        if (c=='scissors') {
            return 'computer'
        }
        else {
            return 'player'
        }
    }
    else if (p=='scissors') {
        if (c=='rock') {
            return 'computer'
        }
        else {
            return 'player'
        }
    }
}

// ShowWinner
function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        scoreBoard.player++;
        result.innerHTML = `
            <h1 class="text-win">You win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer choice <strong>${computerChoice.toUpperCase()}</strong></p>
        `
    }
    else if (winner === 'computer') {
        scoreBoard.computer++;
        result.innerHTML = `
            <h1 class="text-lose">You lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer choice <strong>${computerChoice.toUpperCase()}</strong></p>
        `
    }
    else {
        scoreBoard.draw++;
        result.innerHTML = `
            <h1 class="text-win"">It's a draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer choice <strong>${computerChoice.toUpperCase()}</strong></p>
        `
    }

    score.innerHTML = `
        <p>Player: ${scoreBoard.player}</p>
        <p>Draw: ${scoreBoard.draw}</p>
        <p>Computer: ${scoreBoard.computer}</p>
    `
    modal.style.display = 'block'

}

// Restart game
function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    scoreBoard.draw = 0;
    score.innerHTML = `
        <p>Player: ${scoreBoard.player}</p>
        <p>Draw: ${scoreBoard.draw}</p>
        <p>Computer: ${scoreBoard.computer}</p>
    `
}

// Clear modal
function clearModal(event) {
    if (event.target == modal){
        modal.style.display = 'none'
    } 
}

// Event listenears

choices.forEach(choice => {
    choice.addEventListener('click',play)
})

window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);