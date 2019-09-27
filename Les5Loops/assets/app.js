/* DURING THE LESSON var number = 0;

while (number <= 10) {
    console.log(number)

    ++number
}

let message = "Het is maandag!"
var i = 0;

while (i < message.length) {
    console.log(message[i])

    i++;
}

let awsomeWord = 'Geweldig'
var i = awsomeWord.length

while (i >= 0) {
    console.log(awsomeWord.charAt(i))

    --i
}

for (var number = 0; number <= 10; number++) {
    console.log(number)
}

let messageB = 'Het is maandag';
for (let index = 0; index < messageB.length; index++) {
    console.log(messageB[index])

}

let word = 'Geweldig'
for (let i = word.length; i >= 0; i--) {
    console.log(word.charAt(i))

}

for (let index = 1; index < 25; index++) {
    if (index % 3 === 0) {
        console.log(index + ' Deelbaar')
    }
    else { console.log(index + ' Niet deelbaar door 3') }

}*/

// Loop which checks if numbers are divideable by 4
  let i = 0

  while (i <= 100) {
    if (i % 4 === 0) {

       console.log(i + 'Deelbaar door 4')
     }
     else {
        console.log(i + 'Niet deelbaar door 4')
      }

     i++
 }

// Loop for Fibonacci's numbers
let number = 1;
let idx = 0;
let endNumber = 0;
let counter = 0;

while (counter <= 10) {
    endNumber = number + idx
    number = idx
    idx = endNumber
    console.log(endNumber)
    counter++
}

// Loop for calculating the array

let myNumbers = [2, 4, 8, 9, 12, 13];
let totalSum = 0;


for (let index = 0; index <= myNumbers.length - 1; index++) {

    totalSum = totalSum += myNumbers[index];

    console.log(totalSum)
}

console.log(2 + 4 + 8 + 9 + 12 + 13)

