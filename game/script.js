let playerScore = 0;
let computerScore = 0;


function toggleAudio() {
    const audio = document.getElementById("background-audio");
    const img = document.querySelector('#audio-button img');

    if (audio.paused) {
        audio.play();
        img.src = '../resources/audio.png';
    } else {
        audio.pause();
        img.src = '../resources/audio-off.png';
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    const img = document.querySelector('#enemy-pokemon'); 

    let choice;
    switch(computerChoice) {
        case 1:
            choice = "charmander";
            img.src = '../resources/charmander.png';
            break;
        case 2:
            choice = "squirtle";
            img.src = '../resources/squirtle.png';
            break;
        default:
            choice = "bulbasaur";
            img.src = '../resources/bulbasaur.png';
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    let winner;
    let message;

    if(playerSelection == 1) {
        if(computerSelection == "charmander") {
            console.log("Draw");
            message = "Draw";
            winner = "draw";
        } else if(computerSelection == "squirtle") {
            console.log("You Lose! Charmander is weak against Squirtle");
            message = "You Lose! Charmander is weak against Squirtle";
            winner = "lose";
        } else {
            console.log("You win! Charmander is strong against Bulbasaur");
            message = "You win! Charmander is strong against Bulbasaur";
            winner = "win";
        }
    }

    if(playerSelection == 2) {
        if(computerSelection == "charmander") {
            console.log("You win! Squirtle is strong Charmander");
            message = "You win! Squirtle is strong Charmander   ";
            winner = "win";
        } else if(computerSelection == "squirtle") {
            console.log("Draw");
            message = "Draw";
            winner = "draw";
        } else {
            console.log("You Lose! Squirtle is weak against Bulbasaur");
            message = "You Lose! Squirtle is weak against Bulbasaur";
            winner = "lose";
        }
    }

    if(playerSelection == 3) {
        if(computerSelection == "charmander") {
            console.log("You Lose! Bulbasaur is weak against Charmander");
            message = "You Lose! Bulbasaur is weak against Charmander";
            winner = "lose";
        } else if(computerSelection == "squirtle") {
            console.log("You Win! Bulbasaur is strong against Squirtle");
            message = "You Win! Bulbasaur is strong against Squirtle";
            winner = "win";
        } else {
            console.log("Draw");
            message = "Draw";
            winner = "draw";
        }
    }

    score(winner, message);
}

function score(winner, message) {

    const playerhp = document.querySelector('#player-hp .hp');
    const enemyhp = document.querySelector('#enemy-hp .hp');
    const currentplayerhp = parseFloat(window.getComputedStyle(playerhp).width);
    const currentenemyhp = parseFloat(window.getComputedStyle(enemyhp).width);
    let newWidth = 0 ;

    const outputMessage = document.querySelector('#text');
    outputMessage.textContent = message;


    if(winner == "win") {
        playerScore ++;
        newWidth = currentenemyhp - 30;
        enemyhp.style.width = newWidth + 'px';
    }else {
        computerScore ++;
        newWidth = currentplayerhp - 30;
        playerhp.style.width = newWidth + 'px';
    }

    console.log("Scores:")
    console.log(playerScore);
    console.log(computerScore);

}

function play(playerMove, computerMove) {
    const img = document.querySelector('#player-pokemon');
    const movectn = document.querySelector('#move-ctn');
    movectn.style.display = 'block';

    const buttonAudio = document.getElementById("button-audio");
    buttonAudio.play();
    
    if(playerMove == 1) {
        img.src = '../resources/charmander-back.png';
    }
    else if(playerMove == 2) {
        img.src = '../resources/squirtle-back.png';
    }
    else{
        img.src = '../resources/bulbasaur-back.png';
    }

        playRound(playerMove, computerMove);
        checkWinner();
}

function displayMoves() {
    const controls = document.querySelector('#refresh-btn');
    const movectn = document.querySelector('#move-ctn');

    // Check if movectn is initially hidden
    if (movectn.style.display === 'none' || movectn.style.display === '') {
            movectn.style.display = 'block';
            location.reload();
    }else{
        location.reload();
    }
}


function checkWinner() {
    const outputMessage = document.querySelector('#text');
    const movectn = document.querySelector('#move-ctn');

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore >= 5) {
            outputMessage.textContent = "Game Over! You Win the Game!";

        } else if (computerScore >= 5) {
            outputMessage.textContent = "Game Over! Computer Wins the Game!";
        }
        movectn.style.display = 'none';
    }
}










