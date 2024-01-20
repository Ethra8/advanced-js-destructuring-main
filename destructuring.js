/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];

// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary,  joe] = ages

console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
}

let {mike, jill, alicia} = jobs;

console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];

let [johnNative, johnSecondary] = languages; //assign FIRST 2 VALUES of languages

let [, ,susyNative, susySecondary] = languages; // ADD 2 COMMAS ',' to assign THIRD VALUE in languages

let [, maryNative, , marySecondary] = languages; // ADD commas to skip values in array when assigning to variables
console.log(susyNative);
console.log(maryNative, marySecondary)

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese'
}

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];

let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others); // others = array of remaining elements

let favoriteFood = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};

let {brian, anna, ...otherPeople} = favoriteFood; // otherPeople = rest
console.log(brian);
console.log(anna);
console.log(otherPeople);