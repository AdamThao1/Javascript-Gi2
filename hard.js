// Given the information below for Tom and Jerry

// Giving tom's information in variables
var tomHeight = 9;
var tomMass = 8;
var BMITom = tomMass / (tomHeight**2); // mass body index of tom

// Giving jerry's information in variables
var jerryHeight = 10;
var jerryMass = 45;
var BMIJerry = jerryMass / (jerryHeight**2); // mass body index of jerry

// creating the higher BMI
var higherBMI = BMITom > BMIJerry // created a vairable to compare the BMI's of Tom & JErry

console.log(`Is Tom's BMI higher than Jerry's? ${higherBMI}`)
console.log(BMITom)
console.log(BMIJerry)