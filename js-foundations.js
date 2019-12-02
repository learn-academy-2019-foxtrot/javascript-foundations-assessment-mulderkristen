// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
// Write a function called divisbleBy
// Take in an argument of a number, 15, 0, 385, -7
// Uses an if/else statement to check if %3 === 0
// Returns the correct statement whether or not it's evenly divisible by 

var numOne = 15
var numTwo = 0
var numThree = 385
var numFour = -7

const divisbleBy = (number) => {
    if (number%3 === 0){
        return `${number} is evenly divisible by 3.`
    } else {
        return `${number} is not evenly divisible by 3.`
    }
}
console.log(divisbleBy(numOne))
console.log(divisbleBy(numTwo))
console.log(divisbleBy(numThree))
console.log(divisbleBy(numFour))

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.
// object called helloMe
// the object will include firstName, lastName, age, numSiblings
// Use a method to return a sentence using the properties
var person = {
    firstName: "Kristen",
    lastName: "Mulder",
    age: 27,
    numSiblings: 2,
    getData: function(){
        return "Hi, my name is " + this.firstName +" "+ this.lastName + ". I am " + this.age + " years old and I have "+this.numSiblings+ " siblings." 
    }
}
console.log(person.getData())


// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"
// write a function calle everyOther 
// Takes in an array as an argument 
// Filters every other index by using indexOf formula to check %2 and returns a new array
// Joins the new array into a string

const everyOther = (array) => {
    return array.filter(value => {
        return array.indexOf(value) %2 === 0
    }).join(" ")
}
console.log(everyOther(randomNouns))


// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
// write a function called firstLetterCapitalized
// Takes an array as an argument
// Maps through the array and changes the first string index to a capital letter
// returns the array 

const firstLetterCapitalized = (array) => {
    return array.map(value => {
        return value[0].toUpperCase() + value.slice(1)
    })
}
console.log(firstLetterCapitalized(randomNouns))

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]
// A function called stringLength
// Takes an array as an argument
// Maps through the array and returns the length of each value in the array
// returns new array with the length of the string

const stringLength = (array) => {
    return array.map(value => {
        return value.length
    })
}
console.log(stringLength(randomNouns))

// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"


// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
// Function called alphabetSoup
// Takes one argument of a string 
// Splits the string into an array
// Sorts the array into alphabetical order
// Returns the new array joined as a new string 

const alphabetSoup = (string) =>{
    let newArray = string.split("")
    return (newArray.sort()).join("")
}
console.log(alphabetSoup(testString1))
console.log(alphabetSoup(testString2))
console.log(alphabetSoup(testString3))

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"
// function called alphabetStew
// Takes three arguments of strings
// Joins the string together into one string and then splits into an array
// Sorts the array into alphabetical order
// Returns the new array joined as a new string 

const alphabetStew = (string1, string2, string3) =>{
    let newString = string1.concat(string2, string3)
    let newArray = newString.split("")
    return (newArray.sort()).join("")
}
console.log(alphabetStew(testString1, testString2, testString3))

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
// Write a function called combinedString
// Takes two arguments of arrays
// Maps through one array and returns the equivalent element in the corresponding index of the other array
// Returns the array joined as a string

const combinedString = (arr1, arr2) => {
    return arr1.map((v,i) => {
        return [v + " " + arr2[i]]
    }).join(" ")
}
console.log(combinedString(amounts, animals))

// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
// Write a function called combinedStringTwo
// Takes two arguments of arrays
// Maps through one array and runs an if/ else statement to check if the element in the first array has a value of 1. 
// If it does, it returns the equivalent element in the corresponding index of the other array without an 's'
// If it doesn't, returns the equivalent element in the corresponding index of the other array
// Function will return the array joined as a string

const combinedStringTwo = (arr1, arr2) => {
    return arr1.map((v,i) => {
        if (v === 1) {
            return [v + " " + arr2[i].slice(0,(arr2[i].length - 1))]
        } else {
            return [v + " " + arr2[i]]
        }
    }).join(" ")
}
console.log(combinedStringTwo(amounts, animals))