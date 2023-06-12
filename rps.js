const game = () => {
    let pScore = 0;
    let cScore = 0;
    const startgame = () => {
        const playbtn = document.querySelector(".letsplay button");
        const introscrn = document.querySelector(".letsplay");
        const gamescrn = document.querySelector(".choose");

        playbtn.addEventListener("click", () => {
            introscrn.classList.add("fadeout");
            gamescrn.classList.add("fadein");
        });
    };

    const playmatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerhand = document.querySelector(".player-hand");
        const comphand = document.querySelector('.computer-hand');
        const images = document.querySelectorAll('hands img');

        images.forEach(image => {
            image.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        const gameopt = ['rock', 'paper', 'scissor'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                const computernumber = Math.floor(Math.random() * 3);
                const computerchoice = gameopt[computernumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerchoice);
                    playerhand.img.src = "images/" + this.textContent + ".png";
                    comphand.img.src = "images" + computerchoice + ".png";
                }, 2000);
                playerhand.style.animation = "shakePlayer 2s ease";
                comphand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const compareHands = (playerchoice, computerchoice) => {
        const winner = document.querySelector('.winner');
        if (playerchoice === computerchoice) {
            winner.textContent = "Its a tie";
            return;
        }

        if (playerchoice === "rock") {
            if (computerchoice === "scissors") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if (playerchoice === "paper") {
            if (computerchoice === "scissors") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissors
        if (playerchoice === "scissors") {
            if (computerchoice === "rock") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player p');
        const computerScore = document.querySelector('.computer p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    startgame();
    playmatch();

};

game();
playmatch();