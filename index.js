let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}
let value = 0
function save() {
    value += count
    saveEl.textContent += value + ' - '
    value = 0
    count = 0
    countEl.innerText = 0
    console.log(count)
}


