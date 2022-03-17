const readlineSync = require("readline-sync");
const express = require("express");
const gameState = {}

const app = express()
const port = 3000

app.listen(port, function(req, res) {
    console.log(`app listening on port ${port}`)
  })

app.get('/camp', function(req, res) {

    let name = req.query.name
    res.send("Hello " + name + '!' + "\n You have now entered the jungle and are walking down the path to the village...");
     // res.send()
  })

app.get('/hungry', function(req, res){

 res.send(`You have been walking for a while and feel your stomach rumble..you must be hungry!\n
  You look in your bag and realize that you left your lunch at home!!!\n
  You see a banana tree up ahead and a berry bush across from it. \n
  You can climb the tree to get a banana or pick berries from the bush. \n
  Which do you choose?\n
  Choose Banana or Berries for lunch`);  
}) 

app.get('/choicelunch', function(req, res){
    let lunch = req.query.lunch
    console.log(lunch) 
    gameState.choicelunch = lunch
    if (lunch === "banana") {
        res.send("You climb up the tree to grab some bananas but when you almost reach the top you suddenly see a chimp. You quickly climb down the tree and run down the path without a banana.");
    } else if (lunch === "berries"){
        res.send("You walk to the bush, inspect the berries. The berries are familiar so you eat them and carry on down the path...");
    } else {
        res.send("Sorry, this is not an option. Please try again. Options are banana or berries.");
    }
})

app.get('/choicetiger', function(req, res){
    let problem = req.query.problem
    console.log(problem) 
    gameState.choiceproblem = problem
    if (problem === "fight") {
        res.send("You fight the tiger and win! The tiger runs away. Phew..time to move on down the path...");
    } else if (problem === "run") {   
         res.send("Attempt to run around the tiger but he claws your leg! You managed to get away but now you must continue with a wounded leg at a slow pace...");
    } else {
        res.send("Sorry, this is not an option. Please try again. Options are fight or run");
    }
})
 
    
         //include url from curl at endpoint. http://localhost:3000/camp to begin game again. 


    // let fruit = req.query.fruit; 
    //  if(fruit === banana){   
    //        console.log("You will workhard to get the banana you lost") }
    //         else if( fruit === cherries ){     console.log("You are the winner, we have cherries for lunch") }
    //          else {     console.log("That is not a choice of fruit"); }


    

// app.get('/number', function(req, res){

//     let num1 = Number(req.query.num1)
//     let num2 = Number(req.query.num2)
//     let result = Number(num1 + num2)
//     let lunch = 42



//     if (result === lunch) {
//         res.send("You climb up the tree to grab some bananas but when you almost reach the top you suddenly see a chimp. You quickly climb down the tree and run down the path without a banana.")
//     } else if (result < lunch){
//         res.send("You walk to the bush, inspect the berries. The berries are familiar so you eat them and carry on down the path...")
//     } else if (result > lunch){
//         res.send("you are too hungry")
//     }
// })








// console.log("Hello and welcome to the Jungle Journey! You have been invited by a friend in a nearby village to join a celebration. You will venture down the path and make choices along the way!");





// console.log("You chose " + hungry);
// let lunch = compare(whichOne)
//     if (lunch === bananas){
//         console.log(lunch)
//         console.log('You climb up the tree to grab some bananas but when you almost reach the top you suddenly see a chimp. You quickly climb down the tree and run down the path without a banana.'
//         ); }
//     else if (lunch === berries) {
//         console.log('You walk to the bush, inspect the berries. The berries are familiar so you eat them and carry on down the path...');
//     }
    
    // function compare(a, b) {
    //     if(a === "bananas") {
    //         return "
    //       } else if (b === "paper") {
    //         return "player2"
    //       } else if (b === "scissors") {
    //         return "player1"




