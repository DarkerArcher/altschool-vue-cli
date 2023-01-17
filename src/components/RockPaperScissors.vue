<template>
    <header>
        <h1>Rock Paper Scissors</h1>
    </header>

    <div class="score">
        <div id="user-label" class="badge">user</div>
        <div id="comp-label" class="badge">comp</div>
        <span id="user-score">{{ userScore }}</span>:<span id="comp-score">{{ compScore }}</span>
    </div>

    <div class="result">
        <p>{{ resultDiv }}</p>
    </div>
    <div class="choices">
        <div @click="play('r')" id="r" class="choice">
            <img src="../assets/rock.png" alt="rock">
        </div>
        <div @click="play('p')" id="p" class="choice">
            <img src="../assets/paper.png" alt="paper">
        </div>
        <div @click="play('s')" id="s" class="choice">
            <img src="../assets/scissors.png" alt="scissors">
        </div>
    </div>

    <p id="action-message">Make your move.</p>

    <div>
        <footer class="attribution">
            <p>Click <router-link to="/about">here</router-link> for more details.</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "RockPaperScissors",
    data() {
        return {
            userScore: 0,
            compScore: 0,
            "r": document.getElementById("r"),
            "p": document.getElementById("p"),
            "s": document.getElementById("s"),
            userScoreSpan: document.getElementById("user-score"),
            computerScoreSpan: document.getElementById("comp-score"),
            scoreBoardDiv: document.querySelector(".score"),
            resultDiv: "Let's Play!",
        };
    },
    methods: {
        play(userChoice) {
            const compChoice = this.getCompChoice();
            const winner = this.getWinner(userChoice, compChoice);
            this.showWinner(winner);
        },
        getCompChoice() {
            const choices = ["r", "p", "s"];
            const randomNumber = Math.floor(Math.random() * 3);
            return choices[randomNumber];
        },
        getWinner(userChoice, compChoice) {
            if (userChoice === compChoice) {
                this.resultDiv = "It's a tie.";
                return "draw";
            } else if (userChoice === "r") {
                if (compChoice === "s") {
                    this.resultDiv = `${this.convertToWord(userChoice)} beats ${this.convertToWord(compChoice)}. You win!`;
                    return "user";
                } else {
                    this.resultDiv = `${this.convertToWord(compChoice)} beats ${this.convertToWord(userChoice)}. You lose.`;
                    return "comp";
                }
            } else if (userChoice === 'p') {
                if (compChoice === 'r') {
                    this.resultDiv = `${this.convertToWord(userChoice)} beats ${this.convertToWord(compChoice)}. You win!`;
                    return "user";
                } else {
                    this.resultDiv = `${this.convertToWord(compChoice)} beats ${this.convertToWord(userChoice)}. You lose.`;
                    return "comp";
                }
            } else if (userChoice === 's') {
                if (compChoice === 'p') {
                    this.resultDiv = `${this.convertToWord(userChoice)} beats ${this.convertToWord(compChoice)}. You win!`;
                    return "user";
                } else {
                    this.resultDiv = `${this.convertToWord(compChoice)} beats ${this.convertToWord(userChoice)}. You lose.`;
                    return "comp";
                }
            }
        },
        showWinner(winner) {
            if (winner === "user") {
                this.userScore++;
            } else if (winner === "comp") {
                this.compScore++;
            }
        },
        convertToWord(letter) {
            if (letter === "r") return "Rock";
            if (letter === "p") return "Paper";
            return "Scissors";
        }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #25272e;
}

img {
    width: 100px;
    height: 100px;
}

header {
    background: white;
    margin: 20px auto;
    padding: 20px;
}

header>h1 {
    color: #25272e;
    text-align: center;
    font-family: 'Lato', sans-serif;
}


.score {
    margin: 20px auto;
    border: 3px solid white;
    border-radius: 5px;
    text-align: center;
    width: 700px;
    color: white;
    font-size: 46px;
    padding: 15px 20px;
    font-family: 'Lato', sans-serif;
    position: relative;
}


.badge {
    background: rgb(177, 40, 67);
    font-size: 14px;
    padding: 2px 10px;
    font-family: 'Lato', sans-serif;
}

#user-label {
    position: absolute;
    top: 30px;
    left: -25px;
}

#comp-label {
    position: absolute;
    top: 30px;
    right: -30px;
}

.result {
    color: white;
    font-size: 40px;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
}

.choices {
    max-width: 600px;
    margin: auto;
    text-align: center;
}

.choice {
    display: inline-block;
    padding: 10px;
    margin: 0 15px;
}

.choice img {
    border-radius: 25%;
}

.choice:hover {
    cursor: pointer;
}

@media screen and (max-width: 600px) {
    .choices {
        width: 100%;
        margin: auto;
        display: flex;
    }

    .choice {
        margin: 0 5px;
    }

    .header {
        width: 100%;
        margin: 20px auto;
    }

    .score {
        width: 80%;
        margin: auto;
    }
}

#action-message {
    text-align: center;
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 25px;
}

.green-glow {
    border: 4px solid rgb(26, 185, 26);
    box-shadow: 0 0 10px rgb(13, 126, 13);
}

.red-glow {
    border: rgb(153, 17, 17);
    box-shadow: 0 0 10px rgb(102, 14, 14);
}

.grey-glow {
    border: rgb(104, 98, 98);
    box-shadow: rgb(114, 99, 99);
}

.attribution {
    margin: 50px auto;
    width: 50%;
    padding-top: 50px;
    text-align: center;
}
</style>