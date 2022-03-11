let buttonInsert=document.querySelector("#btInsert");
let taskField=document.querySelector("#task");
let ulTasks=document.querySelector("#listOfTasks");

function insertTask() {
    let task=taskField.value.trim();
    console.log(task);
    if (task==="") {
        alert("You must provide a task!");
        taskField.focus();
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

        // ulTasks.innerHTML+="<li>"+task+"</li>";
        ulTasks.innerHTML+=`<li>${task} <button type="button">X</button></li>`;
        let buttons=document.querySelectorAll("#listOfTasks button");
        for (let button of buttons) {
            button.addEventListener("click", function() {
                // console.log("Yes");
                this.parentElement.remove();
            });
        }
        taskField.value="";
        taskField.focus();
    }
}
buttonInsert.addEventListener("click",insertTask);