const express = require("express");
const gameState = {
    name: "",
    score: 0, 
    choiceLunch: ["banana", "berries"],
    choiceProblem: ["fight", "run"],
    choiceTired: ["nap", "walk"],
    choiceWeather: ["leaf", "cover"],
    choiceRiver: ["swim, swing"]

}
let ending1 = ("You are feeling very run down and will need to rest. You are taken to a family memebers home in the village to rest for the evening. ");
let ending2 = ("You made it just in time for the celebration! You go to a friends home to get ready for the evening ahead. Congrats!");

const app = express()
const port = 3000

app.listen(port, function(req, res) {
    console.log(`app listening on port ${port}`)
  })
app.get("/start", function(req, res){
    res.send(`Please enter your name before starting the game. curl http://localhost:3000/camp?name={}`)
})
app.get('/camp', function(req, res) {
    let name = req.query.name
    res.send("Hello " + name + '! Welcome to Jungle Journey! You have been invited to a celebration at a nearby village. You must walk through the jungle to get to the village. Along the way you will make choices which will determine if you will be joining the celebration. ' + "\n You have now entered the jungle and are walking down the path to the village... curl http://localhost:3000/hungry");
     
  })

app.get('/hungry', function(req, res){

 res.send(`You have been walking for a while and feel your stomach rumble..you must be hungry!\n
  You look in your bag and realize that you left your lunch at home!!!\n
  You see a banana tree up ahead and a berry bush across from it. \n
  You can climb the tree to get a banana or pick berries from the bush. \n
  Which do you choose?\n
  Choose Banana or Berries for lunch. curl http://localhost:3000/choicelunch?lunch={}`);  
}) 

app.get('/choicelunch', function(req, res){
    let lunch = req.query.lunch
    console.log(lunch) 
    let gameLunch = gameState.choiceLunch[0];
    let berriesLunch = gameState.choiceLunch[1];
    
    if (lunch === gameLunch) {
        gameState.score = gameState.score + 1; 
        score = gameState.score
        console.log(score)
        res.send('You climb up the tree to grab some bananas but when you almost reach the top you suddenly see a chimp. You quickly climb down the tree and run down the path without a banana. curl http://localhost:3000/issue');
    } else if (lunch === berriesLunch){
        let score = gameState.score;
         score = score 
         console.log(score)
        res.send("You walk to the bush, inspect the berries. The berries are familiar so you eat them and carry on down the path...  curl http://localhost:3000/issue");
    } else {
        res.send("Sorry, this is not an option. Please try again. Options are banana or berries.");
    }
})   

app.get('/issue', function(req, res){

    res.send(`You continue walking down the path when suddenly a tiger jumps out of the bushes infront of you. You can either fight the tiger or try to run away. Choose fight or run. curl http://localhost:3000/choicetiger?problem={}`);  
   }) 

app.get('/choicetiger', function(req, res){
    let problem = req.query.problem
    console.log(problem) 
    let fightProblem = gameState.choiceProblem[0];
    let runProblem = gameState.choiceProblem[1];
    if (problem === fightProblem) {
        gameState.score = gameState.score + 1;
        console.log(score)
        res.send("You fight the tiger and win! The tiger runs away. Phew..time to move on down the path...  curl http://localhost:3000/sleepy");
    } else if (problem === runProblem) {   
        let score1 = gameState.score
        score1 = score1 
        console.log(score1)
         res.send("Attempt to run around the tiger but he claws your leg! You managed to get away but now you must continue with a wounded leg at a slow pace...   curl http://localhost:3000/sleepy");
    } else {
        res.send("Sorry, this is not an option. Please try again. Options are fight or run.");
    }
})
app.get('/sleepy', function(req, res){

    res.send(`You have become very tired on this journey with the events that have transpired and are contimplating a nap. There is a fallen tree on the lefthand side of the path which provides some shade and protection. You can choose to take a nap or continue down the path. Choose nap or walk.  curl http://localhost:3000/choicetired?tired={}`);  
   }) 

