fetch("http://localhost:3000/persons")
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.status);
      }
    })
    .then(json => {
        console.log(json);
    })
    .catch(error => {
      console.log("An error occurred: "+error);
    });