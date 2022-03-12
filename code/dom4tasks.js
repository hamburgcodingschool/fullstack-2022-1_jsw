let form=document.querySelector("#formTasks");
let buttonInsert=document.querySelector("#btInsert");
let taskField=document.querySelector("#task");
let ulTasks=document.querySelector("#listOfTasks");
let arraysTasks=[]; /* empty array */

let values=localStorage.getItem("tasks");
console.log(values);
if (values!=="") {
    arraysTasks=JSON.parse(values);
    console.log(arraysTasks);
    for (let task of arraysTasks) {
        ulTasks.innerHTML+=`<li><span>${task}</span> <button type="button">X</button></li>`;
    }
    buttonEvents();
    spanEvents();
}

function buttonEvents() {
    let buttons=document.querySelectorAll("#listOfTasks button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            // console.log("Yes");
            this.parentElement.remove();

            let task=this.previousElementSibling.textContent;
            let position=arraysTasks.indexOf(task);
            arraysTasks.splice(position, 1);
            // console.log(arraysTasks);
            localStorage.setItem("tasks",JSON.stringify(arraysTasks));
        });
    }
}
function spanEvents() {
    let spans=document.querySelectorAll("#listOfTasks span");
    for (let span of spans) {
        span.addEventListener("click", function() {
            if (this.classList.contains("completed")) {
                this.classList.remove("completed");
                this.nextElementSibling.disabled=false;
            } else {
                this.classList.add("completed");
                this.nextElementSibling.disabled=true;
            }
        });
    }
}

function insertTask() {
    let task=taskField.value.trim();
    console.log(task);
    if (task==="") {
        alert("You must provide a task!");
    } else {
        // <li>task</li>
        // let listItem=document.createElement("li"); /* <li></li> */
        // let content=document.createTextNode(task+" ");
        // listItem.appendChild(content); /* <li>sleep</li> */
        // let button = document.createElement("button");
        // buttonInsert.setAttribute("type","button");
        // let buttonContent=document.createTextNode("X");
        // button.appendChild(buttonContent);
        // button.addEventListener("click", function() {
        //  this.parentElement.remove();
        // });
        // listItem.appendChild(button);
        // ulTasks.appendChild(listItem);

        /* API - Application Programming Interface */
        /* Storage API */
        arraysTasks.push(task);
        // console.log(arraysTasks);
        localStorage.setItem("tasks",JSON.stringify(arraysTasks));

        // ulTasks.innerHTML+="<li>"+task+"</li>";
        ulTasks.innerHTML+=`<li><span>${task}</span> <button type="button">X</button></li>`;
        buttonEvents();
        spanEvents();
    }
    taskField.value="";
    taskField.focus();
}
// buttonInsert.addEventListener("click",insertTask);
form.addEventListener("submit",function(event) {
    event.preventDefault();
    insertTask();
});
