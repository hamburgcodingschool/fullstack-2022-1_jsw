// let today=new Date();
let today=new Date(2022, 1, 15, 17, 23, 45);
console.log(today);
// milliseconds from epoch (special date - 1st January of 1970)
let ms=Date.now();
console.log(ms);
let day=today.getDate(); // 28
// let month=today.getMonth(); // 2
let year=today.getFullYear(); // 2022
console.log(day+"/"+(today.getMonth()+1)+"/"+year);
let month="";
switch (today.getMonth()) {
    case 0:
        month="January";
        break;
    case 1:
        month="February";
        break;
    case 2:
        month="March";
        break;
}
let weekDay="";
switch (today.getDay()) {
    case 0:
        weekDay="Sunday";
        break;
    case 1:
        weekDay="Monday";
        break;
    case 2:
        weekDay="Tuesday";
        break;
}

console.log(weekDay+", "+day+" of "+month+" of "+year);
console.log(today.toLocaleString("de"));
console.log(today.toLocaleString("pt"));