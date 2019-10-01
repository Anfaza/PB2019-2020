/*   During the lesson
const productList = [];

productList.push('Tandenborstel')
productList.push('Deodorant')
productList.push('Bakmeel')
productList.push('Wortels')
productList.push('Tandpasta')
productList.push('Krop Sla')
productList.push('Maggi')
productList.push('Croky Chips')
productList.push('WC papier')
productList.push('Shampoo')

console.log(productList);

productList.pop(); // removes last array

console.table(productList);

productList.forEach(function (val, index, arr) {
    console.log(`On ${index} value is ${val}`);
});

for (let index = 0; index < productList.length; index++) {
    const element = productList[index]
    console.log(element)

}

const newProductList = productList.map(function (val, index, arr) {
    return val.toUpperCase();


})
console.table(newProductList)


// same as foreach

const products = productList.map(function (val, index, arr) {


    return `Product ${index}: ${val}`;
})

console.table(products)

const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

function totalPrice(productPrices) {
    let price = 0;

    productPrices.forEach(function (val, index, arr) {
        price += val;
    });

    return price
}
const b = totalPrice(productPrices);
console.log(b);

function averageNumber(productPrices) {

    let newAverage = totalPrice(productPrices) / productPrices.length;
    return newAverage;

};
console.log(averageNumber(productPrices).toFixed(2)); */

// Laprounds

const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];


/**
 * Function to create a randum number
 * @param 
 * @returns a specific number between 0 and 1
 */
function randomNumber() {

    let chosenNumbers = lapRounds.length;
    let mr = Math.random();
    let theChosenOne = Math.floor(mr * chosenNumbers);
    let ultimateNumber = lapRounds[theChosenOne]

    return ultimateNumber;
    //return
}

console.log(randomNumber());


// All my records
2.
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];


for (let index = 0; index < allMyRecords.length; index++) {
    {
        for (let idx = 0; idx < allMyRecords[index].length; idx++) {

            console.log(allMyRecords[index][idx])
        }

    }

}

//Filter Assignment

lapRounds.splice(4, 0, 'Voorbeeld')

console.log(lapRounds)

/* What you can see if you look at this for loop that is given it commands to push  new value,
 whenever the index reaches 4 in to the array.
While my piece of code basically does the same but is much smaller.

const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {

        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
 }

*/
