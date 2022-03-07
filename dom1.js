// console.log(document.getElementById("text"));

// Event listener - callback
// document.getElementById("btChange").addEventListener("click",function() {
//     document.getElementById("text").innerHTML="<strong>Germany</strong>";
// });

function changeParagraph() {
    // document.getElementById("text").textContent="Germany";
    let element=document.getElementById("text");
    // document.getElementById("text").innerHTML="<strong>Germany</strong>";
    element.innerHTML="<strong>Germany</strong>";
    // color: #0000ff
    // document.getElementById("text").style.color="#0000ff";
    // element.style.color="#0000ff";
    // background-color: yellow
    // document.getElementById("text").style.backgroundColor="yellow";
    // element.style.backgroundColor="yellow";
    // element.style.fontSize="2em";

    element.classList.add("uichange");

}

document.getElementById("btChange").addEventListener("click",changeParagraph);

document.getElementById("content").style.display="none";

function showhidecontent() {
    let elContent=document.getElementById("content");
    // let displayValue=elContent.style.display;
    if (elContent.style.display==="none") {
        elContent.style.display="block";
        // document.getElementById("btDisplay").textContent="Hide content";
        this.textContent="Hide content";
    } else {
        elContent.style.display="none";
        // document.getElementById("btDisplay").textContent="Show content";
        this.textContent="Show content";
    }
}

document.getElementById("btDisplay").addEventListener("click",showhidecontent);