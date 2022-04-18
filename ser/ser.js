console.log("script running");

let ranges = [
    document.getElementById("range0"),
    document.getElementById("range1"),
    document.getElementById("range2")
]

let conteudos = [
    document.getElementById("conteudo1"),
    document.getElementById("conteudo2"),
    document.getElementById("conteudo3")
]


let values = ["0", "1", "2"]
const WORDS = {
    "0": "eu",
    "1": "sou",
    "2": "só"
}

function handleChange(e) {
    let placement = e.target.id.slice(-1);
    let newValue = e.target.value;
    let oldValue = values[placement];
    let lastPlacement = values.indexOf(newValue);
    values[placement] = newValue;
    values[lastPlacement] = oldValue;
    conteudos[placement].textContent = WORDS[newValue];
    conteudos[lastPlacement].textContent = WORDS[oldValue];
    ranges[lastPlacement].value = oldValue;
}

ranges.forEach(range => range.addEventListener("change", handleChange))
