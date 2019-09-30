

/* DURING THE LESSON
function giveMeSomeNiceName(gender) {
    let myNewName = '';
    if (gender == 'female') {
        myNewName = 'Lola'
        console.log(myNewName)
    }
    else {
        myNewName = 'Jan'
        console.log(myNewName)
    }
    return myNewName;
}

giveMeSomeNiceName('female')

function pig(numberOfpigs) {
    let pigs = '';

    for (let i = 1; i <= numberOfpigs; i++) {

        pigs = pigs += '🐷';

        // varkentjes opslaan
        //🐷🐷🐷🐷🐷
    }
    return pigs + 'knorrr';
}
console.log(pig(15))

function factorial(num) {
    let total = 1;

    for (let i = 1; i <= num; i++) {
        total = total * i;

    }
    return total;
}
console.log(factorial(5))
*/

// Fibonnaci's function

function Fibonnaci(num) {

    let start = 1;
    let counter = 0;
    let temp;

    while (num >= 0) {

        temp = start;
        start = start + counter;
        counter = temp;
        console.log(counter);

        num--;

    }
}

Fibonnaci(10);

//  Function Countdown
function countDown(newYear) {
    let time = 10;

    while (time >= 1) {
        console.log(time);
        if (time == 1) {

            console.log(newYear + ' Happy New Year')

        }
        time--;
    }
}
countDown('2019');

// Assignment hoisting.
/* Function declaration will work because Javascripts
 understand that this function needs the output of Say Hi even when I called the function first.*/
hoist()
function hoist() {

    let example = 'Hi'
    console.log(example)

}
hoisted()
let hoisted = function () {
    console.log('This wont work.')

}
// As you can see this wont work, because the function is already declared as a variable so the engine can't hoist an other variable.