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
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let winner;
    let message;

    if(playerSelection == 1) {
        if(computerSelection == 1) {
            console.log("Draw");
            message = "Draw";
            winner = "draw";
        } else if(computerSelection == 2) {
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
        if(computerSelection == 1) {
            console.log("You win! Squirtle is strong Charmander");
            message = "You win! Squirtle is strong Charmander   ";
            winner = "win";
        } else if(computerSelection == 2) {
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
        if(computerSelection == 1) {
            console.log("You Lose! Bulbasaur is weak against Charmander");
            message = "You Lose! Bulbasaur is weak against Charmander";
            winner = "lose";
        } else if(computerSelection == 2) {
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
    const playerhpNum = document.querySelector('#player-hp .hp-num');
    const enemyhpNum = document.querySelector('#enemy-hp .hp-num');
    const currentplayerhp = parseFloat(window.getComputedStyle(playerhp).width);
    const currentenemyhp = parseFloat(window.getComputedStyle(enemyhp).width);
    let newWidth = 0 ;

    const outputMessage = document.querySelector('#text');
    setTimeout(function() {
        outputMessage.textContent = message;
        if (playerScore < 5 && computerScore < 5) {
            setTimeout(function () {
                outputMessage.textContent = "Choose your move...";
            }, 2000);
        }
    }, 500);

        if(winner == "win") {
            playerScore ++;
            setTimeout(function() {
            newWidth = currentenemyhp - 30;
            enemyhp.style.width = newWidth + 'px';
            updateHpText(enemyhpNum, playerScore);
            }, 500);
        }else if (winner == "lose") {
            computerScore ++;
            setTimeout(function() {
                newWidth = currentplayerhp - 30;
                playerhp.style.width = newWidth + 'px';
                updateHpText(playerhpNum, computerScore);
            }, 500);
        }
    

    console.log("Scores:")
    console.log(playerScore);
    console.log(computerScore);

}

function updateHpText(element, score) {
    const hpLeft = 5 - score;
    element.textContent = `HP ${hpLeft}/5`;
}

function play(playerMove, computerMove) {
    const playerimg = document.querySelector('#player-pokemon');
    const enemyimg = document.querySelector('#enemy-pokemon');
    const defaultImg = '../resources/icon.png';
    const movectn = document.querySelector('#move-ctn');
    movectn.style.display = 'block';

    const buttonAudio = document.getElementById("button-audio");
    buttonAudio.play();
    
    playerimg.style.opacity = 0;
    setTimeout(function() {
        if (playerMove == 1) {
            playerimg.src = '../resources/charmander-back.png';
        } else if (playerMove == 2) {
            playerimg.src = '../resources/squirtle-back.png';
        } else {
            playerimg.src = '../resources/bulbasaur-back.png';
        }

        playerimg.style.opacity = 1; // Start fade-in

        setTimeout(function() {
            playerimg.style.opacity = 0; // Start fade-out
            setTimeout(function() {
                playerimg.src = defaultImg;
                playerimg.style.opacity = 1; // Set back to visible for the next time
            }, 500); // Duration of the fade-out effect
        }, 2000);
    }, 500);

    enemyimg.style.opacity = 0;
    setTimeout(function() {
        if (computerMove === 1) {
            enemyimg.src = '../resources/charmander.png';
        } else if (computerMove === 2) {
            enemyimg.src = '../resources/squirtle.png';
        } else {
            enemyimg.src = '../resources/bulbasaur.png';
        }

        enemyimg.style.opacity = 1; // Start fade-in

        setTimeout(function() {
            enemyimg.style.opacity = 0; // Start fade-out
            setTimeout(function() {
                enemyimg.src = defaultImg;
                enemyimg.style.opacity = 1; // Set back to visible for the next time
            }, 500); // Duration of the fade-out effect
        }, 2000);
    }, 500);

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
            setTimeout(function() {
                outputMessage.textContent = "Game Over! You Win the Game!";
            }, 2000);

        } else if (computerScore >= 5) {
            setTimeout(function() {
                outputMessage.textContent = "Game Over! Computer Wins the Game!";
            }, 2000);
        }
        movectn.style.display = 'none';
    }
}










