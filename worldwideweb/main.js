let dateInput = document.getElementById("date-input");
let submit = document.getElementById("submit");
let reviewText = document.getElementById("review");

submit.addEventListener("click", () => {
    const answer = dateInput.value;
    if(answer == "1990-12-25") {
        reviewText.style.display = "block";
    }
})