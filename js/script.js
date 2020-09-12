'use strict';
var score = 0;
var userName = '';
userName.toLowerCase();
userIntro(userName);
userName = prompt('What Is your Name?').toLowerCase();
function userIntro(userName) {

    var whoWantToGus = confirm('Would You Like to Play a Gusseng Game Mr/Ms. ' + userName);
    alert(' Mr/Ms ' + userName + ' Your answers Shoud be y/n or yes/no');
}



var majorName = '';
function major(majorName) {
    if (majorName == 'n' || majorName === 'no') {
        alert('Wrong Answer, My major Is statistic');
        console.log('Wrong Answer, My Major Is statistic');
    } else if (majorName === 'yes' || majorName === 'y') {
        alert('Correct Answer');
        score++;
        console.log('Correct Answer My Major is Statistic');
    } else {
        alert('You Just hit Enter Tab, or your Input is not related, Anyway Go On')
    }
}
majorName = prompt('IS my Major Statistc?');
majorName.toLowerCase();
major(majorName);


var uniName = '';
uniName = prompt('My University Name was University of Jordan?').toLowerCase();

university(uniName);

function university(uniName) {

    if (uniName === 'yes' || uniName === 'y') {
        alert('Correct Answer');
        score++;
        console.log('You Are Gamer Man, Perfect');
    } else {
        alert('Your Answer Is Wrong, My Uni Name was Uni Of Jordan');
        console.log('Your Answer Is Wrong, My Uni Name was Uni Of Jordan');
    }
}


var graduatedYear = 2010; 
graduatedYear = prompt(' My Grad Year was in 2010?');
graduatedYear.toLowerCase();
gradYear(graduatedYear);

function gradYear(graduatedYear) {

    if (graduatedYear !== 'no' && graduatedYear !== 'n') {
        alert('You are A big Gamer My dear, Correct Answer');
        console.log('Correct Answer');
        score++;
    } else if (graduatedYear !== 'yes' || graduatedYear !== 'y') {
        alert('Your Answer Is Wrong, My Grad Year Was in 2010');
    } else {
        alert('Dear, You are Just Hitting Enter Tab :)')
    }
}

var firstWork = '';
firstWork = prompt('My first Work was Data analyst?'); firstWork.toLowerCase();

fWork(firstWork);

function fWork(firstWork) {

    if (firstWork === 'yes' && firstWork === 'y') {
        alert('You are A big Gamer, Correct Answer');
        console.log('Correct Answer');
        score++;
    } else {
        alert('Your Answer Is Wrong, My first work was Data analyst');
        console.log('Your Answer Is Wrong, My first work was Data analyst');
    }
}



var whoWantToGus = confirm('Are You Getting Enough Joy Dear? Would you like to go on?');
var secondWork = 'Methodologist';
secondWork = prompt('My Second Work was Methodologist?'); secondWork.toLowerCase();
scWork(secondWork);
function scWork(secondWork) {

    if (secondWork === 'yes' && secondWork === 'y') {
        alert('You are A big Gamer, Correct Answer');
        console.log('Correct Answer');
        score++;
    } else {
        alert('Your Answer Is Wrong, My Second work was Metho..');
        console.log('Your Answer Is Wrong, My Second work was Metho..');
    }
}


userInput = prompt('Guess The Number Of The Top Places that I Have Visited!');
var userInput = Number(userInput);
userNumber(userInput);

function userNumber(userInput) {

    for (var i = 0; i < 3; i++) {

        if (userInput >= 5) {
            alert('Your Answer Is Too High');
            userInput = prompt('Guess The Number Of The Top Places that I Have Visited!');
        } else if (userInput <= 3) {
            alert('Your Answer Is Too Low');
            userInput = prompt('Guess The Number Of The Top Places that I Have Visited!');
        } else {
            alert('Your Answer Is Correct!');
            score++;
            break;
        }
        while (i >= 2) {
            alert('Dear ' + userInput + ' The correct Answer is 4 ');
            break;
        }
    }
}

var favColor = ['black', 'blue', 'gray', 'red', 'yellwo', 'green', 'white', 'softwhite', 'darkgray', 'Ivory'];
alert('For The Next Question You Have Just 6 Times To Try!!!');
var userAnswer = prompt('Guess one of my fav colors and type it here?').toLowerCase();
fColor(favColor);
function fColor(favColor) {
    for (var x = 0; x <= 5; x++) {
        for (var j = 0; j < favColor.length; j++) {
            if (userAnswer === favColor[j]) {
                alert('Your Answer Is Corrct!!');
                break;
                score++;
            }
        }
        if (userAnswer === favColor[j]) {
            break;

        }
        else {
            alert('Your Answer is Incorrect, Try again');
            x++;
            userAnswer = prompt('Guess my fav colors and type it here again?').toLowerCase();

        }
        while (x > 6) {
            alert('The Right Answers Should Be One Of Those: ' + favColor + '.');
            break;
        }
    }
}
alert('Your score is ' + score + 'out of  7');