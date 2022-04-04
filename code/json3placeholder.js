// AJAX programming = asynchronous programming
// Consuming a REST API

console.log("BEGIN");
// Reading from a remote REST API
// fetch('https://jsonplaceholder.typicode.com/todos')
fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  .then(response => {
    console.log(response);
    // if (response.ok===true) {
    if (response.ok) {
      // response.status=200
      return response.json();
    } else {
      console.log(response.status);
      /* status codes:
      1xx - Informational (100 - Continue)
      2xx - Success (200 - OK / 201 - Created)
      3xx - Redirection and cached (301 - Moved Permanently / )
      4xx - Client-side error (404 - Not Found / 408 Request Timeout)
      5xx - Server-side error (500 - Internal Server Error)
      */
      return Promise.reject(response.status);
    }
  })
  .then(json => {
      console.log(json);
      let content="";
      // for (let pos=0; pos<json.length; pos++) {
        // document.querySelector("body").innerHTML+=`<p>${json[pos].title}</p>`;
        // document.querySelector("body").innerHTML+=`<p>${json[pos].name}</p>`;
      // }
      for (let object of json) {
        content+=`<tr data-id="${object.id}">`;
        content+=`<td>${object.name}</td>`;
        content+=`<td>${object.email}</td>`;
        content+=`<td>${object.phone}</td>`;
        content+=`<td>
          ${object.address.street}, ${object.address.suite}<br>
          ${object.address.zipcode} ${object.address.city}<br>
          GPS: ${object.address.geo.lat} ${object.address.geo.lng}
        </td>`;
        content+='</tr>';
      }
      console.log(content);
      document.querySelector("#usersTable tbody").innerHTML=content;
      document.querySelector("#totalUsers").textContent=json.length;

      let infolines=document.querySelectorAll("#usersTable tbody tr");
      for (let line of infolines) {
        line.addEventListener("click", function() {
          let id=this.getAttribute("data-id");
          // console.log(id);
          window.location.href=`json4user.html?id=${id}`;
        });
      }
      console.log("PROCESSING DATA");
  })
  .catch(error => {
    console.log("An error occurred: "+error);
    if (error===404) {
      // alert("Page not found!");
      // redirecting to another page (the error page)
      window.location.href="errorpage.html";
    } else {
      alert("Some other error!");
    }
  })

console.log("END");

