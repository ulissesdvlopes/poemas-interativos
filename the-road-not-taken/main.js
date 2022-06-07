const submit = document.getElementById("submit");
const url = "https://poem-server.vercel.app/vote";
const resultsNo = document.getElementById("results-no");
const resultsYes = document.getElementById("results-yes");

function buildProgress(value) {
    return `<progress value="${value}" max="100">${value} %</progress>${value}%`
}

function displayResults(results, vote) {
    submit.disabled = true;
    let no = vote == 'no' ? results.no + 1 : results.no;
    let yes = vote == 'yes' ? results.yes + 1 : results.yes;
    let noPercentage = 100 * (no)/(no+yes);
    noPercentage = noPercentage.toFixed(2);
    const yesPercentage = 100 - noPercentage;
    resultsNo.innerHTML += buildProgress(noPercentage);
    resultsYes.innerHTML += buildProgress(yesPercentage);
}

submit.addEventListener("click", e => {
    e.preventDefault();
    const common = document.getElementById("common");
    const uncommon = document.getElementById("uncommon");

    let vote = 'no';

    if(common.checked) {
        //console.log("increment common");
        vote = 'yes';
    } 
    else if(uncommon.checked) {
        //console.log("increment uncommon");
    }
    else {
        return;
    }

    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vote })
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayResults(data, vote);
        })
        .catch(err => console.log(err))

})