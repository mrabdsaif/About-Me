'use strict';

var score = 0;
var userName = prompt('Hey! Whta Is Your Name ?');
var whoWantToGus = confirm('Mr/Ms ' + userName + ' Would you like To Play a Gussing Game ?');

alert('Mr/Ms ' + userName + ' You are Welcome! your answers should be y/n or yes/no');
var hugeArr = [];
console.log(hugeArr);
// qustion 1 !!

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



//Question 2 

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

// question 3

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


// question 4

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


// question 5 

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


// question 6 

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


// question 7 

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
















// var score = 0;
// var userName = '';
// userName.toLowerCase();

// userName = prompt ( 'What Is your Name?' ).toLowerCase();

// function userIntro(userName) {

//     var whoWantToGus = confirm('Would You Like to Play a Gusseng Game Mr/Ms. ' + userName);
//     alert(' Mr/Ms ' + userName + ' Your answers Shoud be y/n or yes/no');
//     console.log(whoWantToGus);
// }
// userIntro(userName);
// var majorName = '';
// function major(majorName) {
//     if (majorName === 'n' || majorName === 'no') {
//         alert('Wrong Answer, My major Is statistic');
//         console.log('Wrong Answer, My Major Is statistic');
//     } else if (majorName === 'yes' || majorName === 'y') {
//         alert('Correct Answer');
//         score++;
//         console.log('Correct Answer My Major is Statistic');
//     } else {
//         alert('I caught You red handed! You May hit Enter Tab, or your Input is not related, Anyway Go On')
//     }
// }
// majorName = prompt('IS my Major Statistc?');
// majorName.toLowerCase();
// major(majorName);


// var uniName = '';
// uniName = prompt('My University Name was University of Jordan?').toLowerCase();

// university(uniName);

// function university(uniName) {

//     if (uniName === 'yes' || uniName === 'y') {
//         alert('Correct Answer');
//         score++;
//         console.log('You Are Gamer Man, Perfect');
//     } else {
//         alert('Your Answer Is Wrong, My Uni Name was Uni Of Jordan');
//         console.log('Your Answer Is Wrong, My Uni Name was Uni Of Jordan');
//     }
// }


// var graduatedYear = 2010; 
// graduatedYear = prompt(' My Grad Year was in 2010?');
// graduatedYear.toLowerCase();
// gradYear(graduatedYear);

// function gradYear(graduatedYear) {

//     if (graduatedYear !== 'no' && graduatedYear !== 'n') {
//         alert('You are A big Gamer My dear, Correct Answer');
//         console.log('Correct Answer');
//         score++;
//     } else if (graduatedYear !== 'yes' || graduatedYear !== 'y') {
//         alert('Your Answer Is Wrong, My Grad Year Was in 2010');
//     } else {
//         alert('Dear, You are Just Hitting Enter Tab :)')
//     }
// }

// var firstWork = '';
// firstWork = prompt('My first Work was Data analyst?'); firstWork.toLowerCase();

// fWork(firstWork);

// function fWork(firstWork) {

//     if (firstWork === 'yes' && firstWork === 'y') {
//         alert('You are A big Gamer, Correct Answer');
//         console.log('Correct Answer');
//         score++;
//     } else {
//         alert('Your Answer Is Wrong, My first work was Data analyst');
//         console.log('Your Answer Is Wrong, My first work was Data analyst');
//     }
// }



// var whoWantToGus = confirm('Are You Getting Enough Joy Dear? Would you like to go on?');
// var secondWork = 'Methodologist';
// secondWork = prompt('My Second Work was Methodologist?'); secondWork.toLowerCase();
// scWork(secondWork);
// function scWork(secondWork) {

//     if (secondWork === 'yes' && secondWork === 'y') {
//         alert('You are A big Gamer, Correct Answer');
//         console.log('Correct Answer');
//         score++;
//     } else {
//         alert('Your Answer Is Wrong, My Second work was Metho..');
//         console.log('Your Answer Is Wrong, My Second work was Metho..');
//     }
// }


// userInput = prompt('Guess The Number Of The Top Places that I Have Visited!');
// var userInput = Number(userInput);
// userNumber(userInput);

// function userNumber(userInput) {

//     for (var i = 0; i < 3; i++) {

//         if (userInput >= 5) {
//             alert('Your Answer Is Too High');
//             userInput = prompt('Guess The Number Of The Top Places that I Have Visited!');
//         } else if (userInput <= 3) {
//             alert('Your Answer Is Too Low');
//             userInput = prompt('Guess The Number Of The Top Places that I Have Visited!');
//         } else {
//             alert('Your Answer Is Correct!');
//             score++;
//             break;
//         }
//         while (i >= 2) {
//             alert('Dear ' + userName + ' The correct Answer is 4 ');
//             break;
//         }
//     }
// }

// var favColor = ['black', 'blue', 'gray', 'red', 'yellwo', 'green', 'white', 'softwhite', 'darkgray', 'Ivory'];
// alert('For The Next Question You Have Just 6 trails !!!');
// var userAnswer = prompt('Guess one of my fav colors and type it here?').toLowerCase();
// fColor(favColor);
// function fColor(favColor) {
//     for (var x = 0; x <= 5; x++) {
//         for (var j = 0; j < favColor.length; j++) {
//             if (userAnswer === favColor[j]) {
//                 alert('Your Answer Is Corrct!!');
//                 break;
//                 score++;
//             }
//         }
//         if (userAnswer === favColor[j]) {
//             break;

//         }
//         else {
//             alert('Your Answer is Incorrect, Try again');
//             x++;
//             userAnswer = prompt('Guess my fav colors and type it here again?').toLowerCase();

//         }
//         while (x > 6) {
//             alert('The Right Answers Should Be One Of Those: ' + favColor + '.');
//             break;
//         }
//     }
// }
// alert('Your score is ' + score + 'out of  7');