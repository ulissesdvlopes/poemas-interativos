let escurecerButton = document.getElementById("escurecer-btn");
let content = document.getElementById("content");

const colorActive = "#000";
const colorInactive = "#fff";

escurecerButton.addEventListener("change", (e) => {
    
    if(e.target.checked) {
        content.style.backgroundColor = colorActive;
        return;
    }
    content.style.backgroundColor = colorInactive;
})
