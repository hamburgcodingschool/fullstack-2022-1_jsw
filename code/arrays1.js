let names=["Toti","Florian","Pedro","Angelica","Frederik","Katja"];

let result=[];
for (let name of names) {
    if (name.length===5) {
        result.push(name);
    }
}
console.log(result);

let result2=[];
// => - arrow function
// result2=names.filter(name => name.length===5);
result2=names.filter(name => (name.length===5 && name.startsWith("K")));
// the arrow function is equivalent to:
// result2=names.filter(function(name) {
//     if (name.length===5) {
//         return true;
//     } else {
//         return false;
//     }
// });
console.log(result2);

// put all the names in uppercase
let result3=[];
for (let name of names) {
    result3.push(name.toUpperCase());
}
console.log(result3);

let result4=[];
result4=names.map(name => name.toUpperCase());
console.log(result4);

let temperatures = [ 23, 19, 12, -5, 67, -9 ];
let negativeTemperatures=[];
negativeTemperatures=temperatures.filter(temperature => temperature < 0)
console.log(negativeTemperatures);