app.get('/choicetired', function(req, res){
    let tired = req.query.tired
    console.log(tired) 
    let gameNap= gameState.choiceTired[0]
    let gameWalk = gameState.choiceTired[1]

    if (tired === gameNap) {
        res.send("You sleep under the fallen tree. You overslept and now it will take you much longer to reach the village... curl http://localhost:3000/rainyday");
       let score = gameState.score
        console.log(score)
    } else if (tired === gameWalk) { 
        gameState.score = gameState.score +1;
        score = gameState.score
        console.log(score)
         res.send("You continue walking. You are tired and are walking at a slower pace but it wont be too much longer before you reach the village...  curl http://localhost:3000/rainyday");
        } else {
        res.send("Sorry, this is not an option. Please try again. Options are nap or walk");
    
    }
})
app.get('/rainyday', function(req, res){
    res.send(`You have walked for a while now and it has started to rain! You can either grab a large leaf from a nearby tree to use for protection and continue walking or you can take cover under a nearby tree untilit stops. Choose leaf or cover. curl http://localhost:3000/choiceweather?rain={}`)
})

app.get('/choiceweather', function(req, res){
    let rain = req.query.rain
    console.log(rain) 
   let gameLeaf =  gameState.choiceWeather[0]
   let gameCover = gameState.choiceWeather[1]

    if (rain === gameLeaf) {
        let score = gameState.score
        console.log(score)
        res.send("You rip a large leaf from a nearby tree and use it as an umbrella. The leaf did not last long as there are now holes in it. You are wet and cold. curl http://localhost:3000/ending");
    } else if (rain === gameCover) { 
        gameState.score = gameState.score + 1 ;
        score = gameState.score;
        score = score
        console.log(score)
         res.send("You wait under a tree until it stops. The rain quickly passes and you continue down the path...  curl http://localhost:3000/ending");
        } else {
        res.send("Sorry, this is not an option. Please try again. Options are cover or leaf");
    
    }
})



/ app.get('/ending', function(req, res){
        let ending = req.query.ending
        if (ending >2) {
            res.send(ending1);
    
        } else if (ending <2){    
            res.send(ending2);
        }

    })













    // app.get('/choiceriver, function(req, res){
//     let river = req.query.river
//     console.log(river)
//     let riverSwim = gameState.choiceRiver[0];
//     let riverSwing = gameState.choiceRiver[1];
//     if (problem === fightProblem) {
//         gameState.score = gameState.score + 1;
//         console.log(score)
//         res.send("You fight the tiger and win! The tiger runs away. Phew..time to move on down the path...");
//     } else if (problem === runProblem) {   
//         let score1 = gameState.score
//         score1 = score1 
//         console.log(score1)
//          res.send("Attempt to run around the tiger but he claws your leg! You managed to get away but now you must continue with a wounded leg at a slow pace...");
//     } else {
//         res.send("Sorry, this is not an option. Please try again. Options are fight or run.");
//     }
// })

// app.get('/ending', function(req, res){
//     let ending = (" ")
//     console.log(ending) 
//     gameState.choiceending = ending
//     if (gameState.score >30) {
//         res.send(ending1);

//     } else {gameState.score <30}{    
//         res.send(ending2);
//     }
// })
//    
// is gamestate greater or less than - 
// app.get('/choicevillage', function(req, res) {
//     let village = req.query.village
//     console.log(village) 
//     gameState.choiceproblem = village
//     if (village === "celebration") {
//         res.send(ending1);
//     } else if (village === "rest") {   
//          res.send(ending2);
//     }
// })

//WINNER WITH MOST POINTS WILL HAVE FEEDBACK OF "YOU WILL GO TO THE CELEBRATION" LOSER WILL HAVE FEEDBACK OF "YOU NEED TO RECOVER AND REST. YOU HAVE TO MISS THE CELEBRATION."
    
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

//Scores
// 30+, ending 1
// 20-29 ending 2
// 10- 19 ending 3
//  less than 10, bad ending


//     else if....
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




