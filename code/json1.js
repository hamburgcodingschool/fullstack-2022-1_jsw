import data from "./data_files/countries.json" assert { type: 'json'};
let listCountries = data.countries;
console.log(listCountries.length);
// list the name of each country
// 3 alternatives using 3 different for loops
// for (let country of listCountries) {
//     // console.log(country);
//     const node = document.createElement("p");
//     const textnode = document.createTextNode(country.Name);
//     node.appendChild(textnode);
//     document.querySelector("body").appendChild(node);
// };
// listCountries.forEach(function (element, index) {
//     document.querySelector("body").innerHTML+=`<p>${element.Name}</p>`;
// });
// for (let pos=0; pos<listCountries.length; pos++) {
//    document.querySelector("body").innerHTML+=`<p>${listCountries[pos].Name}</p>`;
// }

// Show only the names of European countries
// for (let pos=0; pos<listCountries.length; pos++) {
//     if (listCountries[pos].Continent==="Europe") {
//         document.querySelector("body").innerHTML+=`<p>${listCountries[pos].Name}</p>`;
//     }
// }

// Show only the names of countries from Southern Europe
//     if (listCountries[pos].Region==="Southern Europe") {

// Only show the countries which name begins with a P.
// for (let country of listCountries) {
//     // if (country.Name.charAt(0)==="P") {
//     // if (country.Name[0]==="P") {
//     if (country.Name.startsWith("P")) {
//         document.querySelector("body").innerHTML+=`<p>${country.Name}</p>`;
//     }
// }

// alternative using functional programming
listCountries
    .filter(country => country.Name.charAt(0)==="P")
    .map(country => document.querySelector("body").innerHTML+=`<p>${country.Name}</p>`);