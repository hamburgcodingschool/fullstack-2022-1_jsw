-------------------------------------------------------
### REST APIs - Exercise 1
-------------------------------------------------------

Create an account on the OpenWeatherAPI site (https://openweathermap.org) and get a key.

Access the [Current Weather Data](https://openweathermap.org/current) API from a web page using the Fetch method.

Show the current weather for a city using metric units and your own language (German).

Try to understand how you can show the icon for the current weather.

Investigate the Geolocation API so that you get the coordinates (latitude and longitude) for your current location. Use those coordinates to show the corresponding current weather.

-------------------------------------------------------
### REST APIs - Exercise 2
-------------------------------------------------------

Change the personsapi.html/personsapi.js files, so that you can show an HTML table with the contents of the db.json file.

On the personsapi.html file also create a form, before the table, with 3 fields - Name, City and Country - and a submit button.

To run the JSON Server, change to the directory where the db.json file is, using the "cd" command, like:

$ cd data

And then run the following command:

$ json-server --watch db.json