//Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

function logMonth(number) {  //gave a function and named it "logMonth" and gave it a parameter of number
    let month = number === 1 ? "January" : // 1 = number and month = January then repeated it to the other months
    number === 2 ? "Febuary" :
    number === 3 ? "March" :
    number === 4 ? "April" :
    number === 5 ? "May" :
    number === 6 ? "June" :
    number === 7 ? "july" :
    number === 8 ? "August" :
    number === 9 ? "September" :
    number === 10 ? "October" :
    number === 11 ? "November" :
    number === 12 ? "December" :
    "invalid number"; //anything else then the result would be invalid
    
    console.log(number + " - " + month ); // logging the number and the month
}

logMonth(4) // calling the function with a number correlating to the month(1-12). 