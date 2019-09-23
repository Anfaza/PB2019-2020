/* DURING THE LESSON
const currentAction = 'Strings';

if (currentAction === 'Calculating') {
    // if calculating : optellen -delen -aftrekken- vermeningvuldigen
    let x = 50;
    let y = 85;
    console.log('optellen', x + y)
    console.log('aftrekken', x-y)
    console.log('delen', x/y)
    console.log('vermenigvuldigen',x*y )
}
else if(currentAction === 'Strings'){
    // if strings: uppcercase - match - length - substring - charat

    let word = "Prachtig"
    console.log(word.charAt(5))
    console.log(word.length)
    console.log(word.toUpperCase())
    console.log(word.match("ach"))
    console.log(word.substring(2,5))

}
else if(currentAction === 'Booleans'){
    //if booleans : checken op bepaald cijfer.
    let z = 95
    let v = 333

    console.log('Check', z >= v)
}

else{console.log("Impossible")}

// And/OR 

let weight = 48;
let height = 1.53
let BMI = weight/(height*height);
//let BMI = math.round( weight/(height*height)*10)/10;

console.log(BMI.toFixed(2));

if (BMI < 18.5){
    console.log('Ondergewicht')
}
else if (BMI >= 18.5 && BMI  <= 24.9){
    console.log('Normaal gewicht')
}
else if ( BMI >= 25 && BMI <= 29.9){
    console.log('Overgewicht')
}

else if(BMI >= 30){
    console.log('Obesitas')
}
else{
    console.log('Stop eating!')
} 
*/

// TASK 1

let grade = 8;

if (grade < 6) {
    console.log('Onvoldoende')
} else if (grade === 6) {
    console.log('Voldoende')
} else if (grade >= 6 && grade <= 7) {
    console.log('Goed')
} else if (grade > 7 && grade <= 9) {
    console.log('Uitmuntend')
} else {
    console.log('Je hebt een tien!')
}
// Task 2

let graded = 6.9;

switch (true) {
    case graded < 6:
        console.log('Onvoldoende');
        break;
    case graded === 6:
        console.log('Voldoende');
        break;
    case graded > 6 && graded <= 7:
        console.log('Goed');
        break;
    case graded > 7 && graded <= 9:
        console.log('Uitmuntend');
        break;
    default:
        console.log('Je hebt een tien!');
}

// Task 3

const purchasedBook = true;
let job = 'Teacher';
const inTrain = true;


if (job === 'Teacher' && purchasedBook === true && inTrain === true) {
    console.log('Finally I can enjoy my book!')
} else {
    console.log('I have to hurry for the train!')
}
