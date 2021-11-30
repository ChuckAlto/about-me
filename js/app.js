'use strict';

let user= prompt('welcome, what is your first name?');
// console.log(user)
alert ('welcome to my site ' + user)


let game= window.confirm('We are going to play a guessing game, OK?');

if (game === true){
    alert('OK here we go.');
} else {
    alert('You don\'t really have a choice. Here we go!')
}


let ansOne= prompt('Did I ever live outside the United States').toLowerCase();
//console.log("Correct, I lived in Saudi Arabia for 2 years")
if (ansOne === 'yes' || ansOne === 'y'){
    alert('Correct ' + user + '! I lived in Saudi Arabia for two years.');
} else{
    alert('Sorry ' + user + ' That is incorrect. I lived in Saudi Arabia for two years.');
}


let ansTwo= prompt('Do I have an undergraduate degree in Criminology?').toLowerCase();
//console.log('that is correct')
if (ansTwo === 'yes' || ansTwo === 'y'){
    alert('Correct, I thought I would join the FBI and hunt paranormal entities.  I may have watched too much X-files growing up.');
} else {
    alert ('Incorrect. I do have a degree in Criminology, I thought I would join the FBI and hunt paranormal entities.  I may have watched too much X-files growing up.')
}
 

let ansThree= prompt('Did I watch the X-files too much growing up?').toLowerCase();
 //console.log('never')
if (ansThree === 'yes' || ansThree === 'y'){
    alert('Incorrect. You can never watch too much X-files. In fact I probably didn\'t watch enough.  I\'m ashamed of you ' + user + '\.' );
} else { 
    alert('Correct! There is never too much X-files.');
}


let ansFour = prompt('Did I meet my wife working at the casino?').toLowerCase();
//console.log('I sure did')
if (ansFour === 'yes' || ansFour === 'y'){
    alert('Correct! We have been together 11 years, Married for three.');
} else { 
    alert('Sorry wrong answer. We have been together 11 years, Married for three.')
}


let ansFive = prompt('Would I like to design video games after Code Fellows?').toLowerCase()
//console.log('yes I would')
if (ansFive === 'yes' || ansFive === 'y'){
    alert('Yes I would, whether it be my job or in my own free time I would like to design, code, and release at least one game.');
} else {
    alert('Sorry ' + user + ' wrong answer. whether it be my job or in my own free time I would like to design, code, and release at least one game.')
}

alert('Thanks for playing ' + user + ', Hope you learned a little more about me.')
