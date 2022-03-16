// -----------------------------------------------------
// Exercise 1
// -----------------------------------------------------

// Given an array of temperatures,

let temperatures=[ 12, 34, 30, 3, 8, 23, -4 ];

// calculate the minimum, maximum and average temperature.
// let sum=0;
// let result=temperatures.sort((a,b) => a-b).map(x => sum+=x);
// console.log(result);

// let result=temperatures.sort((a,b) => a-b);
// temperatures.sort(function(a,b) {
//     return a-b;
// });
// descending numerical order
// temperatures.sort((a,b) => b-a);
// console.log(temperatures);
// console.log("Minimum="+temperatures[0]); // -4
// console.log("Maximum="+temperatures[temperatures.length-1]); // 34

let minimum=Math.min(...temperatures);
let maximum=Math.max(...temperatures);
console.log("Minimum="+minimum); // -4
console.log("Maximum="+maximum); // -4

let sum=temperatures.reduce((accumulator,currentTemperature) => accumulator+=currentTemperature, 0);
// let sum=0;
// for (let temperature of temperatures) {
//     sum+=temperature;
// }
// average
console.log("Average="+(sum/temperatures.length));

// function add(value1,value2) {
//     return value1+value2;
// }
// add(4,5);

// -----------------------------------------------------
// Exercise 2
// -----------------------------------------------------

// Given an array of numbers,

const listOfNumbers = [1, 2, 5, 6, 11, 14, 17, 19, 22];

// create a new array with only the even numbers:

// [2, 6, 14, 22]

console.log(listOfNumbers.filter(num => num % 2 === 0));

console.log(listOfNumbers.filter(num => num > 10));
console.log(listOfNumbers.filter(num => {
    if(num > 10) {
        return true;
    } else {
        return false;
    }
}));
let result1=[];
for(let num of listOfNumbers) {
    if (num > 10) {
        result1.push(num);
    }
}
console.log(result1);

console.log(listOfNumbers.map(num => num*num));

let students=[
    { name: "Toti", country: "Germany" },
    { name: "Florian", country: "Spain" },
    { name: "Pedro", country: "Portugal" },
    { name: "Angelica", country: "Germany" },
    { name: "Frederik", country: "Sweden" },
    { name: "Katja", country: "Iceland" }
];
// ['Germany', 'Spain', 'Portugal', 'Germany', 'Sweden', 'Iceland']
console.log(students.map(student => student.country));
console.log(students.filter(student => student.country==="Germany"));