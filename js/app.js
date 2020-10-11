'use strict';

var score = 0;
var userName = prompt('Hey! Whta Is Your Name ?');
var whoWantToGus = confirm('Mr/Ms ' + userName + ' Would you like To Play a Gussing Game ?');

alert('Mr/Ms ' + userName + ' You are Welcome! your answers should be y/n or yes/no');
var hugeArr = [];
console.log(hugeArr);


var myMajor = prompt(' Is my Major statistic ?').toLowerCase();

function majorName(myMajor) {

    if (myMajor === 'yes' || myMajor === 'y') {
        alert('Correct answer!');
        score++;
    } else if (myMajor === 'no' || myMajor === 'n') {
        alert('Wrong answer!');
    }
}

majorName(myMajor);




var uniName = prompt('Was my university Name, Jordan University ?').toLowerCase();

function MyUni(uniName) {

    if (uniName === 'yes' || uniName === 'y') {   // no !== no ---> no 
        alert('correct Answer !');
        score++;
    } else if (uniName === 'no' || uniName === 'n') {
        alert('wrong Answer!');
    } else {
        alert('Hey! You Have entered or hitted something not related to the answers y/n ');
    }
}

MyUni(uniName);



var gradYear = prompt('my Grad Year Was 2010 ?').toLowerCase();

function myGradYear(gradYear) {
    switch (gradYear) {
        case 'yes':
            alert('Correct Answer');
            score++;
            break;
        case 'y':
            alert('Corrcet!');
            score++;
            break;
        case 'no':
            alert('wrong answer');
            break;
        case 'n':
            alert('wrong answer');
            break;
        default:
            alert('You Have Entered Something not telated to the answers y/n');
            break;
    }
}
myGradYear(gradYear);




var firstJob = prompt('My first Job Was Data Analyst ');
firstJob.toLowerCase();

function myFirstWork(firstJob) {

    if (firstJob === 'yes' || firstJob === 'y') {
        alert('Correct Answer');
        score++;
    } else {
        alert('Wrong Answer')
    }
}
myFirstWork(firstJob);




var secondJob = prompt('My Second Job was Methodologist').toLowerCase();

function mySecondWork(secondJob) {

    if (secondJob === 'yes' || secondJob === 'y') {
        alert('Correct Answer');
        score++;
    } else {
        alert('Wrong Answer')
    }
}
mySecondWork(secondJob);




var userInput = 0;
    userInput = prompt('Guess the number of my best places to visit '); // ----> 1
    // userInput=Number;
function myNumber() {

    for (var i = 1; i <= 3; i++) {   // -----. 2,3,4 

        if (userInput == 10) {
            alert('Correct Answer');
            score++;
            return userInput;
        } else if (userInput > 10) {
            alert('Your Guessing Is too High!');
            userInput = prompt('Guess The number again !');
        } else if (userInput < 10) {
            alert('Your Guessing too low!');
            userInput = prompt('Guess The number again !'); 
        }else{
            alert('your answer not related');
            userInput = prompt('Guess The number again !');
        }
        if (i >= 3) {    // right after the last attempt ( attempt number 3) 
            alert('The number of my Best palces to visit is 10 !!!');
            console.log(i + 1);  // the global trial to guess = 1 ...
            break;
        }
    }
}
myNumber();




var colorArr = ['black', 'blue', 'gray', 'darkgray', 'Ivory'];
var stringArr = colorArr.toString();

function fovColor() {
    for (var j = 0; j <= 5; j++) {
        var userAnswer = prompt('What is my favorite color ?');
        for (var i = 0; i < colorArr.length; i++) {
            if (userAnswer == colorArr[i]) {
                alert('Correct Answer');
                score++;
                return stringArr;
            }
        }
        if (j >= 5) {
            alert('My favorite colours are : ' + stringArr);
            break;
        }
    }
}
fovColor();

alert(' Your Total Score is : ' + score + ' out of 7');


function render(){
    var render = document.getElementById('render');
    var table = document.createElement('table');
    render.appendChild(table);
    var tr = document.createElement('tr');
    table.appendChild(tr);
    tr.textContent =  'Mr/Ms ' + userName + 'Your Score In the Guessing Game is : ' + score + ' out Of 7';
}
render();


