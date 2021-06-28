let count = 0;
let countEl = document.getElementById("count-el");
let countBtn = document.getElementById("count-btn");

function countNewUser() {
    count = count + 1;
    countEl.innerHTML = count;
}