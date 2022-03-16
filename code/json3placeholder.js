// Reading from a remote REST API
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
      console.log(json);
      for (let pos=0; pos<json.length; pos++) {
        document.querySelector("body").innerHTML+=`<p>${json[pos].title}</p>`;
    }
  })