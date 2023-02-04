let player = ""
let bot = ""
let botChoices = ["rock", "paper", "scissors"]
let game = true

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

let arrayCards = document.querySelectorAll(".card-game")


    arrayCards.forEach(card => {
        card.addEventListener('click', event => {
            if (game === true) {

                e = event.target
        
                player = e.getAttribute('value')
                
                const random = Math.floor(Math.random() * botChoices.length);
                bot = botChoices[random]

                document.getElementById("game-board").innerHTML = `<div style="font-size: 2em; padding: 20px;">${player}</div>
                                                                   <p style="font-size: 2em; padding: 20px;">VS</p>
                                                                   <div style="font-size: 2em; padding: 20px;">${bot}</div>`

                if ((player === "rock" && bot === "rock") ||
                    (player === "paper" && bot === "paper") ||
                    (player === "scissors" && bot === "scissors"))
                {
                    document.getElementById("game-result").textContent = `Match nul !`
                }
                else if ((player === "rock" && bot === "scissors") ||
                        (player === "paper" && bot === "rock") ||
                        (player === "scissors" && bot === "paper"))
                {
                    document.getElementById("game-result").textContent = `Vous avez gagné !`
                }
                else
                {
                    document.getElementById("game-result").textContent = `Vous avez perdu !`
                }

                game = false
            } 
            else if (game === false) {}
        })
    })