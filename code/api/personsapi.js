let url="http://localhost:3000/persons";

function getPersons() {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.status);
      }
    })
    .then(persons => {
        console.log(persons);
        let content="";
        for (let person of persons) {
          content+='<tr>';
          content+=`<td>${person.name}</td>`;
          content+=`<td>${person.city}</td>`;
          content+=`<td>${person.country}</td>`;
          content+=`<td><button type="button" class="btDelete" data-id="${person.id}">X</button></td>`;
          content+='</tr>';
        }
        document.querySelector("#listPersons tbody").innerHTML=content;
        let deleteButtons = document.querySelectorAll(".btDelete");
        for (let button of deleteButtons) {
          button.addEventListener("click", function() {
            let id=this.getAttribute("data-id");
            console.log(id);
            // delete the person
            deletePerson(id);
          })
        }
    })
    .catch(error => {
      console.log("An error occurred: "+error);
    });
}

function deletePerson(id) {
  if (confirm("Confirm deletion of the person?")) {
    // http://localhost:3000/persons/7
    fetch(`${url}/${id}`,{ method: "DELETE" })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response.status);
        }
      })
      .then(result => {
        console.log(result); // {} - meaning the deletion was successful
        getPersons();
        alert("Record deleted!");
      })
      .catch(error => {
        console.log("An error occurred: "+error);
      });
  }
}

function insertPerson(valueName,valueCity,valueCountry) {
  let person = {
    name : valueName,
    city : valueCity,
    country : valueCountry
  }
  fetch(url, {
      method: "POST",
      headers : {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body : JSON.stringify(person)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.status);
      }
    })
    .then(answer => {
      console.log(answer);
      // { name: 'Angelica', city: 'Berlin', country: 'Germany', id: 5}
      getPersons();
      alert("Person number "+answer.id+" inserted");
    })
    .catch(error => {
      console.log("An error occurred: "+error);
    });
}

document.querySelector("#formPerson").addEventListener("submit", function(event) { // e, evt, event
  // stop the submission of the form
  event.preventDefault();
  let valueName=document.querySelector("#name").value;
  let valueCity=document.querySelector("#city").value;
  let valueCountry=document.querySelector("#country").value;

  insertPerson(valueName,valueCity,valueCountry);

});

getPersons();