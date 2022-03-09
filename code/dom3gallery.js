let images=document.querySelectorAll("#gallery > img");
// console.log(images[0]);
for (let image of images) {
    image.addEventListener("click", function() {
        // let imageSrc=this.src;
        let imageSrc=image.src;
        // console.log(imageSrc);
        document.querySelector("#bigPicture").src=imageSrc;
        // document.querySelector("#bigPicture").setAttribute("src",image.getAttribute("src"));
        document.querySelector("#dialog").style.visibility="visible";
    });
}

// whenever the user clicks on the btCloseDialog button we should close the dialog box
document.getElementById("btCloseDialog").addEventListener("click", function() {
    document.querySelector("#dialog").style.visibility="hidden";
});