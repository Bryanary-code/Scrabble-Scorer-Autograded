// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
	let points = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			points += Number(pointValue)
		 }
 
	  }
	}
	return points
 }


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word:");
   return word
};

let simpleScorer = function(word) {
 
   let points = word.length;
   return points
};

let vowelBonusScorer = function(word) {
   word = word.toUpperCase()
   let points = 0

   for( let i = 0; i < word.length; i++) {
      if(word[i] === 'A' ||
         word[i] === 'E' ||
         word[i] === 'I' ||
         word[i] === 'O' ||
         word[i] === 'U' ) {
         points += 3
   } else {
      points += 1
   }
}
return points
}

function scrabbleScorer(word) {
   word = word.toUpperCase();
	let points = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			points += Number(pointValue)
		 }
 
	  }
	}
	return points
 }




let simpleScore = {
   name: 'Simple Scorer',
   description: 'each letter is worth 1 point',
   scorerFunction: simpleScorer
}

let vowelScore = {
   name: 'Bonus Vowels',
   description: 'vowels are 3 pts, consonants are 1 pt.',
   scorerFunction: vowelBonusScorer
}
let oldScore = {
   name: 'Scrabble',
   description: 'the traditional scoring algorithm.',
   scorerFunction: scrabbleScorer
}

const scoringAlgorithms = [simpleScore, vowelScore, oldScore];

function scorerPrompt() {
   let word = initialPrompt()
   let choice = Number(input.question("How would you like to score your word? Enter 0 for Simple scorer, 1 for Vowel scorer, or 2 for Traditional scorer: "))

   if (choice === 0) {
      return console.log(`Score for ${word} is: ${simpleScore.scorerFunction(word)}`)
   } else if (choice === 1) {
      return console.log(`Score for ${word} is: ${vowelScore.scorerFunction(word)}`)
   } else {
      return console.log(`Score for ${word} is: ${oldScore.scorerFunction(word)}`)

      }
   }


   function transform(obj) {
      newObj = { };
      for (key in obj) {
        keyArray = obj[key];
        for(i = 0; i < keyArray.length; i++) {
          newObj[keyArray[i].toLowerCase()] = Number(key);
          }
      }        
      return newObj
    }
    
let newPointStructure = transform(oldPointStructure)


function runProgram() {

   scorerPrompt();
   transform(oldPointStructure);
   
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
