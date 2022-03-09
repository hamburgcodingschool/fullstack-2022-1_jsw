let buttonInsert=document.querySelector("#btInsert");
let taskField=document.querySelector("#task");
let ulTasks=document.querySelector("#listOfTasks");

function insertTask() {
    let task=taskField.value;
    console.log(task);
    if (task==="") {
        alert("You must provide a task!");
    } else {
        // <li>task</li>
        // let listItem=document.createElement("li"); /* <li></li> */
        // let content=document.createTextNode(task);
        // listItem.appendChild(content); /* <li>sleep</li> */
        // ulTasks.appendChild(listItem);

        // ulTasks.innerHTML+="<li>"+task+"</li>";
        ulTasks.innerHTML+=`<li>${task}</li>`;
        taskField.value="";
        taskField.focus();
    }
}
buttonInsert.addEventListener("click",insertTask);