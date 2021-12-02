'use strict';

let user= prompt('welcome, what is your first name?');
// console.log(user)
alert ('welcome to my site ' + user);


let game= window.confirm('We are going to play a guessing game, OK?');

if (game === true){
  alert('OK here we go.');
} else {
  alert('You don\'t really have a choice. Here we go!');
}

let counter = 0;
let ansOne= prompt('Did I ever live outside the United States').toLowerCase();
//console.log("Correct, I lived in Saudi Arabia for 2 years")
if (ansOne === 'yes' || ansOne === 'y'){
  alert('Correct ' + user + '! I lived in Saudi Arabia for two years.');
  counter++;
} else{
  alert('Sorry ' + user + ' That is incorrect. I lived in Saudi Arabia for two years.');
}


let ansTwo= prompt('Do I have an undergraduate degree in Criminology?').toLowerCase();
//console.log('that is correct')
if (ansTwo === 'yes' || ansTwo === 'y'){
  alert('Correct, I thought I would join the FBI and hunt paranormal entities.  I may have watched too much X-files growing up.');
  counter++;
} else {
  alert ('Incorrect. I do have a degree in Criminology, I thought I would join the FBI and hunt paranormal entities.  I may have watched too much X-files growing up.');
}


let ansThree= prompt('Did I watch the X-files too much growing up?').toLowerCase();
//console.log('never')
if (ansThree === 'yes' || ansThree === 'y'){
  alert('Incorrect. You can never watch too much X-files. In fact I probably didn\'t watch enough.  I\'m ashamed of you ' + user + '.' );
} else {
  alert('Correct! There is never too much X-files.');
  counter++;
}


let ansFour = prompt('Did I meet my wife working at the casino?').toLowerCase();
//console.log('I sure did')
if (ansFour === 'yes' || ansFour === 'y'){
  alert('Correct! We have been together 11 years, Married for three.');
  counter++;
} else {
  alert('Sorry wrong answer. We have been together 11 years, Married for three.');
}


let ansFive = prompt('Would I like to design video games after Code Fellows?').toLowerCase();
//console.log('yes I would')
if (ansFive === 'yes' || ansFive === 'y'){
  alert('Yes I would, whether it be my job or in my own free time I would like to design, code, and release at least one game.');
  counter++;
} else {
  alert('Sorry ' + user + ' wrong answer. whether it be my job or in my own free time I would like to design, code, and release at least one game.');
}

let correctA = '37';
let attempts = 3;
let guessNum = prompt('guess a number between 0 and 100.');

while (guessNum !== correctA && attempts > 0){
  attempts--;
  if (guessNum > 37){
    alert('that number is too high.');
  } else if (guessNum < 37){
    alert('that number is too low.');
  }
  guessNum = prompt('Guess Again');
}

if(guessNum === '37'){
  alert('That is the right number');
  counter++;
} else {
  alert('out of guesses the correct answer was 37');
}

let liquors = ['whiskey', 'rum', 'vodka', 'gin', 'tequila', 'absinthe', 'brandy', 'mezcal', 'rye', 'scotch'];
let fav = liquors[9];
let fave = liquors[4];
let guessLiquor = prompt(`What are my favorite types of liquor? possible answers include ${liquors[0]}, ${liquors[1]}, ${liquors[2]}, ${liquors[3]}, ${liquors[4]}, ${liquors[5]}, ${liquors[6]}, ${liquors[7]}, ${liquors[8]}, and ${liquors[9]}. There are two correct answers.`).toLowerCase();
let attempt = 5;

while (guessLiquor !== fav && guessLiquor !== fave && attempt > 0){
  attempt--;
  if (guessLiquor !== fav){
    alert('Wrong Liquor!');
  }
  guessLiquor = prompt('Guess Again');
}
if (guessLiquor === fav){
  alert(`That is Correct the other correct answer was ${fave}.`);
  counter++;
} else if (guessLiquor === fave){
  alert(`That is correct. The other correct answer was ${fav}.`);
  counter++;
} else {
  alert(`you are out of guesses. The correct answers are ${fav} and ${fave}.`);
}




alert(`Thanks for playing ${user}, you got ${counter}/7 correct.  Hope you learned a little more about me.`);
