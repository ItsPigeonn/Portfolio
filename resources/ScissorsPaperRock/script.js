//buttons don't work until DOM is fully loaded
window.onload = function () {

    //define choices (scissors, paper, rock)
    const choices = ["Scissors", "Paper", "Rock"];

    //define player and computer, set choices to null
    const player = {
        currentChoice: null
    };
    const computer = {
        currentChoice: null
    };

    //functions for player choices
    function playerScissors() {
        player.currentChoice = choices[0];
        compareChoices();
        //debugLog();
    }
    function playerPaper() {
        player.currentChoice = choices[1];
        compareChoices();
        //debugLog();
    }
    function playerRock() {
        player.currentChoice = choices[2];
        compareChoices();
        //debugLog();
    }
    //choose computer weapon by generating randomIndex
    function computerChooses() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        computer.currentChoice = choices[randomIndex];
    }

    //set player weapon depending on button pressed
    document.querySelector('#button-scissors').addEventListener('click', playerScissors);
    document.querySelector('#button-paper').addEventListener('click', playerPaper);
    document.querySelector('#button-rock').addEventListener('click', playerRock);

    //compare choices to determine winner
    function compareChoices() {
        computerChooses();
        if (computer.currentChoice === player.currentChoice) {
            const updateResults = document.querySelector(".results");
            updateResults.innerText = "Tie game! Both you and the computer chose " +
                player.currentChoice;
        } else if (computer.currentChoice === choices[0]) {
            if (player.currentChoice === choices[1]) {
                const updateResults = document.querySelector(".results");
                updateResults.innerText =
                    "You lose! You chose " +
                    player.currentChoice +
                    " and the computer chose " +
                    computer.currentChoice;
            } else {
                const updateResults = document.querySelector(".results");
                updateResults.innerText =
                    "You win! You chose " +
                    player.currentChoice +
                    " and the computer chose " +
                    computer.currentChoice;
            }
        } else if (computer.currentChoice === choices[1]) {
            if (player.currentChoice === choices[0]) {
                const updateResults = document.querySelector(".results");
                updateResults.innerText =
                    "You win! You chose " +
                    player.currentChoice +
                    " and the computer chose " +
                    computer.currentChoice;
            } else {
                const updateResults = document.querySelector(".results");
                updateResults.innerText =
                    "You lose! You chose " +
                    player.currentChoice +
                    " and the computer chose " +
                    computer.currentChoice;
            }
        } else if (computer.currentChoice === choices[2]) {
            if (player.currentChoice === choices[0]) {
                const updateResults = document.querySelector(".results");
                updateResults.innerText =
                    "You lose! You chose " +
                    player.currentChoice +
                    " and the computer chose " +
                    computer.currentChoice;
            } else {
                const updateResults = document.querySelector(".results");
                updateResults.innerText =
                    "You win! You chose " +
                    player.currentChoice +
                    " and the computer chose " +
                    computer.currentChoice;
            }
        }
    }
}

/*
function debugLog() {
    console.log(
        "LOGGED RESULTS - PLAYER: " +
        player.currentChoice +
        ", COMPUTER: " +
        computer.currentChoice
    );
}
*/