
//the task is to create a rock paper scissors game where there are 2 players
//player n.1 the computer randomly chooses between rock, paper and scissors with the Math.random each number representing an object
//player n.2 the user uses a prompt popup and writes their guess there
//the final algorithm defines who is the winner or the loser
//you know, ill get to this later, ill just go build sth physical for now, like a car, learning a new programming language is HARD

function getComputerChoice() { 
    let choices = ["rock","paper","scissors"];
   let choiceInt =  Math.floor(Math.random() * choices.length); 
   //choiceInt represents the position of the value in the array
   let choice = choices[choiceInt]
   //the choiceInt in the bracket calls for the value
    return choice
}

console.log(getComputerChoice())

// function getHumanChoice() { 
//     let input = prompt("1, 2, 3 go!")
//         for(input == ) { 
//             if(input == "rock") { 
//                 alert("rock")
//             } else if(input == "paper") { 
//                 alert("paper!")
//             } else if(input == "scissors") { 
//                 alert("scissors!")
//             }
//         }
// }

//     function evaluateWinner(getComputerChoice, getHumanChoice) { 
//         for()
//     }