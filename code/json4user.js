function getUserInfo(user_id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response.status);
            return Promise.reject(response.status);
        }
    })
    .then(json => {
        // console.log(json);
        let content="<section>";
        content+=`<h2>${json.name}</h2>`;
        content+=`<p><strong>E-mail:</strong> ${json.email}</p>`;
        content+=`<p><strong>Phone number:</strong> ${json.phone}</p>`;
        content+="<section>";
        document.querySelector("#userInfo").innerHTML=content;
    })
    .catch(error => {
        console.log("An error occurred: "+error);
        if (error===404) {
            window.location.href="errorpage.html";
        } else {
            alert("Some other error!");
        }
    });
}

const queryStr=window.location.search;
const urlParams = new URLSearchParams(queryStr);
if (urlParams.has('id')) {
    let user_id=urlParams.get('id');
    // console.log(user_id);
    getUserInfo(user_id);
} else {
    alert("No parameter!");
}