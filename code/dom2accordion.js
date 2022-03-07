// nodelist (array of HTMLElements)
let headers=document.querySelectorAll("#accordion > h2");
console.log(headers);
headers[0].nextElementSibling.style.display="none";
headers[1].nextElementSibling.style.display="none";
headers[2].nextElementSibling.style.display="none";

// for (let header of headers) {
//     header.addEventListener("click", function() {
for(let i=0;i<headers.length;i++) {
    headers[i].addEventListener("click", function() {
        // console.log(this);
        if (this.nextElementSibling.style.display==="none") {
            this.nextElementSibling.style.display="block";
        } else {
            this.nextElementSibling.style.display="none";
        }
    });
}

