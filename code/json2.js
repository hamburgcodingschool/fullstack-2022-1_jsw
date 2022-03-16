function getDataFromFile() {
    // reading local file
    fetch('data_files/countries.json')
        // response is the content of the file
        // .then(response => console.log(response));
        // uses JSON.parse() to convert from JSON to a JavaScript array/object
        // .then(response => response.json())
        .then(function(response) { // anonymous function
            return response.json();
        })
        .then(json => {
            console.log(json);
            console.log(json.countries);
            console.log(json.countries[0]);
            let listCountries=json.countries;
            console.log(listCountries.filter(country => country.Continent==="Europe"));
            for (let pos=0; pos<listCountries.length; pos++) {
                document.querySelector("body").innerHTML+=`<p>${listCountries[pos].Name}</p>`;
            }
        });
}
document.getElementById("btFetch").addEventListener("click",getDataFromFile);
