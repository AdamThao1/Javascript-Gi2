//Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

const students =[
    {lastName: "eee", firstName: "ree", age: 19},
    {lastName: "burg", firstName: "nicko", age: 30},
    {lastName: "tree", firstName: "john", age: 24}
];
// created a array named students

//getting the second student
// the [1] after students is grabbing the 2nd student in the array
const secondStudent = students[1];


// console logging with string interpolation
console.log(`hello, my name is ${secondStudent.firstName} ${secondStudent.lastName} and im ${secondStudent.age} years old.`);


